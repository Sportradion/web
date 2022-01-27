import * as React from "react";
import { Modal, Frame, TextArea, Avatar } from "@react95/core";
import "./Annons.css";

//import ContentFactory from "./NotepadContent/ContentFactory";   <ContentFactory id={selectedItem.id} isMobile={isMobile} />

const Annons = (props) => {
  const [text, setValue] = React.useState("");
  return (
    <Frame
      className="addAnimation"
      style={{
        backgroundColor: "purple",
        color: "white",
        marginLeft: props.mleft,
        marginRight: props.mright,
        marginTop: props.mtop,
        marginBottom: props.mbottom,
        opacity: "0%",
        animationDelay: props.delay,
      }}
      width={"20%"}
      height={"auto"}
    >
      <p
        style={{
          textAlign: "center",
          fontFamily: "Comic Sans MS",
        }}
      >
        {props.text}
      </p>
      <img
        className="center"
        style={{ padding: props.padding }}
        src={props.img}
      ></img>
      <p
        style={{
          textAlign: "center",
          fontFamily: "Comic Sans MS",
        }}
      >
        {props.tagline}
      </p>
    </Frame>
  );
};

export default Annons;

/* <Modal>
      title="annons"
      closeModal={closeNotepad}
      style={{
        left: isMobile ? "5%" : "20%",
        top: isMobile ? "3%" : "15%",
        width: isMobile ? "90%" : 450,
      }}
    >
      <Frame
        bg="white"
        boxShadow="in"
        height="100%"
        padding={20}
        style={{
          overflowY: "auto",
          maxHeight: "60vh",
        }}
      >
        {" "}
        <p>Fula killar i ditt område</p>
      </Frame>
</Modal>
*/
