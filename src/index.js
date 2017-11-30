import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Game extends React.Component {
  render () {
    return (
      <div className="game">
        <div className="game-info">
          {/* TODO */}
        </div>
        <div className="game-board">
          <Board />
        </div>
      </div>
    )
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props)
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
