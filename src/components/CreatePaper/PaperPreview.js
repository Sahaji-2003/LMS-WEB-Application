// // // // import React, { useState } from 'react';
// // // // import PropTypes from 'prop-types';
// // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

// // // // const PaperPreview = ({ paper, onEditQuestion, onDeleteQuestion, onSaveQuestion }) => {
// // // //   const [editingIndex, setEditingIndex] = useState(null);
// // // //   const [editedQuestion, setEditedQuestion] = useState(null);

// // // //   const getQuestionTypeLabel = (type) => {
// // // //     switch (type) {
// // // //       case 'single':
// // // //         return 'Single Answer';
// // // //       case 'multiple':
// // // //         return 'Multiple Choice';
// // // //       case 'truefalse':
// // // //         return 'True/False';
// // // //       default:
// // // //         return '';
// // // //     }
// // // //   };

// // // //   const handleEditClick = (index) => {
// // // //     console.log('Editing question at index:', index);
// // // //     setEditingIndex(index);
// // // //     setEditedQuestion(paper.questions[index]);
// // // //   };

// // // //   const handleInputChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     console.log('Input change:', name, value);
// // // //     setEditedQuestion((prev) => ({ ...prev, [name]: value }));
// // // //   };

// // // //   const handleOptionChange = (index, value) => {
// // // //     console.log('Option change at index:', index, value);
// // // //     setEditedQuestion((prev) => {
// // // //       const options = [...prev.options];
// // // //       options[index].text = value;
// // // //       return { ...prev, options };
// // // //     });
// // // //   };

// // // //   const handleSaveClick = () => {
// // // //     console.log('Saving question at index:', editingIndex, editedQuestion);
// // // //     if (typeof onSaveQuestion === 'function') {
// // // //       onSaveQuestion(editingIndex, editedQuestion);
// // // //     } else {
// // // //       console.error('onSaveQuestion is not a function');
// // // //     }
// // // //     setEditingIndex(null);
// // // //     setEditedQuestion(null);
// // // //   };

// // // //   return (
// // // //     <div style={styles.paperPreview}>
// // // //       <h2>Preview</h2>
// // // //       <h3>{paper.title}</h3>
// // // //       <p>{paper.description}</p>
// // // //       {paper.questions.map((question, index) => (
// // // //         <div key={index} style={styles.question}>
// // // //           <p>{index + 1}. {question.text} <span style={styles.questionType}>({getQuestionTypeLabel(question.type)})</span></p>
// // // //           {question.type === 'truefalse' ? (
// // // //             <div>
// // // //               <label>
// // // //                 <input type="radio" name={`question-${index}`} value="true" />
// // // //                 True
// // // //               </label>
// // // //               <label>
// // // //                 <input type="radio" name={`question-${index}`} value="false" />
// // // //                 False
// // // //               </label>
// // // //             </div>
// // // //           ) : question.type === 'single' ? (
// // // //             <ul style={styles.noBullets}>
// // // //               {question.options.map((option, optIndex) => (
// // // //                 <li key={optIndex}>
// // // //                   <label>
// // // //                     <input type="radio" name={`question-${index}`} value={option.text} />
// // // //                     {String.fromCharCode(97 + optIndex)}. {option.text}
// // // //                   </label>
// // // //                 </li>
// // // //               ))}
// // // //             </ul>
// // // //           ) : (
// // // //             <ul style={styles.noBullets}>
// // // //               {question.options.map((option, optIndex) => (
// // // //                 <li key={optIndex}>
// // // //                   <label>
// // // //                     <input type="checkbox" name={`question-${index}`} value={option.text} />
// // // //                     {String.fromCharCode(97 + optIndex)}. {option.text}
// // // //                   </label>
// // // //                 </li>
// // // //               ))}
// // // //             </ul>
// // // //           )}
// // // //           <div style={styles.iconContainer}>
// // // //             <FontAwesomeIcon
// // // //               icon={faEdit}
// // // //               style={styles.icon}
// // // //               onClick={() => handleEditClick(index)}
// // // //             />
// // // //             <FontAwesomeIcon
// // // //               icon={faTrash}
// // // //               style={styles.icon}
// // // //               onClick={() => onDeleteQuestion(index)}
// // // //             />
// // // //           </div>
// // // //         </div>
// // // //       ))}

// // // //       {editingIndex !== null && (
// // // //         <div style={styles.editForm}>
// // // //           <h3>Edit Question</h3>
// // // //           <label>
// // // //             Question Text:
// // // //             <input
// // // //               type="text"
// // // //               name="text"
// // // //               value={editedQuestion.text}
// // // //               onChange={handleInputChange}
// // // //               style={styles.input}
// // // //             />
// // // //           </label>
// // // //           {editedQuestion.type !== 'truefalse' && (
// // // //             <div>
// // // //               {editedQuestion.options.map((option, optIndex) => (
// // // //                 <label key={optIndex}>
// // // //                   Option {String.fromCharCode(97 + optIndex)}:
// // // //                   <input
// // // //                     type="text"
// // // //                     value={option.text}
// // // //                     onChange={(e) => handleOptionChange(optIndex, e.target.value)}
// // // //                     style={styles.input}
// // // //                   />
// // // //                 </label>
// // // //               ))}
// // // //             </div>
// // // //           )}
// // // //           <button onClick={handleSaveClick} style={styles.saveButton}>Save</button>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // PaperPreview.propTypes = {
// // // //   paper: PropTypes.object.isRequired,
// // // //   onEditQuestion: PropTypes.func.isRequired,
// // // //   onDeleteQuestion: PropTypes.func.isRequired,
// // // //   onSaveQuestion: PropTypes.func.isRequired,
// // // // };

// // // // const styles = {
// // // //   paperPreview: {
// // // //     padding: '20px',
// // // //   },
// // // //   question: {
// // // //     marginBottom: '20px',
// // // //     padding: '10px',
// // // //     border: '1px solid #ddd',
// // // //     borderRadius: '4px',
// // // //     background: '#f9f9f9',
// // // //   },
// // // //   questionType: {
// // // //     fontStyle: 'italic',
// // // //     color: '#666',
// // // //   },
// // // //   iconContainer: {
// // // //     display: 'flex',
// // // //     justifyContent: 'flex-end',
// // // //     marginTop: '10px',
// // // //   },
// // // //   icon: {
// // // //     cursor: 'pointer',
// // // //     marginLeft: '10px',
// // // //     fontSize: '18px',
// // // //     color: '#007BFF',
// // // //   },
// // // //   noBullets: {
// // // //     listStyleType: 'none',
// // // //     padding: 0,
// // // //   },
// // // //   editForm: {
// // // //     marginTop: '20px',
// // // //     padding: '20px',
// // // //     border: '1px solid #ddd',
// // // //     borderRadius: '4px',
// // // //     background: '#f9f9f9',
// // // //   },
// // // //   input: {
// // // //     display: 'block',
// // // //     margin: '10px 0',
// // // //     padding: '8px',
// // // //     width: '100%',
// // // //     boxSizing: 'border-box',
// // // //   },
// // // //   saveButton: {
// // // //     padding: '10px 20px',
// // // //     background: '#007BFF',
// // // //     color: '#fff',
// // // //     border: 'none',
// // // //     borderRadius: '4px',
// // // //     cursor: 'pointer',
// // // //   },
// // // // };

// // // // export default PaperPreview;


// // // import React, { useState } from 'react';
// // // import PropTypes from 'prop-types';
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

// // // const PaperPreview = ({ paper, onEditQuestion, onDeleteQuestion, onSaveQuestion }) => {
// // //   const [editingIndex, setEditingIndex] = useState(null);
// // //   const [editedQuestion, setEditedQuestion] = useState(null);

// // //   const getQuestionTypeLabel = (type) => {
// // //     switch (type) {
// // //       case 'single':
// // //         return 'Single Answer';
// // //       case 'multiple':
// // //         return 'Multiple Choice';
// // //       case 'truefalse':
// // //         return 'True/False';
// // //       default:
// // //         return '';
// // //     }
// // //   };

// // //   const handleEditClick = (index) => {
// // //     console.log('Editing question at index:', index);
// // //     setEditingIndex(index);
// // //     setEditedQuestion(paper.questions[index]);
// // //   };

// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     console.log('Input change:', name, value);
// // //     setEditedQuestion((prev) => ({ ...prev, [name]: value }));
// // //   };

// // //   const handleOptionChange = (index, value) => {
// // //     console.log('Option change at index:', index, value);
// // //     setEditedQuestion((prev) => {
// // //       const options = [...prev.options];
// // //       options[index].text = value;
// // //       return { ...prev, options };
// // //     });
// // //   };

// // //   const handleSaveClick = () => {
// // //     console.log('Saving question at index:', editingIndex, editedQuestion);
// // //     if (typeof onSaveQuestion === 'function') {
// // //       onSaveQuestion(editingIndex, editedQuestion);
// // //     } else {
// // //       console.error('onSaveQuestion is not a function');
// // //     }
// // //     setEditingIndex(null);
// // //     setEditedQuestion(null);
// // //   };

// // //   return (
// // //     <div style={styles.paperPreview}>
// // //       <h2>Preview</h2>
// // //       <h3>{paper.title}</h3>
// // //       <p>{paper.description}</p>
// // //       {paper.questions.map((question, index) => (
// // //         <div key={index} style={styles.question}>
// // //           <p>{index + 1}. {question.text} <span style={styles.questionType}>({getQuestionTypeLabel(question.type)})</span></p>
// // //           {question.type === 'truefalse' ? (
// // //             <div>
// // //               <label style={question.correctAnswer === 'true' ? styles.correct : {}}>
// // //                 <input type="radio" name={`question-${index}`} value="true" disabled />
// // //                 True
// // //               </label>
// // //               <label style={question.correctAnswer === 'false' ? styles.correct : {}}>
// // //                 <input type="radio" name={`question-${index}`} value="false" disabled />
// // //                 False
// // //               </label>
// // //             </div>
// // //           ) : question.type === 'single' ? (
// // //             <ul style={styles.noBullets}>
// // //               {question.options.map((option, optIndex) => (
// // //                 <li key={optIndex} style={option.isCorrect ? styles.correct : {}}>
// // //                   <label>
// // //                     <input type="radio" name={`question-${index}`} value={option.text} disabled />
// // //                     {String.fromCharCode(97 + optIndex)}. {option.text}
// // //                   </label>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           ) : (
// // //             <ul style={styles.noBullets}>
// // //               {question.options.map((option, optIndex) => (
// // //                 <li key={optIndex} style={option.isCorrect ? styles.correct : {}}>
// // //                   <label>
// // //                     <input type="checkbox" name={`question-${index}`} value={option.text} disabled />
// // //                     {String.fromCharCode(97 + optIndex)}. {option.text}
// // //                   </label>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           )}
// // //           <div style={styles.iconContainer}>
// // //             <FontAwesomeIcon
// // //               icon={faEdit}
// // //               style={styles.icon}
// // //               onClick={() => handleEditClick(index)}
// // //             />
// // //             <FontAwesomeIcon
// // //               icon={faTrash}
// // //               style={styles.icon}
// // //               onClick={() => onDeleteQuestion(index)}
// // //             />
// // //           </div>
// // //         </div>
// // //       ))}

// // //       {editingIndex !== null && (
// // //         <div style={styles.editForm}>
// // //           <h3>Edit Question</h3>
// // //           <label>
// // //             Question Text:
// // //             <input
// // //               type="text"
// // //               name="text"
// // //               value={editedQuestion.text}
// // //               onChange={handleInputChange}
// // //               style={styles.input}
// // //             />
// // //           </label>
// // //           {editedQuestion.type !== 'truefalse' && (
// // //             <div>
// // //               {editedQuestion.options.map((option, optIndex) => (
// // //                 <label key={optIndex}>
// // //                   Option {String.fromCharCode(97 + optIndex)}:
// // //                   <input
// // //                     type="text"
// // //                     value={option.text}
// // //                     onChange={(e) => handleOptionChange(optIndex, e.target.value)}
// // //                     style={styles.input}
// // //                   />
// // //                   <label>
// // //                     Correct:
// // //                     <input
// // //                       type="checkbox"
// // //                       checked={!!option.isCorrect}
// // //                       onChange={(e) => {
// // //                         setEditedQuestion((prev) => {
// // //                           const options = [...prev.options];
// // //                           options[optIndex].isCorrect = e.target.checked;
// // //                           return { ...prev, options };
// // //                         });
// // //                       }}
// // //                     />
// // //                   </label>
// // //                 </label>
// // //               ))}
// // //             </div>
// // //           )}
// // //           {editedQuestion.type === 'truefalse' && (
// // //             <label>
// // //               Correct Answer:
// // //               <select
// // //                 name="correctAnswer"
// // //                 value={editedQuestion.correctAnswer}
// // //                 onChange={handleInputChange}
// // //                 style={styles.input}
// // //               >
// // //                 <option value="true">True</option>
// // //                 <option value="false">False</option>
// // //               </select>
// // //             </label>
// // //           )}
// // //           <button onClick={handleSaveClick} style={styles.saveButton}>Save</button>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // PaperPreview.propTypes = {
// // //   paper: PropTypes.object.isRequired,
// // //   onEditQuestion: PropTypes.func.isRequired,
// // //   onDeleteQuestion: PropTypes.func.isRequired,
// // //   onSaveQuestion: PropTypes.func.isRequired,
// // // };

// // // const styles = {
// // //   paperPreview: {
// // //     padding: '20px',
// // //   },
// // //   question: {
// // //     marginBottom: '20px',
// // //     padding: '10px',
// // //     border: '1px solid #ddd',
// // //     borderRadius: '4px',
// // //     background: '#f9f9f9',
// // //   },
// // //   questionType: {
// // //     fontStyle: 'italic',
// // //     color: '#666',
// // //   },
// // //   iconContainer: {
// // //     display: 'flex',
// // //     justifyContent: 'flex-end',
// // //     marginTop: '10px',
// // //   },
// // //   icon: {
// // //     cursor: 'pointer',
// // //     marginLeft: '10px',
// // //     fontSize: '18px',
// // //     color: '#007BFF',
// // //   },
// // //   noBullets: {
// // //     listStyleType: 'none',
// // //     padding: 0,
// // //   },
// // //   correct: {
// // //     backgroundColor: '#d4edda',
// // //     color: '#155724',
// // //   },
// // //   editForm: {
// // //     marginTop: '20px',
// // //     padding: '20px',
// // //     border: '1px solid #ddd',
// // //     borderRadius: '4px',
// // //     background: '#f9f9f9',
// // //   },
// // //   input: {
// // //     display: 'block',
// // //     margin: '10px 0',
// // //     padding: '8px',
// // //     width: '100%',
// // //     boxSizing: 'border-box',
// // //   },
// // //   saveButton: {
// // //     padding: '10px 20px',
// // //     background: '#007BFF',
// // //     color: '#fff',
// // //     border: 'none',
// // //     borderRadius: '4px',
// // //     cursor: 'pointer',
// // //   },
// // // };

// // // export default PaperPreview;


// // import PropTypes from 'prop-types';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
// // import axios from 'axios';
// // import React, { useState } from 'react';


// // const PaperPreview = ({ paper, onEditQuestion, onDeleteQuestion, onSaveQuestion }) => {
// //   const [editingIndex, setEditingIndex] = useState(null);
// //   const [editedQuestion, setEditedQuestion] = useState(null);

// //   const getQuestionTypeLabel = (type) => {
// //     switch (type) {
// //       case 'single':
// //         return 'Single Answer';
// //       case 'multiple':
// //         return 'Multiple Choice';
// //       case 'truefalse':
// //         return 'True/False';
// //       default:
// //         return '';
// //     }
// //   };

// //   const handleEditClick = (index) => {
// //     console.log('Editing question at index:', index);
// //     setEditingIndex(index);
// //     setEditedQuestion(paper.questions[index]);
// //   };

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     console.log('Input change:', name, value);
// //     setEditedQuestion((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleOptionChange = (index, value) => {
// //     console.log('Option change at index:', index, value);
// //     setEditedQuestion((prev) => {
// //       const options = [...prev.options];
// //       options[index].text = value;
// //       return { ...prev, options };
// //     });
// //   };

// //   const handleSaveClick = () => {
// //     console.log('Saving question at index:', editingIndex, editedQuestion);
// //     if (typeof onSaveQuestion === 'function') {
// //       onSaveQuestion(editingIndex, editedQuestion);
// //     } else {
// //       console.error('onSaveQuestion is not a function');
// //     }
// //     setEditingIndex(null);
// //     setEditedQuestion(null);
// //   };

// //   const handleDoneClick = async () => {
// //     try {
// //       const response = await axios.post('${API_URL}/api/papers/save', paper);
// //       console.log('Paper saved:', response.data);
// //     } catch (error) {
// //       console.error('Error saving paper:', error);
// //     }
// //   };

// //   return (
// //     <div style={styles.paperPreview}>
// //       <h2>Preview</h2>
// //       <h3>{paper.title}</h3>
// //       <p>{paper.description}</p>
// //       {paper.questions.map((question, index) => (
// //         <div key={index} style={styles.question}>
// //           <p>{index + 1}. {question.text} <span style={styles.questionType}>({getQuestionTypeLabel(question.type)})</span></p>
// //           {question.type === 'truefalse' ? (
// //             <div>
// //               <label style={question.correctAnswer === 'true' ? styles.correct : {}}>
// //                 <input type="radio" name={`question-${index}`} value="true" disabled />
// //                 True
// //               </label>
// //               <label style={question.correctAnswer === 'false' ? styles.correct : {}}>
// //                 <input type="radio" name={`question-${index}`} value="false" disabled />
// //                 False
// //               </label>
// //             </div>
// //           ) : question.type === 'single' ? (
// //             <ul style={styles.noBullets}>
// //               {question.options.map((option, optIndex) => (
// //                 <li key={optIndex} style={option.isCorrect ? styles.correct : {}}>
// //                   <label>
// //                     <input type="radio" name={`question-${index}`} value={option.text} disabled />
// //                     {String.fromCharCode(97 + optIndex)}. {option.text}
// //                   </label>
// //                 </li>
// //               ))}
// //             </ul>
// //           ) : (
// //             <ul style={styles.noBullets}>
// //               {question.options.map((option, optIndex) => (
// //                 <li key={optIndex} style={option.isCorrect ? styles.correct : {}}>
// //                   <label>
// //                     <input type="checkbox" name={`question-${index}`} value={option.text} disabled />
// //                     {String.fromCharCode(97 + optIndex)}. {option.text}
// //                   </label>
// //                 </li>
// //               ))}
// //             </ul>
// //           )}
// //           <div style={styles.iconContainer}>
// //             <FontAwesomeIcon
// //               icon={faEdit}
// //               style={styles.icon}
// //               onClick={() => handleEditClick(index)}
// //             />
// //             <FontAwesomeIcon
// //               icon={faTrash}
// //               style={styles.icon}
// //               onClick={() => onDeleteQuestion(index)}
// //             />
// //           </div>
// //         </div>
// //       ))}

// //       {editingIndex !== null && (
// //         <div style={styles.editForm}>
// //           <h3>Edit Question</h3>
// //           <label>
// //             Question Text:
// //             <input
// //               type="text"
// //               name="text"
// //               value={editedQuestion.text}
// //               onChange={handleInputChange}
// //               style={styles.input}
// //             />
// //           </label>
// //           {editedQuestion.type !== 'truefalse' && (
// //             <div>
// //               {editedQuestion.options.map((option, optIndex) => (
// //                 <label key={optIndex}>
// //                   Option {String.fromCharCode(97 + optIndex)}:
// //                   <input
// //                     type="text"
// //                     value={option.text}
// //                     onChange={(e) => handleOptionChange(optIndex, e.target.value)}
// //                     style={styles.input}
// //                   />
// //                   <label>
// //                     Correct:
// //                     <input
// //                       type="checkbox"
// //                       checked={!!option.isCorrect}
// //                       onChange={(e) => {
// //                         setEditedQuestion((prev) => {
// //                           const options = [...prev.options];
// //                           options[optIndex].isCorrect = e.target.checked;
// //                           return { ...prev, options };
// //                         });
// //                       }}
// //                     />
// //                   </label>
// //                 </label>
// //               ))}
// //             </div>
// //           )}
// //           {editedQuestion.type === 'truefalse' && (
// //             <label>
// //               Correct Answer:
// //               <select
// //                 name="correctAnswer"
// //                 value={editedQuestion.correctAnswer}
// //                 onChange={handleInputChange}
// //                 style={styles.input}
// //               >
// //                 <option value="true">True</option>
// //                 <option value="false">False</option>
// //               </select>
// //             </label>
// //           )}
// //           <button onClick={handleSaveClick} style={styles.saveButton}>Save</button>
// //         </div>
// //       )}
// //       <button onClick={handleDoneClick} style={styles.doneButton}>Done</button>
// //     </div>
// //   );
// // };

// // PaperPreview.propTypes = {
// //   paper: PropTypes.object.isRequired,
// //   onEditQuestion: PropTypes.func.isRequired,
// //   onDeleteQuestion: PropTypes.func.isRequired,
// //   onSaveQuestion: PropTypes.func.isRequired,
// // };

// // const styles = {
// //   paperPreview: {
// //     padding: '20px',
// //   },
// //   question: {
// //     marginBottom: '20px',
// //     padding: '10px',
// //     border: '1px solid #ddd',
// //     borderRadius: '4px',
// //     background: '#f9f9f9',
// //   },
// //   questionType: {
// //     fontStyle: 'italic',
// //     color: '#666',
// //   },
// //   iconContainer: {
// //     display: 'flex',
// //     justifyContent: 'flex-end',
// //     marginTop: '10px',
// //   },
// //   icon: {
// //     cursor: 'pointer',
// //     marginLeft: '10px',
// //     fontSize: '18px',
// //     color: '#007BFF',
// //   },
// //   noBullets: {
// //     listStyleType: 'none',
// //     padding: 0,
// //   },
// //   correct: {
// //     backgroundColor: '#d4edda',
// //     color: '#155724',
// //   },
// //   editForm: {
// //     marginTop: '20px',
// //     padding: '20px',
// //     border: '1px solid #ddd',
// //     borderRadius: '4px',
// //     background: '#f9f9f9',
// //   },
// //   input: {
// //     display: 'block',
// //     margin: '10px 0',
// //     padding: '8px',
// //     width: '100%',
// //     boxSizing: 'border-box',
// //   },
// //   saveButton: {
// //     padding: '10px 20px',
// //     background: '#007BFF',
// //     color: '#fff',
// //     border: 'none',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //   },
// //   doneButton: {
// //     padding: '10px 20px',
// //     background: '#28a745',
// //     color: '#fff',
// //     border: 'none',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //     marginTop: '20px',
// //   },
// // };

// // export default PaperPreview;


// import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
// import React, { useState } from 'react';
// import { useGlobalState } from '../Constants/GlobalStateProvider';
// import { API_URL } from '../Constants/Url';

// const PaperPreview = ({ paper, onEditQuestion, onDeleteQuestion, onSaveQuestion }) => {
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editedQuestion, setEditedQuestion] = useState(null);
//   const { getGlobal, setGlobal } = useGlobalState();
//   const globalState = getGlobal();

//   const getQuestionTypeLabel = (type) => {
//     switch (type) {
//       case 'single':
//         return 'Single Answer';
//       case 'multiple':
//         return 'Multiple Choice';
//       case 'truefalse':
//         return 'True/False';
//       default:
//         return '';
//     }
//   };

//   const handleEditClick = (index) => {
//     setEditingIndex(index);
//     setEditedQuestion(paper.questions[index]);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedQuestion((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleOptionChange = (index, value) => {
//     setEditedQuestion((prev) => {
//       const options = [...prev.options];
//       options[index].text = value;
//       return { ...prev, options };
//     });
//   };

//   const handleSaveClick = () => {
//     if (typeof onSaveQuestion === 'function') {
//       onSaveQuestion(editingIndex, editedQuestion);
//     }
//     setEditingIndex(null);
//     setEditedQuestion(null);
//   };

//   const handleDoneClick = async () => {
//     const globalState = getGlobal();

//     if (!globalState ) {
//       console.error('User ID not found in global state');
//       return;
//     }

//     try {
//       const payload = {
//         ...paper,
//         user_id: globalState,
//         current_time: new Date().toISOString(),
//       };
//       const response = await axios.post(`${API_URL}/api/papers/save`, payload);
//       console.log('Paper saved:', response.data);
//     } catch (error) {
//       console.error('Error saving paper:', error);
//     }
//   };

//   return (
//     <div style={styles.paperPreview}>
//       <h2>Preview</h2>
//       <h3>{paper.title}</h3>
//       <p>{paper.description}</p>
//       {paper.questions.map((question, index) => (
//         <div key={index} style={styles.question}>
//           <p>{index + 1}. {question.text} <span style={styles.questionType}>({getQuestionTypeLabel(question.type)})</span></p>
//           {question.type === 'truefalse' ? (
//             <div>
//               <label style={question.correctAnswer === 'true' ? styles.correct : {}}>
//                 <input type="radio" name={`question-${index}`} value="true" disabled />
//                 True
//               </label>
//               <label style={question.correctAnswer === 'false' ? styles.correct : {}}>
//                 <input type="radio" name={`question-${index}`} value="false" disabled />
//                 False
//               </label>
//             </div>
//           ) : question.type === 'single' ? (
//             <ul style={styles.noBullets}>
//               {question.options.map((option, optIndex) => (
//                 <li key={optIndex} style={option.isCorrect ? styles.correct : {}}>
//                   <label>
//                     <input type="radio" name={`question-${index}`} value={option.text} disabled />
//                     {String.fromCharCode(97 + optIndex)}. {option.text}
//                   </label>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <ul style={styles.noBullets}>
//               {question.options.map((option, optIndex) => (
//                 <li key={optIndex} style={option.isCorrect ? styles.correct : {}}>
//                   <label>
//                     <input type="checkbox" name={`question-${index}`} value={option.text} disabled />
//                     {String.fromCharCode(97 + optIndex)}. {option.text}
//                   </label>
//                 </li>
//               ))}
//             </ul>
//           )}
//           <div style={styles.iconContainer}>
//             <FontAwesomeIcon
//               icon={faEdit}
//               style={styles.icon}
//               onClick={() => handleEditClick(index)}
//             />
//             <FontAwesomeIcon
//               icon={faTrash}
//               style={styles.icon}
//               onClick={() => onDeleteQuestion(index)}
//             />
//           </div>
//         </div>
//       ))}

//       {editingIndex !== null && (
//         <div style={styles.editForm}>
//           <h3>Edit Question</h3>
//           <label>
//             Question Text:
//             <input
//               type="text"
//               name="text"
//               value={editedQuestion.text}
//               onChange={handleInputChange}
//               style={styles.input}
//             />
//           </label>
//           {editedQuestion.type !== 'truefalse' && (
//             <div>
//               {editedQuestion.options.map((option, optIndex) => (
//                 <label key={optIndex}>
//                   Option {String.fromCharCode(97 + optIndex)}:
//                   <input
//                     type="text"
//                     value={option.text}
//                     onChange={(e) => handleOptionChange(optIndex, e.target.value)}
//                     style={styles.input}
//                   />
//                   <label>
//                     Correct:
//                     <input
//                       type="checkbox"
//                       checked={!!option.isCorrect}
//                       onChange={(e) => {
//                         setEditedQuestion((prev) => {
//                           const options = [...prev.options];
//                           options[optIndex].isCorrect = e.target.checked;
//                           return { ...prev, options };
//                         });
//                       }}
//                     />
//                   </label>
//                 </label>
//               ))}
//             </div>
//           )}
//           {editedQuestion.type === 'truefalse' && (
//             <label>
//               Correct Answer:
//               <select
//                 name="correctAnswer"
//                 value={editedQuestion.correctAnswer}
//                 onChange={handleInputChange}
//                 style={styles.input}
//               >
//                 <option value="true">True</option>
//                 <option value="false">False</option>
//               </select>
//             </label>
//           )}
//           <button onClick={handleSaveClick} style={styles.saveButton}>Save</button>
//         </div>
//       )}
//       <button onClick={handleDoneClick} style={styles.doneButton}>Done</button>
//     </div>
//   );
// };

// PaperPreview.propTypes = {
//   paper: PropTypes.object.isRequired,
//   onEditQuestion: PropTypes.func.isRequired,
//   onDeleteQuestion: PropTypes.func.isRequired,
//   onSaveQuestion: PropTypes.func.isRequired,
// };

// const styles = {
//   paperPreview: {
//     padding: '20px',
//   },
//   question: {
//     marginBottom: '20px',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//   },
//   questionType: {
//     fontSize: '0.8em',
//     color: '#888',
//   },
//   iconContainer: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     marginTop: '10px',
//   },
//   icon: {
//     cursor: 'pointer',
//     marginLeft: '10px',
//   },
//   noBullets: {
//     listStyleType: 'none',
//     padding: 0,
//   },
//   correct: {
//     fontWeight: 'bold',
//     color: 'green',
//   },
//   editForm: {
//     marginBottom: '20px',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//   },
//   input: {
//     display: 'block',
//     margin: '10px 0',
//   },
//   saveButton: {
//     marginTop: '10px',
//     padding: '10px 20px',
//   },
//   doneButton: {
//     marginTop: '20px',
//     padding: '10px 20px',
//   },
// };

// export default PaperPreview;



// Working Properly 
//PaperPreview.js
// import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
// import React, { useState } from 'react';
// import { useGlobalState } from '../Constants/GlobalStateProvider';
// import { API_URL } from '../Constants/Url';

// const PaperPreview = ({ paper, onEditQuestion, onDeleteQuestion, onSaveQuestion, template, backgroundColor }) => {
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editedQuestion, setEditedQuestion] = useState(null);
//   const { getGlobal } = useGlobalState();
//   const globalState = getGlobal();

//   const getQuestionTypeLabel = (type) => {
//     switch (type) {
//       case 'single':
//         return 'Single Answer';
//       case 'multiple':
//         return 'Multiple Choice';
//       case 'truefalse':
//         return 'True/False';
//       default:
//         return '';
//     }
//   };

//   const handleEditClick = (index) => {
//     setEditingIndex(index);
//     setEditedQuestion(paper.questions[index]);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedQuestion((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleOptionChange = (index, value) => {
//     setEditedQuestion((prev) => {
//       const options = [...prev.options];
//       options[index].text = value;
//       return { ...prev, options };
//     });
//   };

//   const handleSaveClick = () => {
//     if (typeof onSaveQuestion === 'function') {
//       onSaveQuestion(editingIndex, editedQuestion);
//     }
//     setEditingIndex(null);
//     setEditedQuestion(null);
//   };

//   const handleDoneClick = async () => {
//     if (!globalState) {
//       console.error('User ID not found in global state');
//       return;
//     }

//     try {
//       const payload = {
//         ...paper,
//         user_id: globalState,
//         current_time: new Date().toISOString(),
//       };
//       const response = await axios.post(`${API_URL}/api/papers/save`, payload);
//       console.log('Paper saved:', response.data);
//     } catch (error) {
//       console.error('Error saving paper:', error);
//     }
//   };

//   return (
//     <div style={{ ...styles.paperPreview, backgroundImage: `url(${template})` ,backgroundColor}}>
//       <h2>Preview</h2>
//       <h3>{paper.title}</h3>
//       <p>{paper.description}</p>
//       {paper.questions.map((question, index) => (
//         <div key={index} style={styles.question}>
//           <p>{index + 1}. {question.text} <span style={styles.questionType}>({getQuestionTypeLabel(question.type)})</span></p>
//           {question.type === 'truefalse' ? (
//             <div>
//               <label style={question.correctAnswer === 'true' ? styles.correct : {}}>
//                 <input type="radio" name={`question-${index}`} value="true" disabled />
//                 True
//               </label>
//               <label style={question.correctAnswer === 'false' ? styles.correct : {}}>
//                 <input type="radio" name={`question-${index}`} value="false" disabled />
//                 False
//               </label>
//             </div>
//           ) : question.type === 'single' ? (
//             <ul style={styles.noBullets}>
//               {question.options.map((option, optIndex) => (
//                 <li key={optIndex} style={option.isCorrect ? styles.correct : {}}>
//                   <label>
//                     <input type="radio" name={`question-${index}`} value={option.text} disabled />
//                     {String.fromCharCode(97 + optIndex)}. {option.text}
//                   </label>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <ul style={styles.noBullets}>
//               {question.options.map((option, optIndex) => (
//                 <li key={optIndex} style={option.isCorrect ? styles.correct : {}}>
//                   <label>
//                     <input type="checkbox" name={`question-${index}`} value={option.text} disabled />
//                     {String.fromCharCode(97 + optIndex)}. {option.text}
//                   </label>
//                 </li>
//               ))}
//             </ul>
//           )}
//           <div style={styles.iconContainer}>
//             <FontAwesomeIcon
//               icon={faEdit}
//               style={styles.icon}
//               onClick={() => handleEditClick(index)}
//             />
//             <FontAwesomeIcon
//               icon={faTrash}
//               style={styles.icon}
//               onClick={() => onDeleteQuestion(index)}
//             />
//           </div>
//         </div>
//       ))}

//       {editingIndex !== null && (
//         <div style={styles.editForm}>
//           <h3>Edit Question</h3>
//           <label>
//             Question Text:
//             <input
//               type="text"
//               name="text"
//               value={editedQuestion.text}
//               onChange={handleInputChange}
//               style={styles.input}
//             />
//           </label>
//           {editedQuestion.type !== 'truefalse' && (
//             <div>
//               {editedQuestion.options.map((option, optIndex) => (
//                 <label key={optIndex}>
//                   Option {String.fromCharCode(97 + optIndex)}:
//                   <input
//                     type="text"
//                     value={option.text}
//                     onChange={(e) => handleOptionChange(optIndex, e.target.value)}
//                     style={styles.input}
//                   />
//                   <label>
//                     Correct:
//                     <input
//                       type="checkbox"
//                       checked={!!option.isCorrect}
//                       onChange={(e) => {
//                         setEditedQuestion((prev) => {
//                           const options = [...prev.options];
//                           options[optIndex].isCorrect = e.target.checked;
//                           return { ...prev, options };
//                         });
//                       }}
//                     />
//                   </label>
//                 </label>
//               ))}
//             </div>
//           )}
//           {editedQuestion.type === 'truefalse' && (
//             <label>
//               Correct Answer:
//               <select
//                 name="correctAnswer"
//                 value={editedQuestion.correctAnswer}
//                 onChange={handleInputChange}
//                 style={styles.input}
//               >
//                 <option value="true">True</option>
//                 <option value="false">False</option>
//               </select>
//             </label>
//           )}
//           <button onClick={handleSaveClick} style={styles.saveButton}>Save</button>
//         </div>
//       )}
//       <button onClick={handleDoneClick} style={styles.doneButton}>Done</button>
//     </div>
//   );
// };

// PaperPreview.propTypes = {
//   paper: PropTypes.object.isRequired,
//   onEditQuestion: PropTypes.func.isRequired,
//   onDeleteQuestion: PropTypes.func.isRequired,
//   onSaveQuestion: PropTypes.func.isRequired,
//   template: PropTypes.string,
//   backgroundColor: PropTypes.string,
// };

// const styles = {
//   paperPreview: {
//     padding: '20px',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   },
//   question: {
//     marginBottom: '20px',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent background for readability
//   },
//   questionType: {
//     fontSize: '0.8em',
//     color: '#888',
//   },
//   iconContainer: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     marginTop: '10px',
//   },
//   icon: {
//     cursor: 'pointer',
//     marginLeft: '10px',
//   },
//   noBullets: {
//     listStyleType: 'none',
//     padding: 0,
//   },
//   correct: {
//     fontWeight: 'bold',
//     color: 'green',
//   },
//   editForm: {
//     marginBottom: '20px',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//   },
//   input: {
//     display: 'block',
//     margin: '10px 0',
//   },
//   saveButton: {
//     marginTop: '10px',
//     padding: '10px 20px',
//   },
//   doneButton: {
//     marginTop: '20px',
//     padding: '10px 20px',
//   },
// };

// export default PaperPreview;


// import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
// import React, { useState } from 'react';
// import { useGlobalState } from '../Constants/GlobalStateProvider';
// import { API_URL } from '../Constants/Url';

// const PaperPreview = ({ paper, onEditQuestion, onDeleteQuestion, onSaveQuestion, template, backgroundColor }) => {
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editedQuestion, setEditedQuestion] = useState(null);
//   const { getGlobal, setGlobal } = useGlobalState();
//   const globalState = getGlobal();

//   const getQuestionTypeLabel = (type) => {
//     switch (type) {
//       case 'single':
//         return 'Single Answer';
//       case 'multiple':
//         return 'Multiple Choice';
//       case 'truefalse':
//         return 'True/False';
//       default:
//         return '';
//     }
//   };

//   const handleEditClick = (index) => {
//     setEditingIndex(index);
//     setEditedQuestion(paper.questions[index]);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedQuestion((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleOptionChange = (index, value) => {
//     setEditedQuestion((prev) => {
//       const options = [...prev.options];
//       options[index].text = value;
//       return { ...prev, options };
//     });
//   };

//   const handleSaveClick = () => {
//     if (typeof onSaveQuestion === 'function') {
//       onSaveQuestion(editingIndex, editedQuestion);
//     }
//     setEditingIndex(null);
//     setEditedQuestion(null);
//   };

//   const handleDoneClick = async () => {
//     const globalState = getGlobal();

//     if (!globalState) {
//       console.error('User ID not found in global state');
//       return;
//     }

//     try {
//       const payload = {
//         ...paper,
//         user_id: globalState,
//         current_time: new Date().toISOString(),
//       };
//       const response = await axios.post(`${API_URL}/api/papers/save`, payload);
//       console.log('Paper saved:', response.data);
//     } catch (error) {
//       console.error('Error saving paper:', error);
//     }
//   };

//   return (
//     <div style={{ ...styles.paperPreview, backgroundImage: `url(${template})`, backgroundColor }}>
//       <h2>Preview</h2>
//       <h3>{paper.title}</h3>
//       <p>{paper.description}</p>
//       {paper.questions.map((question, index) => (
//         <div key={index} style={styles.question}>
//           <p>{question.text}</p>
//           <p style={styles.questionType}>{getQuestionTypeLabel(question.type)}</p>
//           {question.type === 'single' ? (
//             <ul style={styles.noBullets}>
//               {question.options.map((option, optIndex) => (
//                 <li key={optIndex} style={option.correct ? styles.correct : {}}>
//                   <label>
//                     <input type="radio" name={`question-${index}`} value={option.text} disabled />
//                     {option.text}
//                   </label>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <ul style={styles.noBullets}>
//               {question.options.map((option, optIndex) => (
//                 <li key={optIndex} style={option.correct ? styles.correct : {}}>
//                   <label>
//                     <input type="checkbox" name={`question-${index}`} value={option.text} disabled />
//                     {option.text}
//                   </label>
//                 </li>
//               ))}
//             </ul>
//           )}
//           <div style={styles.icons}>
//             <FontAwesomeIcon icon={faEdit} onClick={() => handleEditClick(index)} style={styles.icon} />
//             <FontAwesomeIcon icon={faTrash} onClick={() => onDeleteQuestion(index)} style={styles.icon} />
//           </div>
//           {editingIndex === index && (
//             <div style={styles.editForm}>
//               <input
//                 type="text"
//                 name="text"
//                 value={editedQuestion.text}
//                 onChange={handleInputChange}
//                 style={styles.input}
//               />
//               {editedQuestion.options && (
//                 <div style={styles.options}>
//                   {editedQuestion.options.map((option, optIndex) => (
//                     <input
//                       key={optIndex}
//                       type="text"
//                       value={option.text}
//                       onChange={(e) => handleOptionChange(optIndex, e.target.value)}
//                       style={styles.optionInput}
//                     />
//                   ))}
//                 </div>
//               )}
//               <button onClick={handleSaveClick} style={styles.saveButton}>Save</button>
//             </div>
//           )}
//         </div>
//       ))}
//       <button onClick={handleDoneClick} style={styles.doneButton}>Done</button>
//     </div>
//   );
// };

// PaperPreview.propTypes = {
//   paper: PropTypes.shape({
//     title: PropTypes.string,
//     description: PropTypes.string,
//     questions: PropTypes.arrayOf(
//       PropTypes.shape({
//         text: PropTypes.string,
//         type: PropTypes.string,
//         options: PropTypes.arrayOf(
//           PropTypes.shape({
//             text: PropTypes.string,
//             correct: PropTypes.bool,
//           })
//         ),
//         correctAnswer: PropTypes.string,
//       })
//     ),
//   }).isRequired,
//   onEditQuestion: PropTypes.func.isRequired,
//   onDeleteQuestion: PropTypes.func.isRequired,
//   onSaveQuestion: PropTypes.func.isRequired,
//   template: PropTypes.string,
//   backgroundColor: PropTypes.string,
// };

// const styles = {
//   paperPreview: {
//     padding: '20px',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     borderRadius: '4px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//   },
//   question: {
//     marginBottom: '20px',
//   },
//   questionType: {
//     fontStyle: 'italic',
//     color: '#666',
//   },
//   noBullets: {
//     listStyleType: 'none',
//     paddingLeft: '0',
//   },
//   correct: {
//     color: 'green',
//   },
//   icons: {
//     display: 'flex',
//     gap: '10px',
//   },
//   icon: {
//     cursor: 'pointer',
//   },
//   editForm: {
//     marginTop: '10px',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     marginBottom: '10px',
//   },
//   options: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '10px',
//   },
//   optionInput: {
//     width: '100%',
//     padding: '10px',
//   },
//   saveButton: {
//     padding: '10px 20px',
//     backgroundColor: '#28a745',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
//   doneButton: {
//     padding: '10px 20px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     marginTop: '20px',
//   },
// };

// export default PaperPreview;


// import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
// import React, { useState } from 'react';
// import { SketchPicker } from 'react-color';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import DownloadButtons from '../Download/DownloadButtons'; // Assuming you have this component
// import SavePaperButton from './Header/SavePaperButton'; // Import the new component
// import { useGlobalState } from '../Constants/GlobalStateProvider';
// import { API_URL } from '../Constants/Url';

// const PaperPreview = ({ paper, onEditQuestion, onDeleteQuestion, onSaveQuestion, template, backgroundColor }) => {
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editedQuestion, setEditedQuestion] = useState(null);
//   const { getGlobal } = useGlobalState();
//   const globalState = getGlobal();

//   const getQuestionTypeLabel = (type) => {
//     switch (type) {
//       case 'single':
//         return 'Single Answer';
//       case 'multiple':
//         return 'Multiple Choice';
//       case 'truefalse':
//         return 'True/False';
//       default:
//         return '';
//     }
//   };

//   const handleEditClick = (index) => {
//     setEditingIndex(index);
//     setEditedQuestion(paper.questions[index]);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedQuestion((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleOptionChange = (index, value) => {
//     setEditedQuestion((prev) => {
//       const options = [...prev.options];
//       options[index].text = value;
//       return { ...prev, options };
//     });
//   };

//   const handleSaveClick = () => {
//     if (typeof onSaveQuestion === 'function') {
//       onSaveQuestion(editingIndex, editedQuestion);
//     }
//     setEditingIndex(null);
//     setEditedQuestion(null);
//   };

//   return (
//     <div style={{borderRadius: '30px'}}>
//     <div style={{ ...styles.paperPreview, backgroundImage: `url(${template})`, backgroundColor }}>
//       <h2 style={{ textAlign: 'center', color: 'grey' }}>Preview</h2>
//       <h3 style={{ textAlign: 'center', color: 'black' }}>{paper.title}</h3>
//       <p style={{ textAlign: 'center', color: 'black' }}>{paper.description}</p>
//       {paper.questions.map((question, index) => (
//         <div key={index} style={styles.question}>
//           <p>{index + 1}. {question.text} <span style={styles.questionType}>({getQuestionTypeLabel(question.type)})</span></p>
//           {question.type === 'truefalse' ? (
//             <div>
//               <label style={question.correctAnswer === 'true' ? styles.correct : {}}>
//                 <input type="radio" name={`question-${index}`} value="true" disabled />
//                 True
//               </label>
//               <label style={question.correctAnswer === 'false' ? styles.correct : {}}>
//                 <input type="radio" name={`question-${index}`} value="false" disabled />
//                 False
//               </label>
//             </div>
//           ) : question.type === 'single' ? (
//             <ul style={styles.noBullets}>
//               {question.options.map((option, optIndex) => (
//                 <li key={optIndex} style={option.isCorrect ? styles.correct : {}}>
//                   <label>
//                     <input type="radio" name={`question-${index}`} value={option.text} disabled />
//                     {String.fromCharCode(97 + optIndex)}. {option.text}
//                   </label>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <ul style={styles.noBullets}>
//               {question.options.map((option, optIndex) => (
//                 <li key={optIndex} style={option.isCorrect ? styles.correct : {}}>
//                   <label>
//                     <input type="checkbox" name={`question-${index}`} value={option.text} disabled />
//                     {String.fromCharCode(97 + optIndex)}. {option.text}
//                   </label>
//                 </li>
//               ))}
//             </ul>
//           )}
//           <div style={styles.iconContainer}>
//             <FontAwesomeIcon
//               icon={faEdit}
//               style={styles.icon}
//               onClick={() => handleEditClick(index)}
//             />
//             <FontAwesomeIcon
//               icon={faTrash}
//               style={styles.icon}
//               onClick={() => onDeleteQuestion(index)}
//             />
//           </div>
//         </div>
//       ))}

//       {editingIndex !== null && (
//         <div style={styles.editForm}>
//           <h3>Edit Question</h3>
//           <label>
//             Question Text:
//             <input
//               type="text"
//               name="text"
//               value={editedQuestion.text}
//               onChange={handleInputChange}
//               style={styles.input}
//             />
//           </label>
//           {editedQuestion.type !== 'truefalse' && (
//             <div>
//               {editedQuestion.options.map((option, optIndex) => (
//                 <label key={optIndex}>
//                   Option {String.fromCharCode(97 + optIndex)}:
//                   <input
//                     type="text"
//                     value={option.text}
//                     onChange={(e) => handleOptionChange(optIndex, e.target.value)}
//                     style={styles.input}
//                   />
//                   <label>
//                     Correct:
//                     <input
//                       type="checkbox"
//                       checked={!!option.isCorrect}
//                       onChange={(e) => {
//                         setEditedQuestion((prev) => {
//                           const options = [...prev.options];
//                           options[optIndex].isCorrect = e.target.checked;
//                           return { ...prev, options };
//                         });
//                       }}
//                     />
//                   </label>
//                 </label>
//               ))}
//             </div>
//           )}
//           {editedQuestion.type === 'truefalse' && (
//             <label>
//               Correct Answer:
//               <select
//                 name="correctAnswer"
//                 value={editedQuestion.correctAnswer}
//                 onChange={handleInputChange}
//                 style={styles.input}
//               >
//                 <option value="true">True</option>
//                 <option value="false">False</option>
//               </select>
//             </label>
//           )}
//           <button onClick={handleSaveClick} style={styles.saveButton}>Save</button>
//         </div>
//       )}
//       {/* <SavePaperButton paper={paper} />  */}
//     </div>
//     </div>
//   );
// };

// PaperPreview.propTypes = {
//   paper: PropTypes.object.isRequired,
//   onEditQuestion: PropTypes.func.isRequired,
//   onDeleteQuestion: PropTypes.func.isRequired,
//   onSaveQuestion: PropTypes.func.isRequired,
//   template: PropTypes.string,
//   backgroundColor: PropTypes.string,
// };

// const styles = {
//   paperPreview: {
//     padding: '20px',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
    
//   },
//   question: {
//     marginBottom: '20px',
//     padding: '15px',
//     margin: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent background for readability
//   },
//   questionType: {
//     fontSize: '0.8em',
//     color: '#888',
//   },
//   iconContainer: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     marginTop: '10px',
//   },
//   icon: {
//     cursor: 'pointer',
//     marginLeft: '10px',
//   },
//   noBullets: {
//     listStyleType: 'none',
//     padding: '5px',
//   },
//   correct: {
//     fontWeight: 'bold',
//     color: 'green',
//   },
//   editForm: {
//     marginBottom: '20px',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//   },
//   input: {
//     display: 'block',
//     margin: '10px 0',
//   },
//   saveButton: {
//     marginTop: '10px',
//     padding: '10px 20px',
//   },
// };

// export default PaperPreview;


import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import 'bootstrap/dist/css/bootstrap.min.css';
// import DownloadButtons from '../Download/DownloadButtons'; // Assuming you have this component
import SavePaperButton from './Header/SavePaperButton'; // Import the new component
import { useGlobalState } from '../Constants/GlobalStateProvider';
import { API_URL } from '../Constants/Url';

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
