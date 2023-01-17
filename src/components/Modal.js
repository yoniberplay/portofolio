import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const portalElement = document.getElementById("forportal");

const Backdrop = (props) => {
  return <div onClick={props.ocultar} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      {/* <div className={classes.content}> {props.children} </div> */}
      {props.children}
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop ocultar={props.hideCarthandler} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
