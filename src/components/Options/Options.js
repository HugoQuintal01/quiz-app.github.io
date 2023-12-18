// Options.js
import React, { useState } from 'react';

const Options = ({ questionIndex, options, correctAnswers, onAnswer, onSubmit, isLastQuestion, isSubmissionConfirmed }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    onAnswer([{ questionIndex, option }]);
  };

  const handleConfirmSubmit = () => {
    onSubmit([{ questionIndex, option: selectedOption }]);
  };

  return (
    <div className="options-container">
      {options.map((option, index) => (
        <div key={index} className={`option ${selectedOption === option ? 'selected' : ''}`}>
          <a
            onClick={() => handleAnswer(option)}
            className={`${
              isSubmissionConfirmed && selectedOption !== null
                ? correctAnswers.includes(option) && selectedOption === option
                  ? 'correct'
                  : 'incorrect'
                : ''
            }`}
          >
            {option}
          </a>
        </div>
      ))}
      {isLastQuestion && !isSubmissionConfirmed && (
        <div className="submit-button">
          <a onClick={handleConfirmSubmit} disabled={selectedOption === null}>
            Submit
          </a>
        </div>
      )}
    </div>
  );
};

export default Options;