import React, { useState } from "react";
import Confetti from "react-confetti";

function Confett() {
  const [confetti, setConfetti] = useState(false);
  const [opacity, setOpacity] = useState(1.0);
  setTimeout(() => setConfetti(true), 20000);
  setTimeout(() => setOpacity(0.0), 30000);

  return <Confetti run={confetti} opacity={opacity} />;
}

export default Confett;
