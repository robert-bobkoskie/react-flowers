/* src/components/Picture.js */

import React from "react";
import { useDrag } from "react-dnd";
import "../App.css";

function Picture({ id, url, left, top, style }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const styles = {
    position: 'relative', // Changed to 'relative' for initial positioning
    left: left !== undefined ? `${left}px` : "0px",
    top: top !== undefined ? `${top}px` : "0px",
    ...style, // Merge the passed style with the existing styles
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
