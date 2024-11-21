/* src/components/DragDrop.js */

import ReactDOM from 'react-dom';
import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "../App.css";
import Fireworks from "./Fireworks";

const PictureList = [
  {
    id: 1,
    url: "/images/ROB-BADGE-PIC.jpg",
  },
  {
    id: 2,
    url: "/images/roses_1.jpg",
  },
];

function DragDrop() {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    if (id !== 2) { return; }
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, { ...pictureList[0], left: 0, top: 0 }]);
    Redirect();
  };

  function Redirect() {
    const root = ReactDOM.createRoot(document.getElementById('fireworks'));
    root.render(<Greeting />);
  };

  function Greeting() {
    return (
      <div id="fireworks-img"><div style={{ textAlign: "center", top: "0px", position: "absolute", fontSize: "32px" }}>Cheers To Us XO</div><img
          src="/images/fireworks.gif"
          alt="new"
        /></div>
    );
  };

  const myDate = {
    backgroundImage: "url('/images/Elizabeth.jfif')",
  };

  return (
    <div id="container"><div className="text-justify"><h2>Γεια Elizabeth (ε)!!!</h2><h2>Καλλίστη εἶ ♥</h2></div><div id='fireworks' className="Hooray"></div><div className="Pictures">
        {PictureList.map((picture) => {
          return <Picture key={picture.id} url={picture.url} id={picture.id} />;
        })}
      </div><div style={myDate} className="Board" ref={drop}>
        {board.map((picture) => {
          return <Picture key={picture.id} url={picture.url} id={picture.id} />;
        })}
      </div></div>
  );
}

export default DragDrop;
