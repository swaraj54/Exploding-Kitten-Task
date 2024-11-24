import React, { useState } from "react";

const Game = () => {
  const [username, setUsername] = useState("");
  const [gameStarted, setGameStarted] = useState(true);
  const [cards, setCards] = useState([
    "cat",
    "cat",
    "defuse",
    "shuffle",
    "bomb",
  ]);
  return (
    <div
      style={{
        height: "70vh",
        border: "5px solid red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {gameStarted ? (
        <>
          {" "}
          <label>Type your username :</label>
          <br />
          <input />
          <br /> <button>Game Start</button>
        </>
      ) : (
        <>
          <h1>Click on Card</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "1100px",
            }}
          >
            {cards.map((card) => (
              <div
                style={{
                  border: "2px solid black",
                  height: "300px",
                  width: "200px",
                  cursor: "pointer",
                }}
              >
                <h1>{card}</h1>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Game;
