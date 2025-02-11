"use client";

import { useState, useEffect } from "react";
import "./styles.css";

export default function Home() {
  const [isNoClicked, setIsNoClicked] = useState(false);
  const [yesButtonPosition, setYesButtonPosition] = useState({ x: 0, y: 0 });
  const [hearts, setHearts] = useState([]);
  const [raindrops, setRaindrops] = useState([]);

  useEffect(() => {
    const generateHearts = (numHearts) => {
      let heartsArray = [];
      for (let i = 0; i < numHearts; i++) {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        const size = Math.random() * 20 + 15;
        const delay = Math.random() * 2 + "s";

        heartsArray.push(
          <div
            key={i}
            className="heart"
            style={{
              left: randomX + "px",
              top: randomY + "px",
              fontSize: size + "px",
              animationDelay: delay,
            }}
          >
            ❤️
          </div>
        );
      }
      setHearts(heartsArray);
    };

    const generateRaindrops = (numRaindrops) => {
      let raindropsArray = [];
      for (let i = 0; i < numRaindrops; i++) {
        const randomX = Math.random() * window.innerWidth;
        const randomSize = Math.random() * 10 + 5;
        const animationDuration = Math.random() * 2 + 2;

        raindropsArray.push(
          <div
            key={i}
            className="raindrop"
            style={{
              left: randomX + "px",
              width: randomSize + "px",
              height: randomSize * 2 + "px",
              animationDuration: `${animationDuration}s`,
            }}
          />
        );
      }
      setRaindrops(raindropsArray);
    };

    if (isNoClicked) {
      generateRaindrops(50);
    }

    if (!isNoClicked) {
      generateHearts(50);
    }
  }, [isNoClicked]);

  const handleYesHover = () => {
    const movementAreaWidth = window.innerWidth * 0.5;
    const movementAreaHeight = window.innerHeight * 0.5;

    const randomX = Math.random() * movementAreaWidth;
    const randomY = Math.random() * movementAreaHeight;

    setYesButtonPosition({
      x: randomX,
      y: randomY,
    });
  };

  const handleNoClick = () => {
    setIsNoClicked(true);
  };

  return (
    <div className="container">
      <h1>Will you be my Valentine?</h1>

      {!isNoClicked && hearts}

      {raindrops}

      {!isNoClicked ? (
        <div>
          <button
            className="yes-button"
            onMouseEnter={handleYesHover}
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
        <div className="sad-message-container">
          <div className="sad-face">😢</div>
          <p className="sad-message">I thought you would have said yes...</p>
        </div>
      )}
    </div>
  );
}
