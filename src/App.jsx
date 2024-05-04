import "./Style.scss";

const App = () => {
  return (
    <main>
      <div className="app">
        <div className="score">
          <div className="logo-cont"></div>
          <div className="score-cont">
            <p>SCORE</p>
            <h1>12</h1>
          </div>
        </div>

        <div className="play">
          <div className="top-play part-play">
            <button className="option paper">R</button>
            <button className="option scissors">S</button>
          </div>
          <div className="bottom-play part-play">
            <button className="option rock">P</button>
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
