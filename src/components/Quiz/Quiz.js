// Quiz.js
import React, { useState } from 'react';
import Question from '../Question/Question';
import Options from '../Options/Options';
import Result from '../Result/Result';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isSubmissionConfirmed, setSubmissionConfirmed] = useState(false);

  const questions = [
    {
      text: 'What does HTML stand for?',
      options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyperlink and Text Markup Language'],
      correctAnswer: 'Hyper Text Markup Language',
    },
    {
      text: 'Which of the following is not a programming language?',
      options: ['JavaScript', 'CSS', 'XML'],
      correctAnswer: 'CSS',
    },
    {
      text: 'What is the purpose of CSS?',
      options: ['Server-side scripting', 'Markup language', 'Styling web pages'],
      correctAnswer: 'Styling web pages',
    },
    {
      text: 'What does the acronym API stand for in the context of web development?',
      options: ['Application Programming Interface', 'Advanced Programming Interface', 'Automated Processing Interface'],
      correctAnswer: 'Application Programming Interface',
    },
    {
      text: 'Which version control system is commonly used in frontend development?',
      options: ['SVN', 'Git', 'Mercurial'],
      correctAnswer: 'Git',
    },
    {
      text: 'What is the purpose of the "alt" attribute in the HTML "img" tag?',
      options: ['Alternative text for images', 'Alignment of images', 'Assigning image source'],
      correctAnswer: 'Alternative text for images',
    },
    {
      text: 'What is the role of JavaScript in frontend development?',
      options: ['Styling web pages', 'Server-side scripting', 'Client-side scripting'],
      correctAnswer: 'Client-side scripting',
    },
    {
      text: 'What is a CSS preprocessor?',
      options: ['A tool for processing HTML', 'A scripting language', 'A scripting language that extends CSS'],
      correctAnswer: 'A scripting language that extends CSS',
    },
    {
      text: 'What is the purpose of the "viewport" meta tag in HTML?',
      options: ['Setting the background color of the page', 'Specifying the character set', 'Controlling the layout on different devices'],
      correctAnswer: 'Controlling the layout on different devices',
    },
    {
      text: 'Which of the following is NOT a commonly used JavaScript framework or library?',
      options: ['React', 'Angular', 'JavaFX'],
      correctAnswer: 'JavaFX',
    },
  ];

  const handleAnswer = (selectedOptions) => {
    setUserAnswers([...userAnswers, ...selectedOptions]);
  };

  const handleConfirmSubmit = () => {
    setSubmissionConfirmed(true);
  };

  const handleSubmit = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSubmissionConfirmed(false);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  const countCorrectAnswers = () => {
    let count = 0;
    userAnswers.forEach(({ option, questionIndex }) => {
      const question = questions[questionIndex];
      if (question && question.correctAnswer === option) {
        count++;
      }
    });
    return count;
  };

  return (
    <div className="quiz-container">
      {currentQuestion < questions.length ? (
        <>
          <Question text={questions[currentQuestion].text} />
          <Options
            questionIndex={currentQuestion}
            options={questions[currentQuestion].options}
            correctAnswers={[questions[currentQuestion].correctAnswer]}
            onAnswer={handleAnswer}
            onSubmit={handleSubmit}
            isLastQuestion={currentQuestion === questions.length - 1}
            isSubmissionConfirmed={isSubmissionConfirmed}
          />
          {isSubmissionConfirmed && (
            <div className="confirmation">
              <p>Are you sure you want to submit?</p>
              <button onClick={handleSubmit} disabled={userAnswers.length === 0}>
                Yes, submit
              </button>
              <button onClick={() => setSubmissionConfirmed(false)}>Cancel</button>
            </div>
          )}
          <div className="navigation-buttons">
            <button onClick={() => setCurrentQuestion(currentQuestion - 1)} disabled={currentQuestion === 0}>
              Previous
            </button>
            <button onClick={() => setCurrentQuestion(currentQuestion + 1)} disabled={currentQuestion === questions.length - 1}>
              Next
            </button>
          </div>
          <div className="question-number">
            <span>
              {`Question ${currentQuestion + 1} of ${questions.length}`}
            </span>
          </div>
        </>
      ) : (
        <Result
          userAnswers={userAnswers}
          totalQuestions={questions.length}
          correctAnswers={countCorrectAnswers()}
          questions={questions}
          onRestart={restartQuiz}
        />
      )}
    </div>
  );
};

export default Quiz;
