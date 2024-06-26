
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import 'bootstrap/dist/css/bootstrap.min.css';
// import DownloadButtons from '../Download/DownloadButtons'; // Assuming you have this component
// import SavePaperButton from './Header/SavePaperButton'; // Import the new component
import { useGlobalState } from '../../components/Constants/GlobalStateProvider';
import { API_URL } from '../../components/Constants/Url';

const PaperPreview = ({ paper, onEditQuestion, onDeleteQuestion, onSaveQuestion, template, backgroundColor }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedQuestion, setEditedQuestion] = useState(null);
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

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditedQuestion(paper.questions[index]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedQuestion((prev) => ({ ...prev, [name]: value }));
  };

  const handleOptionChange = (index, value) => {
    setEditedQuestion((prev) => {
      const options = [...prev.options];
      options[index].text = value;
      return { ...prev, options };
    });
  };

  const handleSaveClick = () => {
    if (typeof onSaveQuestion === 'function') {
      onSaveQuestion(editingIndex, editedQuestion);
    }
    setEditingIndex(null);
    setEditedQuestion(null);
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
              <label style={question.correctAnswer === 'true' ? styles.correct : {}}>
                <input type="radio" name={`question-${index}`} value="true" disabled />
                True
              </label>
              <label style={question.correctAnswer === 'false' ? styles.correct : {}}>
                <input type="radio" name={`question-${index}`} value="false" disabled />
                False
              </label>
            </div>
          ) : question.type === 'single' ? (
            <ul style={styles.noBullets}>
              {question.options.map((option, optIndex) => (
                <li key={optIndex} style={option.isCorrect ? styles.correct : {}}>
                  <label>
                    <input type="radio" name={`question-${index}`} value={option.text} disabled />
                    {String.fromCharCode(97 + optIndex)}. {option.text}
                  </label>
                </li>
              ))}
            </ul>
          ) : (
            <ul style={styles.noBullets}>
              {question.options.map((option, optIndex) => (
                <li key={optIndex} style={option.isCorrect ? styles.correct : {}}>
                  <label>
                    <input type="checkbox" name={`question-${index}`} value={option.text} disabled />
                    {String.fromCharCode(97 + optIndex)}. {option.text}
                  </label>
                </li>
              ))}
            </ul>
          )}
          <div style={styles.iconContainer}>
            <FontAwesomeIcon
              icon={faEdit}
              style={styles.icon}
              onClick={() => handleEditClick(index)}
            />
            <FontAwesomeIcon
              icon={faTrash}
              style={styles.icon}
              onClick={() => onDeleteQuestion(index)}
            />
          </div>
        </div>
      ))}

      {editingIndex !== null && (
        <div style={styles.editForm}>
          <h3>Edit Question</h3>
          <label>
            Question Text:
            <input
              type="text"
              name="text"
              value={editedQuestion.text}
              onChange={handleInputChange}
              style={styles.input}
            />
          </label>
          {editedQuestion.type !== 'truefalse' && (
            <div>
              {editedQuestion.options.map((option, optIndex) => (
                <label key={optIndex}>
                  Option {String.fromCharCode(97 + optIndex)}:
                  <input
                    type="text"
                    value={option.text}
                    onChange={(e) => handleOptionChange(optIndex, e.target.value)}
                    style={styles.input}
                  />
                  <label>
                    Correct:
                    <input
                      type="checkbox"
                      checked={!!option.isCorrect}
                      onChange={(e) => {
                        setEditedQuestion((prev) => {
                          const options = [...prev.options];
                          options[optIndex].isCorrect = e.target.checked;
                          return { ...prev, options };
                        });
                      }}
                    />
                  </label>
                </label>
              ))}
            </div>
          )}
          {editedQuestion.type === 'truefalse' && (
            <label>
              Correct Answer:
              <select
                name="correctAnswer"
                value={editedQuestion.correctAnswer}
                onChange={handleInputChange}
                style={styles.input}
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </label>
          )}
          <button onClick={handleSaveClick} style={styles.saveButton}>Save</button>
        </div>
      )}
      {/* <SavePaperButton paper={paper} />  */}
    </div>
    </div>
  );
};

PaperPreview.propTypes = {
  paper: PropTypes.object.isRequired,
  onEditQuestion: PropTypes.func.isRequired,
  onDeleteQuestion: PropTypes.func.isRequired,
  onSaveQuestion: PropTypes.func.isRequired,
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
  iconContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '10px',
  },
  icon: {
    cursor: 'pointer',
    marginLeft: '10px',
  },
  noBullets: {
    listStyleType: 'none',
    padding: '5px',
  },
  correct: {
    fontWeight: 'bold',
    color: 'green',
  },
  editForm: {
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  input: {
    display: 'block',
    margin: '10px 0',
  },
  saveButton: {
    marginTop: '10px',
    padding: '10px 20px',
  },
};

export default PaperPreview;
