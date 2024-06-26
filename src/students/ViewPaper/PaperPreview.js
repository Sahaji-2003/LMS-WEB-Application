import PropTypes from 'prop-types';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGlobalState } from '../../components/Constants/GlobalStateProvider';

const PaperPreview = ({ paper, template, backgroundColor }) => {
  const { getGlobal } = useGlobalState();
  const globalState = getGlobal();

  const getQuestionTypeLabel = (type) => {
    switch (type) {
      case 'single':
        return 'Single Answer';
      case 'multiple':
        return 'Multiple Choice';
      case 'truefalse':
        return 'True/False';
      default:
        return '';
    }
  };

  return (
    <div style={{borderRadius: '30px'}}>
      <div style={{ ...styles.paperPreview, backgroundImage: `url(${template})`, backgroundColor }}>
        <h2 style={{ textAlign: 'center', color: 'grey' }}>Preview</h2>
        <h3 style={{ textAlign: 'center', color: 'black' }}>{paper.title}</h3>
        <p style={{ textAlign: 'center', color: 'black' }}>{paper.description}</p>
        {paper.questions.map((question, index) => (
          <div key={index} style={styles.question}>
            <p>{index + 1}. {question.text} <span style={styles.questionType}>({getQuestionTypeLabel(question.type)})</span></p>
            {question.type === 'truefalse' ? (
              <div>
                <label>
                  <input type="radio" name={`question-${index}`} value="true" />
                  True
                </label>
                <label>
                  <input type="radio" name={`question-${index}`} value="false" />
                  False
                </label>
              </div>
            ) : question.type === 'single' ? (
              <ul style={styles.noBullets}>
                {question.options.map((option, optIndex) => (
                  <li key={optIndex}>
                    <label>
                      <input type="radio" name={`question-${index}`} value={option.text} />
                      {String.fromCharCode(97 + optIndex)}. {option.text}
                    </label>
                  </li>
                ))}
              </ul>
            ) : (
              <ul style={styles.noBullets}>
                {question.options.map((option, optIndex) => (
                  <li key={optIndex}>
                    <label>
                      <input type="checkbox" name={`question-${index}`} value={option.text} />
                      {String.fromCharCode(97 + optIndex)}. {option.text}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

PaperPreview.propTypes = {
  paper: PropTypes.object.isRequired,
  template: PropTypes.string,
  backgroundColor: PropTypes.string,
};

const styles = {
  paperPreview: {
    padding: '20px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  question: {
    marginBottom: '20px',
    padding: '15px',
    margin: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent background for readability
  },
  questionType: {
    fontSize: '0.8em',
    color: '#888',
  },
  noBullets: {
    listStyleType: 'none',
    padding: '5px',
  },
};

export default PaperPreview;
