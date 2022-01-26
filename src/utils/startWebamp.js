import Webamp from "webamp";

const startWebamp = () => {
  if (Webamp.browserIsSupported()) {
    const webamp = new Webamp({
      initialTracks: [
        {
          metaData: {
            artist: "Sportradion",
            title: "300",
          },
          url: `${process.env.PUBLIC_URL}/300.mp3`,
          duration: 213,
        },
      ],
    });
    webamp.onClose(() => {
      webamp.dispose();
    });

    webamp.renderWhenReady(document.getElementById("winamp-container"));
  }
};

export { startWebamp };
