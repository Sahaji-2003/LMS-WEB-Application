// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { API_URL } from '../../components/Constants/Url';
// import { useGlobalState } from '../../components/Constants/GlobalStateProvider';

// const AddEducator = () => {
//   const [email, setEmail] = useState('');
//   const [userId, setUserId] = useState('');

//   const { getGlobal, setGlobal } = useGlobalState();
//   const globalState = getGlobal();

//   useEffect(() => {
//     if (globalState) {
//       setUserId(globalState);
//     }
//   }, [globalState]);

//   const handleAddEducator = async () => {
//     try {
//       const response = await axios.post(`${API_URL}/api/student/add-educator`, { userId, email });
//       alert('Educator added successfully');
//     } catch (error) {
//       console.error('Error adding educator:', error);
//       alert('Failed to add educator');
//     }
//   };

//   return (
//     <div>
//       <h2>Add Educator</h2>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Educator's email"
//       />
//       <button onClick={handleAddEducator}>Add Educator</button>
//     </div>
//   );
// };

// export default AddEducator;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../components/Constants/Url';
import { useGlobalState } from '../../components/Constants/GlobalStateProvider';


const AddEducator = () => {
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [educator, setEducator] = useState(null);

  const { getGlobal, setGlobal } = useGlobalState();
  const globalState = getGlobal();

  useEffect(() => {
    if (globalState) {
      setUserId(globalState);
    }
  }, [globalState]);

  const handleAddEducator = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/student/add-educator`, { userId, email });
      alert('Educator added successfully');
    } catch (error) {
      console.error('Error adding educator:', error);
      alert('Failed to add educator');
    }
  };

  const handleSearchEducator = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/auth/educator/email/${email}`);
      setEducator(response.data);
    } catch (error) {
      console.error('Error fetching educator:', error);
      alert('Educator not found');
    }
  };

  return (
    <div>
      <h2>Add Educator</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Educator's email"
      />
      <button onClick={handleSearchEducator}>Search Educator</button>
      <button onClick={handleAddEducator}>Add Educator</button>
      {educator && (
        <div>
          <h3>Educator Details</h3>
          <p>Name: {educator.educator_name}</p>
          <p>Institute: {educator.institute}</p>
        </div>
      )}
    </div>
  );
};

export default AddEducator;
