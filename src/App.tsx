import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Board from "@components/Board";
import FloatingIcon from "./FloatingIcon";

const App: React.FC = () => {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light mb-5">
        <div className="container-fluid d-flex justify-content-center">
          <div className="text-center">
            <span className="navbar-brand mb-0 h1">
              Kanban Board - Vite + React + TS + Redux + Bootstrap CSS
            </span>
            <p className="mb-0" role="status">Hi!</p>
          </div>
        </div>
      </nav>
      <FloatingIcon />
      <Board />
    </div>
  );
};

export default App;
