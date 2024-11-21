/* src/components/Picture.js */

import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { useDrop } from "react-dnd";
import Picture from "./Picture";
import "../App.css";
import Fireworks from "./Fireworks";

const PictureList = [
  {
    id: 1,
	// url: "/images/ROB-BADGE-PIC.jpg",
    url: process.env.PUBLIC_URL + "/images/ROB-BADGE-PIC.jpg",
  },
  {
    id: 2,
	// url: "/images/roses_1.jpg",
    url: process.env.PUBLIC_URL + "/images/roses_1.jpg",
  },
];


function DragDrop() {
  const [board, setBoard] = useState([]);
  const [initialPictures, setInitialPictures] = useState(PictureList);
  const [isImageGrabbed, setIsImageGrabbed] = useState(false);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    if (id !== 2) { return; }
    const pictureList = initialPictures.filter((picture) => id === picture.id);

    const boardWidth = 250; // Example width of the board
    const boardHeight = 250; // Example height of the board

    const left = 0;
    const top = boardHeight - 170; // Assuming picture height is 170px

    setBoard((board) => [...board, { ...pictureList[0], left: left, top: top }]);
    setInitialPictures((pictures) => pictures.filter((picture) => picture.id !== id));
    setIsImageGrabbed(true); // Stop the animation when image is grabbed
    Redirect();
  };

  function Redirect() {
    const root = ReactDOM.createRoot(document.getElementById('fireworks'));
    root.render(<Greeting />);
  };

  function Greeting() {
    return (
      <div id="fireworks-img"><div style={{ textAlign: "center", top: "0px", position: "absolute", fontSize: "32px" }}>
          Cheers To Us &#x03A7;&#x03A9;
		  {/* </div><img src="/images/fireworks.gif" alt="new" /></div> */}
	  </div><img src={process.env.PUBLIC_URL + "/images/fireworks.gif"} alt="fireworks" /></div>
    );
  };

  const myDate = {
    // backgroundImage: "url('/images/Elizabeth.jfif')",
	backgroundImage: `url(${process.env.PUBLIC_URL}/images/Elizabeth.jfif)`,
  };

  return (
    <div id="container"><div className="text-justify"><h2>Γεια εlizabeth (ε)!!!</h2><h2>Καλλίστη εἶ ♥</h2></div><div id='fireworks' className="Hooray"></div><div className="Pictures">
        {initialPictures.map((picture) => {
          const style = picture.id === 2 ? { marginTop: '0px' } : {}; // Adjust margin as needed
          const className = picture.id === 2 && !isImageGrabbed ? "hand-grab" : "";
          return (
            <div key={picture.id} style={{ position: 'relative' }}><Picture url={picture.url} id={picture.id} style={style} className={className} />
              {picture.id === 2 && !isImageGrabbed && (
				  <img src={process.env.PUBLIC_URL + "/images/hand_1.png"} alt="hand" className={`hand ${className}`} />
              )}
            </div>
          );
        })}
      </div><div style={myDate} className="Board" ref={drop}>
        {board.map((picture) => {
          return <Picture key={picture.id} url={picture.url} id={picture.id} left={picture.left} top={picture.top} />;
        })}
      </div></div>
  );
}

export default DragDrop;
