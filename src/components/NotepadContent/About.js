import React from "react";

function About({ content }) {
  const { paragraphs } = content;
  return (
    <div>
      <h2>Välkommen</h2>
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

export default About;