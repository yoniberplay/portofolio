import React from "react";
import Modal from "./Modal";
import { ContactCard } from "./Contact";

export const ContactModal = (props) => {
  return (
    <Modal hideCarthandler={props.hideCarthandler}>
     <ContactCard/>
    </Modal>
  );
};
