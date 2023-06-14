import classes from "./ButtonSidebar.module.css";

const ButtonSidebar = (props) => {
  return <button className={classes.button}>{props.children}</button>;
};

export default ButtonSidebar;
