// // Header.js
// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import DownloadButtons from '../Download/DownloadButtons';

// const PaperHeader = ({ onTemplatesToggle }) => {
//   return (
//     <>
//     <header style={styles.header}>
//       <h1>Paper Editor</h1>
//       <button style={styles.templatesButton} onClick={onTemplatesToggle}>Templates</button>
//     </header>
//     <body>
//         <DownloadButtons/>
//     </body>
//     </>
//   );
// };

// PaperHeader.propTypes = {
//   onTemplatesToggle: PropTypes.func.isRequired,
// };

// const styles = {
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '10px 20px',
//     backgroundColor: '#f8f8f8',
//     borderBottom: '1px solid #ccc',
//   },
//   templatesButton: {
//     padding: '10px 20px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
// };

// export default PaperHeader;

// Header.js
// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { SketchPicker } from 'react-color';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import DownloadButtons from '../Download/DownloadButtons'; // Assuming you have this component
// import SavePaperButton from './SavePaperButton';

// const PaperHeader = ({ onTemplatesToggle, onColorChange, paper}) => {
//   const [showColorPicker, setShowColorPicker] = useState(false);
//   const [backgroundColor, setBackgroundColor] = useState('#ffffff');

//   const handleColorChange = (color) => {
//     setBackgroundColor(color.hex);
//     onColorChange(color.hex);
//     setShowColorPicker(false); // Automatically close the color picker when a color is picked
//   };

//   const handleCloseColorPicker = () => {
//     setShowColorPicker(false);
//   };

//   return (
//     <>
//       <header style={styles.header}>
//         <h1>Paper Editor</h1>
//         <div style={styles.buttonContainer}>
//           <button style={styles.templatesButton} onClick={onTemplatesToggle}>Templates</button>
//           <button style={styles.editButton} onClick={() => setShowColorPicker(!showColorPicker)}>Edit</button>
//           {showColorPicker && (
//             <div style={styles.colorPickerContainer}>
//               <div style={styles.colorPicker}>
//                 <SketchPicker color={backgroundColor} onChangeComplete={handleColorChange} />
//                 <button style={styles.closeButton} onClick={handleCloseColorPicker}>Close</button>
//               </div>
//             </div>
//           )}
//           <div style={styles.buttonContainer}>
//           <DownloadButtons />
//           <SavePaperButton paper={paper}/>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// PaperHeader.propTypes = {
//   onTemplatesToggle: PropTypes.func.isRequired,
//   onColorChange: PropTypes.func.isRequired,
// };

// const styles = {
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '10px 20px',
//     backgroundColor: '#f8f8f8',
//     borderBottom: '1px solid #ccc',
//   },
//   buttonContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//   },
//   templatesButton: {
//     padding: '10px 20px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
//   editButton: {
//     padding: '10px 20px',
//     backgroundColor: '#28a745',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
//   colorPickerContainer: {
//     position: 'relative',
//   },
//   colorPicker: {
//     position: 'absolute',
//     zIndex: 2,
//     backgroundColor: '#fff',
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     right: '-10px', // Shifted right
//   },
//   closeButton: {
//     display: 'block',
//     marginTop: '10px',
//     padding: '5px 10px',
//     backgroundColor: '#dc3545',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
//   content: {
//     padding: '20px',
//   },
//   downloadButton: {
//     backgroundColor: '#17a2b8',
//     border: 'none',
//     borderRadius: '4px',
//   },
// };

// export default PaperHeader;


import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
import 'bootstrap/dist/css/bootstrap.min.css';
import DownloadButtons from '../Download/DownloadButtons'
import SavePaperButton from './SavePaperButton';

const PaperHeader = ({ onTemplatesToggle, onColorChange, onTemplateChange, paper , paperId}) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const handleColorChange = (color) => {
    setBackgroundColor(color.hex);
    onColorChange(color.hex);
    setShowColorPicker(false); // Automatically close the color picker when a color is picked
  };

  const handleCloseColorPicker = () => {
    setShowColorPicker(false);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onTemplateChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <header style={styles.header}>
        {/* <h1>Paper Editor</h1> */}
        <div style={styles.buttonContainer}>
          <button style={styles.templatesButton} onClick={onTemplatesToggle}>Templates</button>
          <button style={styles.editButton} onClick={() => setShowColorPicker(!showColorPicker)}>Edit</button>
          {showColorPicker && (
            <div style={styles.colorPickerContainer}>
              <div style={styles.colorPicker}>
                <SketchPicker color={backgroundColor} onChangeComplete={handleColorChange} />
                <button style={styles.closeButton} onClick={handleCloseColorPicker}>Close</button>
              </div>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            style={styles.fileInput}
            id="fileUpload"
            onChange={handleFileUpload}
          />
          <label htmlFor="fileUpload" style={styles.uploadButton}>Upload</label>
    
          <SavePaperButton paper={paper} paperId={paperId}/>
          <DownloadButtons />
        </div>
      </header>
    </>
  );
};

PaperHeader.propTypes = {
  onTemplatesToggle: PropTypes.func.isRequired,
  onColorChange: PropTypes.func.isRequired,
  onTemplateChange: PropTypes.func.isRequired,
  paper: PropTypes.object.isRequired,
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'right',
    padding: '10px 20px',
    backgroundColor: '#042659',
    borderBottom: '1px solid #ccc',
    borderRadius: '10px',
    paddingLeft: '220px',
    width: '100%',
    height: '80px'
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    backgroundColor: '#042659',
  },
  templatesButton: {
    padding: '10px 20px',
    backgroundColor: '#042659',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  editButton: {
    padding: '10px 20px',
    backgroundColor: '#042659',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  colorPickerContainer: {
    position: 'relative',
  },
  colorPicker: {
    position: 'absolute',
    zIndex: 2,
    backgroundColor: '#fff',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    right: '-10px', // Shifted right
  },
  closeButton: {
    display: 'block',
    marginTop: '10px',
    padding: '5px 10px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  fileInput: {
    display: 'none',
  },
  uploadButton: {
    padding: '10px 20px',
    backgroundColor: '#042659',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default PaperHeader;
