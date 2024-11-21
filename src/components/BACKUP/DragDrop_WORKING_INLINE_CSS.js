/* src/components/DragDrop.js */

import ReactDOM from 'react-dom';
import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "../App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  {
    // id: 3,
    // url: "/images/Elizabeth.jfif",
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
    // console.log('ID', id);
    if (id !== 2) { return; };
    const pictureList = PictureList.filter((picture) => id === picture.id);
    // setBoard((board) => [...board, pictureList[0]]);
	setBoard((board) => [...board, { ...pictureList[0], left: 0, top: 0 }]);
    Redirect();
  };

  function Redirect() {
    const root = ReactDOM.createRoot(document.getElementById('fireworks')); 
    root.render(<Greeting/>);
    // console.log('here');
    // return <div className="Hooray">ERROR! PAGE NOT FOUND</div>;
  };

  function Greeting() {
    return  <div id="fireworks-img">
              <div style={{ textAlign: "center" }}>Cheers To Us XO</div>
                <img 
                  src="/images/fireworks.gif"
                  alt="new"
                />
            </div>;
  };

  const myDate={
    backgroundImage: "url('/images/Elizabeth.jfif')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  
  return (
    <div id="container">
      {/* <div style={{ textAlign: "justify" }}><h2>Hi Elizabeth (E)!!!</h2><h3>You Look <em>Beautiful</em> ♥</h3></div> */}
	  {/* <div style={{ textAlign: "justify" }}><h2>&#x0393;&#x03B5;&#x03B9;&#x03B1; Elizabeth (E)!!!</h2><h3>&#x0395;&#x03AF;&#x03C3;&#x03B1;&#x03B9; &#x03CC;&#x03BC;&#x03BF;&#x03C1;&#x03C6;&#x03B7; ♥</h3></div> */}
      <div style={{ textAlign: "justify" }}><h2>&#x0393;&#x03B5;&#x03B9;&#x03B1; Elizabeth (&#x03B5;)!!!</h2><h2>&#x039A;&#x03B1;&#x03BB;&#x03BB;&#x03AF;&#x03C3;&#x03C4;&#x03B7; &#x03B5;&#x1F36; ♥</h2></div>
      
      <div id='fireworks' className="Hooray"></div>

      <div className="Pictures">
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
      
      <div style={myDate} className="Board" ref={drop}>
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
    </div>
  );
}

export default DragDrop;
