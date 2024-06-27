import PropTypes from 'prop-types';
import React from 'react';

const QuestionOptions = ({ question, index, submitted, userAnswers, handleAnswerChange }) => {
  if (question.type === 'truefalse') {
    return (
      <div>
        <label style={submitted && question.correctAnswer === 'true' ? styles.correct : {}}>
          <input
            type="radio"
            name={`question-${index}`}
            value="true"
            disabled={submitted}
            onChange={() => handleAnswerChange(index, 'true')}
          />
          True
        </label>
        <label style={submitted && question.correctAnswer === 'false' ? styles.correct : {}}>
          <input
            type="radio"
            name={`question-${index}`}
            value="false"
            disabled={submitted}
            onChange={() => handleAnswerChange(index, 'false')}
          />
          False
        </label>
      </div>
    );
  } else if (question.type === 'single') {
    return (
      <ul style={styles.noBullets}>
        {question.options.map((option, optIndex) => (
          <li key={optIndex} style={submitted && option.isCorrect ? styles.correct : {}}>
            <label>
              <input
                type="radio"
                name={`question-${index}`}
                value={option.text}
                disabled={submitted}
                onChange={() => handleAnswerChange(index, option.text)}
              />
              {String.fromCharCode(97 + optIndex)}. {option.text}
            </label>
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <ul style={styles.noBullets}>
        {question.options.map((option, optIndex) => {
          const isIncorrect =
            submitted &&
            userAnswers[index] &&
            userAnswers[index].includes(option.text) &&
            !option.isCorrect;
          return (
            <li key={optIndex} style={isIncorrect ? styles.incorrect : styles.correct}>
              <label>
                <input
                  type="checkbox"
                  name={`question-${index}`}
                  value={option.text}
                  disabled={submitted}
                  onChange={(e) => {
                    const selectedOptions = userAnswers[index] || [];
                    if (e.target.checked) {
                      handleAnswerChange(index, [...selectedOptions, option.text]);
                    } else {
                      handleAnswerChange(index, selectedOptions.filter(opt => opt !== option.text));
                    }
                  }}
                />
                {String.fromCharCode(97 + optIndex)}. {option.text}
              </label>
            </li>
          );
        })}
      </ul>
    );
  }
};

QuestionOptions.propTypes = {
  question: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  submitted: PropTypes.bool.isRequired,
  userAnswers: PropTypes.object.isRequired,
  handleAnswerChange: PropTypes.func.isRequired,
};

const styles = {
  noBullets: {
    listStyleType: 'none',
    padding: 0,
  },
  correct: {
    backgroundColor: '#d4edda',
    borderColor: '#c3e6cb',
    color: '#155724',
  },
  incorrect: {
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
    color: '#721c24',
  },
};

export default QuestionOptions;
