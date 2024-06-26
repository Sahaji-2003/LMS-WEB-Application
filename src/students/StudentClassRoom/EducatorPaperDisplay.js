import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../components/Constants/Url';
import { Link } from 'react-router-dom';

const EducatorPapersDisplay = ({ user_id, onBack }) => {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/papers/assigned/${user_id}/papers`);
        setPapers(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching papers');
        setLoading(false);
      }
    };

    fetchPapers();
  }, [user_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
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
    <div>
      <button onClick={onBack}>Back</button>
      <h2>Papers Assigned By The Educator</h2>
      <div style={containerStyle}>
        {papers.map((paper) => (
          <div 
            key={paper._id} 
            style={cardStyle} 
            onMouseEnter={(e) => e.currentTarget.style.transform = cardHoverStyle.transform}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
          >
            <Link to={`/view-paper/${paper._id}`}> 
            <div style={headerStyle}>
              <h3 style={headerTextStyle}>{paper.title}</h3>
            </div>
            <div style={bodyStyle}>
              <p style={bodyTextStyle}>
                <strong style={bodyStrongTextStyle}>Description:</strong> {paper.description}
              </p>
              <p style={bodyTextStyle}>
                <strong style={bodyStrongTextStyle}>Duration:</strong> {paper.duration} minutes
              </p>
              <p style={bodyTextStyle}>
                <strong style={bodyStrongTextStyle}>Marks:</strong> {paper.marks}
              </p>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducatorPapersDisplay;
