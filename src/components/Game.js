import React, { useState } from "react";
import { calculateWinner } from "../helpers";
import Board from "./Board";
import "./GameStyles.css";

const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);

  const [state, setState] = useState({
    board: Array(9).fill(null),
    xIsNext: true,
  });

  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    const boardCopy = [...state.board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = state.xIsNext ? "X" : "O";
    console.log(boardCopy[index]);
    setState({
      ...state,
      board: boardCopy,
      xIsNext: !state.xIsNext,
    });
    // setBoard(boardCopy);
    // setXIsNext((xIsNext) => !xIsNext);
  };

  const handleResetGame = () => {
    //   setBoard(Array(9).fill(null));
    //   setXIsNext(true);
    setState({
      ...state,
      board: Array(9).fill(null),
      xIsNext: true,
    });
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      <div
        style={{
          marginLeft: "26px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
        className="game-winner"
      >
        {winner ? `Winner is ${winner}` : ""}
      </div>
      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};

export default Game;
