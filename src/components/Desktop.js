import React, { useState, useContext, useEffect } from "react";
import Explorer from "./Explorer";
import Notepad from "./Notepad";
import DataContext from "../contexts/dataContext";
import Shortcuts from "./Shortcuts";
import Player from "./Player";
import Annons from "./Annons";
import "./Annons.css";
import boat from "../assets/boat.gif";
import maddi from "../assets/maddi.jpg";
import streams from "../assets/streams.jpg";
import GlitchClip from "react-glitch-effect/core/GlitchClip";
import GlitchSquiggly from "react-glitch-effect/core/GlitchSquiggly";

function Desktop() {
  const isMobile = window.innerWidth < 850;
  const data = useContext(DataContext);
  const [explorerOpened, toggleExplorer] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [notepadOpened, toggleNotepad] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const files = data.getItems();
    setItems(files);
    toggleExplorer(true);
    setSelectedItem(files[0]);
    toggleNotepad(!isMobile);
  }, [data, isMobile]);

  /*const closeExplorer = () => {
    toggleExplorer(false);
  };*/

  const openExlorer = () => {
    toggleExplorer(true);
  };

  const closeNotepad = () => {
    toggleNotepad(false);
  };

  /*const openNotepad = (item) => {
    setSelectedItem(item);
    toggleNotepad(true);
  };*/
  // In a React component

  return (
    <React.Fragment>
      <Shortcuts openExplorer={openExlorer} />

      {notepadOpened && (
        <Notepad
          closeNotepad={closeNotepad}
          selectedItem={selectedItem}
          isMobile={isMobile}
        />
      )}
      <GlitchSquiggly>
        <Annons
          text={"Lokala killar i ditt område"}
          width={"60%"}
          mleft={"10%"}
          tagline={"''Man blir helt enkelt glad''"}
          img={maddi}
        />
      </GlitchSquiggly>
      <GlitchClip>
        <Annons
          text={"Skaffa plays"}
          width={"30%"}
          mleft={"70%"}
          img={streams}
          tagline={"''Så hamnar du på deezers topplista''"}
          delay={"11s"}
        />
      </GlitchClip>
      <Annons
        text={"Grattis!!!"}
        width={"70%"}
        mleft={"25%"}
        mtop={"-30%"}
        img={boat}
        tagline={"Du har vunnit en resa för två till Örtofta sockerbruk"}
        delay={"20s"}
      />

      <Player />
    </React.Fragment>
  );
}

export default Desktop;
