// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { API_URL } from '../../components/Constants/Url';
// // import './EventListDisplay.css';  // Create this CSS file for styling

// const EventListDisplay = ({ user_id }) => {
//   const [educators, setEducators] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEducators = async () => {
//       try {
//         const response = await axios.get(`${API_URL}/api/student/${user_id}/educators`);
//         setEducators(response.data.educators);
//         setLoading(false);
//       } catch (error) {
//         setError('Error fetching educators');
//         setLoading(false);
//       }
//     };

//     fetchEducators();
//   }, [user_id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="educator-list">
//       {educators.map((educator) => (
//         <div key={educator._id} className="educator-card">
//           <h3>{educator.educator_name}</h3>
//           <p>Institute: {educator.institute}</p>
//           <p>Phone: {educator.educator_phone}</p>
//           <p>Email: {educator.username}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EventListDisplay;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../components/Constants/Url';
import EducatorPapersDisplay from './EducatorPaperDisplay';

const EventListDisplay = ({ user_id }) => {
  const [educators, setEducators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEducator, setSelectedEducator] = useState(null);

  useEffect(() => {
    const fetchEducators = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/student/${user_id}/educators`);
        setEducators(response.data.educators);
        setLoading(false);
      } catch (error) {
        setError('Error fetching educators');
        setLoading(false);
      }
    };

    fetchEducators();
  }, [user_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (selectedEducator) {
    return (
      <EducatorPapersDisplay 
        user_id={selectedEducator.user_id}
        onBack={() => setSelectedEducator(null)} 
      />
    );
  }

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    padding: '20px',
    justifyContent: 'center',
  };

  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
    backgroundColor: '#fff',
    overflow: 'hidden',
    cursor: 'pointer',
  };

  const cardHoverStyle = {
    transform: 'translateY(-10px)',
  };

  const headerStyle = {
    backgroundColor: '#f5f5f5',
    padding: '16px',
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
  };

  const headerTextStyle = {
    margin: 0,
    color: '#333',
  };

  const bodyStyle = {
    padding: '16px',
  };

  const bodyTextStyle = {
    margin: '8px 0',
    color: '#555',
  };

  const bodyStrongTextStyle = {
    color: '#333',
  };

  return (
    <div style={containerStyle} >
      {educators.map((educator) => (
        <div
          key={educator._id} 
          style={cardStyle} 
          onMouseEnter={(e) => e.currentTarget.style.transform = cardHoverStyle.transform}
          onClick={() => setSelectedEducator(educator)}
        >
          <div style={headerStyle}>
            <h3 style={headerTextStyle}>{educator.educator_name}</h3>
          </div>
          <div style={bodyStyle}>
            <p style={bodyTextStyle}>
              <strong style={bodyStrongTextStyle}>Institute:</strong> {educator.institute}
            </p>
            <p style={bodyTextStyle}>
              <strong style={bodyStrongTextStyle}>Phone:</strong> {educator.educator_phone}
            </p>
            <p style={bodyTextStyle}>
              <strong style={bodyStrongTextStyle}>Email:</strong> {educator.user_id}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventListDisplay;
