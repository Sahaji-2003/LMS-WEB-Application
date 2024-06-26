import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PaperKeyPopup = ({ onClose, onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(inputValue);
  };

  return (
    <div style={styles.popupOverlay}>
      <div style={styles.popup}>
        <h3>Enter Classroom Code</h3>
        <input type="text" value={inputValue} onChange={handleChange} style={styles.input} />
        <button onClick={handleSubmit} style={styles.button}>Submit</button>
        <button onClick={onClose} style={styles.button}>Cancel</button>
      </div>
    </div>
  );
};

PaperKeyPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const styles = {
  popupOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '300px',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
  },
  button: {
    padding: '10px 20px',
    margin: '10px',
  },
};

export default PaperKeyPopup;
