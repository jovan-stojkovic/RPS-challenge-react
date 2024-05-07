import "./Style.scss";
import { useState, useEffect } from "react";

const App = () => {
  const [myMove, setMyMove] = useState("");
  const [compMove, setCompMove] = useState("");
  const [resultText, setResultText] = useState("");
  const [result, setResult] = useState(0);

  useEffect(() => {
    const compMoveCalc = () => {
      let randomNum = Math.floor(Math.random() * 3 + 1);
      if (randomNum === 1) {
        setCompMove("rock");
      } else if (randomNum === 2) {
        setCompMove("scissors");
      } else if (randomNum === 3) {
        setCompMove("paper");
      }
    };

    const calculateResult = () => {
      if (
        (myMove === "rock" && compMove === "scissors") ||
        (myMove === "paper" && compMove === "rock") ||
        (myMove === "scissors" && compMove === "paper")
      ) {
        setResult(result + 1);
        setResultText("YOU WIN!");
      } else if (
        (compMove === "rock" && myMove === "scissors") ||
        (compMove === "paper" && myMove === "rock") ||
        (compMove === "scissors" && myMove === "paper")
      ) {
        setResult(result - 1);
        setResultText("YOU LOSE!");
      } else {
        setResultText(`IT'S A DRAW`);
      }
    };

    if (myMove) {
      setTimeout(() => {
        compMoveCalc();
        calculateResult();
      }, 1500);
    }
  }, [myMove, result]);

  const reset = () => {
    setMyMove("");
    setCompMove("");
    setResultText("");
    setResult(0);
  };

  return (
    <main>
      <div className="app">
        <div className="score">
          <div className="logo-cont"></div>
          <div className="score-cont">
            <p>SCORE</p>
            <h1>{result}</h1>
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

          <div className="result">
            <p>{resultText}</p>
            <button className="again" onClick={reset}>
              PLAY AGAIN
            </button>
          </div>

          <div className="right side">
            <p>THE HOUSE PICKED</p>

            <div className={`btn-cont ${compMove}`}>
              <div className="option">
                <img src={`public/icon-${compMove}.svg`} alt={compMove} />
              </div>
            </div>
          </div>
        </div>

        <div className="play">
          <div className="triangle-cont"></div>
          <div className="btn-cont paper" onClick={() => setMyMove("paper")}>
            <div className="option paper">
              <img src="public/icon-paper.svg" alt="paper" />
            </div>
          </div>
          <div
            className="btn-cont scissors"
            onClick={() => setMyMove("scissors")}
          >
            <div className="option scissors">
              <img src="public/icon-scissors.svg" alt="scissors" />
            </div>
          </div>
          <div className="btn-cont rock" onClick={() => setMyMove("rock")}>
            <div className="option rock">
              <img src="public/icon-rock.svg" alt="rock" />
            </div>
          </div>
        </div>

        <div className="rules-cont">
          <button className="rules">RULES</button>
        </div>
      </div>
    </main>
  );
};

export default App;
