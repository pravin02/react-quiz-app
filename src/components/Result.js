import React from 'react';

const Result = ({ score, outOf, playAgain }) => (
    <div className="score-board">
        <div className="score"> You scored {score}/{outOf} Correct Answers!</div>
        <button className="playBtn" onClick={playAgain}> Play Again</button>
    </div>
);

export default Result;
