import React, { useEffect, useState, useContext } from "react";
import DataContext from "../../contexts/dataContext";
import About from "./About";

function ContentFactory({ id, isMobile }) {
  const data = useContext(DataContext);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const file = data.getItem(id);
    setItem(file);
  }, [id, data]);

  if (item === null) {
    return <div></div>;
  }

  switch (item.id) {
    case "about":
      return <About content={item.content} />;
    default:
      return <div></div>;
  }
}

export default ContentFactory;
