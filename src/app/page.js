"use client"

import { useState, useEffect } from 'react';
// import styles from './Home.module.css';

export default function Home() {
  const [isYesClicked, setIsYesClicked] = useState(false);
  const [isNoClicked, setIsNoClicked] = useState(false);
  const [yesButtonPosition, setYesButtonPosition] = useState({ x: 0, y: 0 });
  const [isButtonMoving, setIsButtonMoving] = useState(false);

  useEffect(() => {
    if (isYesClicked) {
      setTimeout(() => {
        setYesButtonPosition({
          x: Math.random() * 300,
          y: Math.random() * 300,
        });
      }, 500);
    }
  }, [isYesClicked]);

  const handleYesClick = () => {
    setIsYesClicked(true);
  };

  const handleNoClick = () => {
    setIsNoClicked(true);
  };

  return (
    <div className="container">
      <h1>Will you be my Valentine?</h1>
      {!isNoClicked ? (
        <div>
          <button
            className="yes-button"
            onClick={handleYesClick}
            style={{
              transform: `translate(${yesButtonPosition.x}px, ${yesButtonPosition.y}px)`,
            }}
          >
            Yes
          </button>
          <button className="no-button" onClick={handleNoClick}>
            No
          </button>
        </div>
      ) : (
        <p className="sad-message">I thought you would have said yes...</p>
      )}
    </div>
  );
}
