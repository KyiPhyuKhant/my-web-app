import "./Contact.css";
import Player from './Player.jsx';

const Contact = () => {
  return (
    <>
      <div className="banner">
        <h1>Contact Banner</h1>
      </div>

      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        Game Board
      </div>
    </>
  );
};

export default Contact;
