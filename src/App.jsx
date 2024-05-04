import "./Style.scss";
import { useState, useEffect } from "react";

const App = () => {
  const [score, setScore] = useState(0);
  const [myMove, setMyMove] = useState("");
  const [compMove, setCompMove] = useState("");
  const [resultText, setResultText] = useState("");
  const [result, setResult] = useState("");

  const moveFn = (move) => {
    setMyMove(move);
  };

  useEffect(() => {
    const compMoveCalc = () => {
      const randomNumber = Math.floor(Math.random() * 3 + 1);

      if (randomNumber === 1) {
        setCompMove("paper");
      } else if (randomNumber === 2) {
        setCompMove("scissors");
      } else setCompMove("rock");
    };

    const resultCalc = () => {
      if (myMove === "paper" && compMove === "paper") {
        setResult("DRAW");
      } else if (myMove === "paper" && compMove === "rock") {
        setResult("WIN");
      } else if (myMove === "paper" && compMove === "scissors") {
        setResult("LOSE");
      } else if (myMove === "rock" && compMove === "paper") {
        setResult("LOSE");
      } else if (myMove === "rock" && compMove === "rock") {
        setResult("DRAW");
      } else if (myMove === "rock" && compMove === "scissors") {
        setResult("WIN");
      } else if (myMove === "scissors" && compMove === "paper") {
        setResult("WIN");
      } else if (myMove === "scissors" && compMove === "rock") {
        setResult("LOSE");
      } else if (myMove === "scissors" && compMove === "scissors") {
        setResult("DRAW");
      }
    };

    const resultTextCalc = () => {
      if (result === "WIN") {
        setResultText("YOU WIN");
        setScore(score + 1);
      } else if (result === "DRAW") {
        setResultText(`IT'S A DRAW`);
      } else if (result === "LOSE") {
        setResultText("YOU LOSE");
        setScore(score - 1);
      }
    };

    if (myMove !== "") {
      compMoveCalc();
      resultCalc();
      resultTextCalc();
    }
  }, [myMove, compMove, result, score]);

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
        {myMove ? (
          <div className="picked-cont">
            <div className="left side">
              <p>YOU PICKED</p>
              <div className={`btn-cont ${myMove}`}>
                <div className="option">
                  <img src={`public/icon-${myMove}.svg`} alt={myMove} />
                </div>
              </div>
            </div>
            {result && (
              <div className="result">
                <p>{resultText}</p>
                <button className="again" onClick={() => setMyMove("")}>
                  PLAY AGAIN
                </button>
              </div>
            )}
            <div className="right side">
              <p>THE HOUSE PICKED</p>
              {compMove ? (
                <div className={`btn-cont ${compMove}`}>
                  <div className="option">
                    <img src={`public/icon-${compMove}.svg`} alt={compMove} />
                  </div>
                </div>
              ) : (
                <div className="wait"></div>
              )}
            </div>
          </div>
        ) : (
          <div className="play">
            <div className="triangle-cont"></div>
            <div className="btn-cont paper" onClick={() => moveFn("paper")}>
              <div className="option paper">
                <img src="public/icon-paper.svg" alt="paper" />
              </div>
            </div>
            <div
              className="btn-cont scissors"
              onClick={() => moveFn("scissors")}
            >
              <div className="option scissors">
                <img src="public/icon-scissors.svg" alt="scissors" />
              </div>
            </div>
            <div className="btn-cont rock" onClick={() => moveFn("rock")}>
              <div className="option rock">
                <img src="public/icon-rock.svg" alt="rock" />
              </div>
            </div>
          </div>
        )}

        <div className="rules-cont">
          <button className="rules">RULES</button>
        </div>
      </div>
    </main>
  );
};

export default App;
