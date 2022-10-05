import React, { useState } from "react";
import "tailwindcss/tailwind.css";

function Game() {
  const [turn, setTurn] = useState("x");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState("");
  const [turnNo, setTurnNo] = useState(1);

  function checkForWinner(squares: any) {
    let combos: any = {
      row: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      col: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      dio: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach((pattern: any) => {
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
          // do nothing
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setTurn("");
          setWinner(squares[pattern[0]]);
        }
      });
    }

    if (turnNo === 9 && winner === "") {
      setWinner("tie");
    }
  }
  function handleClick(num: any) {
    if (cells[num] !== "") {
      alert("already clicked");
      return;
    }
    let squares = [...cells];
    if (turn === "x") {
      squares[num] = "x";
      setTurn("o");
      setTurnNo((turnNo) => turnNo + 1);
    } else if (turn === "o") {
      squares[num] = "o";
      setTurn("x");
      setTurnNo((turnNo) => turnNo + 1);
    }

    setCells(squares);
    checkForWinner(squares);
  }

  function handleRestart() {
    setWinner("");
    setCells(Array(9).fill(""));
    setTurn("x");
    setTurnNo(1);
  }

  const Cell = ({ num }: any) => {
    return (
      <td
        className="h-36 w-36 border-2 border-black text-center text-8xl"
        onClick={() => handleClick(num)}
      >
        {cells[num]}
      </td>
    );
  };
  return (
    <div>
      <div className="flex justify-center">
        <table>
          <tbody>
            <tr>
              <Cell num={0} />
              <Cell num={1} />
              <Cell num={2} />
            </tr>
            <tr>
              <Cell num={3} />
              <Cell num={4} />
              <Cell num={5} />
            </tr>
            <tr>
              <Cell num={6} />
              <Cell num={7} />
              <Cell num={8} />
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-center flex-col items-center mt-5">
        {winner && (
          <>
            {winner === "tie" ? (
              <p>Game Tied</p>
            ) : (
              <p>{winner} is the winner!</p>
            )}

            <button
              className="self-center inline-block px-2 py-2.5 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gradient-to-br focus:ring-2 dark:focus:ring-pink-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={() => handleRestart()}
            >
              Play Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Game;
