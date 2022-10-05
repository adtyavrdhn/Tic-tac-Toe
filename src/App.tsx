import React from "react";
import "tailwindcss/tailwind.css";
import "./App.css";
import Game from "./components/Game";

function App() {
  return (
    <div>
      <h1 className="text-center text-3xl mb-3">Tic Tac Toe</h1>
      <Game />
    </div>
  );
}

export default App;
