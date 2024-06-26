import React, { useState } from 'react';
import AddEducator from './AddEducator';
import EducatorList from './EducatorList';
// import AssignedPapers from './AssignedPapers';

const EducatorManagement = () => {
  const [selectedEducatorId, setSelectedEducatorId] = useState(null);
  const [educator, setEducator] = useState(null);

  const handleSelectEducator = (id) => {
    setSelectedEducatorId(id);
  };

  return (
    <div>
      {!selectedEducatorId ? (
        <AddEducator setEducator={setEducator} />
      ) : (
        // 
        <h2>Mehvish</h2>
      )}
      {educator && <EducatorList educator={educator} onSelectEducator={handleSelectEducator} />}
    </div>
  );
};

export default EducatorManagement;
