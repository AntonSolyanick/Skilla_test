import classes from "./AudioPlayer.module.css";
import Button from "./Button";
import RangeSlider from "./RangeSlider";
import { ReactComponent as IconPlayButton } from "../../icons/iconsUI/playButton.svg";
import { ReactComponent as IconPauseButton } from "../../icons/iconsUI/pauseButton.svg";
import { ReactComponent as IconDownloadButton } from "../../icons/iconsUI/downloadButton.svg";
import { useState, useEffect } from "react";

let ctx = new AudioContext();
let playsound = ctx.createBufferSource();
let audio;

const AudioPlayer = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    fetch(`https://api.skilla.ru/mango/getRecord?record=${props.record}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer testtoken",
      },
    })
      .then((data) => data.arrayBuffer())
      .then((arrayBuffer) => ctx.decodeAudioData(arrayBuffer))
      .then((decodedAudio) => {
        audio = decodedAudio;
      })
      .catch((error) => console.log(error.message));
  }, []);

  const play = () => {
    playsound.buffer = audio;
    playsound.connect(ctx.destination);
    playsound.start(ctx.currentTime);
    setIsPlaying(true);
  };

  const stop = () => {
    playsound.stop(ctx.currentTime);
    setIsPlaying(false);
    ctx = new AudioContext();
    playsound = ctx.createBufferSource();
  };

  return (
    <div className={classes.playerContainer}>
      <p className={classes.durationAudio}>{props.duration}</p>
      {!isPlaying && (
        <Button onClick={play}>
          <IconPlayButton></IconPlayButton>
        </Button>
      )}
      {isPlaying && (
        <Button onClick={stop}>
          <IconPauseButton></IconPauseButton>
        </Button>
      )}
      <RangeSlider />
      <Button>
        <IconDownloadButton
          className={classes.downloadButton}
        ></IconDownloadButton>
      </Button>
    </div>
  );
};

export default AudioPlayer;
