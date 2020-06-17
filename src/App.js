import React, { useEffect } from "react";

import Uiza from "@uizaio/playerjs";

import "@uizaio/playerjs/dist/uiza.css";
import "./scss/index.scss";

function App() {
  useEffect(() => {
    const player = new Uiza(".js-uiza", {
      src:
        "https://1775190502.rsc.cdn77.org/live/01eb8184-e90b-4447-8dfe-f7a2cf63cd24/extras/master.m3u8?cm=eyJlbnRpdHlfaWQiOiIwMWViODE4NC1lOTBiLTQ0NDctOGRmZS1mN2EyY2Y2M2NkMjQiLCJlbnRpdHlfc291cmNlIjoibGl2ZSIsImFwcF9pZCI6IjkyYThkMjAzMmZlODQ5MmFhNzc4MDRiNGMyYzUxOWM1In0=",
    });
    return () => {
      player.destroy();
    };
  }, []);

  return (
    <div className="App">
      <video data-uiza-provider="hlsjs" className="js-uiza uiza"></video>
    </div>
  );
}

export default App;
