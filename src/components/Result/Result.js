// Result.js
import React from 'react';

const Result = ({ userAnswers, totalQuestions, correctAnswers, questions, onRestart }) => {
  return (
    <div className="result-container">
      <h2>Quiz Result</h2>
      <p>{`You got ${correctAnswers - 1} out of ${totalQuestions} questions correct.`}</p>
      <div className="correct-answers">
        <h3>Correct Answers:</h3>
        <ul>
          {questions.map((question, index) => (
            <li key={index}>{`${question.text}: ${question.correctAnswer} (Your answer: ${userAnswers.find(answer => answer.questionIndex === index)?.option || 'Not answered'})`}</li>
          ))}
        </ul>
      </div>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default Result;