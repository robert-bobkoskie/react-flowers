/* src/components/Picture.js */

import React from "react";
import { useDrag } from "react-dnd";

function Picture({ id, url, left, top }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const styles = {
    position: "relative",
    left: left !== undefined ? `${left}px` : "0px",
    top: top !== undefined ? `${top}px` : "0px",
    border: isDragging ? "5px solid yellow" : "0px",
    width: "170px",
  };

  return (
    <img
      ref={drag}
      src={url}
      style={styles}
    />
  );
}

export default Picture;
