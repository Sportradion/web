import React from "react";
import { GlobalStyle, ThemeProvider } from "@react95/core";
import { createGlobalStyle } from "styled-components";
import DataService from "../services/dataService";
import DataContext from "../contexts/dataContext";
import Taskbar from "./Taskbar";
import Desktop from "./Desktop";

const dataService = new DataService();

const BodyFontSizeOverride = createGlobalStyle`
  body{
    font-size: 15px
  }
`;
function App() {
  var d = new Date();
  let day = d.getDay();
  let hour = d.getHours();

  if (day !== 6 && day !== 0 && hour > 8 && hour < 17) {
    return (
      <DataContext.Provider value={dataService}>
        <ThemeProvider>
          <GlobalStyle />
          <BodyFontSizeOverride />

          <Desktop />
          <Taskbar />
        </ThemeProvider>
      </DataContext.Provider>
    );
  } else
    return (
      <div class="container">
        <div class="middle">
          <center>
            <h2>Just nu har vi stängt. Öppet vardagar 9-17. </h2>
            <h2>Välkommen åter. </h2>
          </center>
        </div>
      </div>
    );
}

export default App;
