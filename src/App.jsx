import "./Style.scss";
import { useState, useEffect } from "react";

const App = () => {
  const [score, setScore] = useState(0);
  const [myMove, setMyMove] = useState("paper");
  const [compMove, setCompMove] = useState('rock')

  const moveFn = (move) => {
    setMyMove(move);
  };

  return (
    <main>
      <div className="app">
        <div className="score">
          <div className="logo-cont"></div>
          <div className="score-cont">
            <p>SCORE</p>
            <h1>{score}</h1>
          </div>
        </div>
        <div className="picked-cont">
          <div className="left side">
            <p>YOU PICKED</p>
            <div className={`btn-cont ${myMove}`}>
              <div className="option">
                <img src={`public/icon-${myMove}.svg`} alt={myMove} />
              </div>
            </div>
          </div>
          <div className="right side">
            <p>THE HOUSE PICKED</p>
            <div className="wait"></div>
            {/* <div className={`btn-cont ${compMove}`}>
              <div className="option">
                <img src={`public/icon-${compMove}.svg`} alt={compMove} />
              </div>
            </div> */}
          </div>
        </div>

        {/* <div className="play">
          <div className="triangle-cont"></div>
          <div className="btn-cont paper" onClick={() => moveFn("paper")}>
            <div className="option paper">
              <img src="public/icon-paper.svg" alt="paper" />
            </div>
          </div>
          <div className="btn-cont scissors" onClick={() => moveFn("scissors")}>
            <div className="option scissors">
              <img src="public/icon-scissors.svg" alt="scissors" />
            </div>
          </div>
          <div className="btn-cont rock" onClick={() => moveFn("rock")}>
            <div className="option rock">
              <img src="public/icon-rock.svg" alt="rock" />
            </div>
          </div>
        </div> */}

        <div className="rules-cont">
          <button className="rules">RULES</button>
        </div>
      </div>
    </main>
  );
};

export default App;
