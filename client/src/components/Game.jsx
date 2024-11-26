import React, { useState } from "react";
import axios from "axios";

const Game = () => {
  const [username, setUsername] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [cards, setCards] = useState([]);
  const [cardIndex, setCardIndex] = useState();
  console.log(cardIndex, "cardIndex");

  async function GameStart() {
    try {
      if (!username) {
        return alert("Username is required.");
      }
      const response = await axios.post(
        "http://localhost:8000/api/v1/game/startGame",
        { username }
      );
      if (response.data.success) {
        setCards(response.data.user.cards);
        setGameStarted(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function drawCard(index) {
    try {
      if (!username) {
        return alert("Username is required.");
      }
      const response = await axios.post(
        "http://localhost:8000/api/v1/game/drawCard",
        { index: index, username }
      );
      if (response.data.success) {
        setCards(response.data.user.cards);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleCardDisplay(index) {
    setCardIndex(index);
    setTimeout(() => {
      drawCard(index);
    }, 2000);
  }
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
      {!gameStarted ? (
        <>
          {" "}
          <label>Type your username :</label>
          <br />
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <br /> <button onClick={GameStart}>Game Start</button>
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
            {cards.map((card, i) => (
              <div
                style={{
                  border: "2px solid black",
                  height: "300px",
                  width: "200px",
                  cursor: "pointer",
                }}
                onClick={() => handleCardDisplay(i)}
              >
                {cardIndex === i ? <h1>{card}</h1> : <h1>Click to Reveal</h1>}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Game;
