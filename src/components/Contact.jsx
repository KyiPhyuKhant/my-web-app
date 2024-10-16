import "./Contact.css";
import Player from './Player.jsx';
import GameBoard from "./GameBoard.jsx";

const Contact = () => {
  return (
    <>
      <div className="banner">
        <h1>Contact Banner</h1>
      </div>

      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        <GameBoard/>
      </div>
    </>
  );
};

export default Contact;
