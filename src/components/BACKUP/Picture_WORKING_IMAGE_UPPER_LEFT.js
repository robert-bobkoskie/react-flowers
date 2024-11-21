/* src/components/Picture.js */

import React from "react";
import { useDrag } from "react-dnd";
import "../App.css";

function Picture({ id, url, left, top }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const styles = {
    left: left !== undefined ? `${left}px` : "0px",
    top: top !== undefined ? `${top}px` : "0px",
  };

  return (
    <img
      ref={drag}
      src={url}
      className={`picture ${isDragging ? "dragging" : ""}`}
      style={styles}
    />
  );
}

export default Picture;
