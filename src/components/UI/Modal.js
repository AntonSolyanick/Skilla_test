import classes from "./Modal.module.css";

const Modal = (props) => {
  return <div onClick={props.onClick} className={classes.modal}></div>;
};

export default Modal;
