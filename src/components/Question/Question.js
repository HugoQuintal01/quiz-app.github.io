// Question.js
import React from 'react';

const Question = ({ text }) => {
  return (
    <div className="question-container">
      <h2>{text}</h2>
    </div>
  );
};

export default Question;
