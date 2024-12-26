import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import the left arrow icon
import './decide.css';

const Decide = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  const handleSubmit = () => {
    if (selectedRole === 'admin') {
      navigate('/adminlogin');
    } else if (selectedRole === 'user') {
      navigate('/userlogin');
    } else {
      alert('Please select a role to continue.');
    }
  };

  const handleGoBack = () => {
    navigate('/'); // Navigate back to home page
  };

  return (
    <div className="decide-page">
      {/* Go Back Icon */}
      <div className="go-back-icon" onClick={handleGoBack}>
        <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#7469B6', fontSize: '30px', cursor: 'pointer' }} />
      </div>

      <div className="decide-image-container">
        <img src="decide.png" alt="Team Collaboration" className="decide-center-image" />
      </div>
      <h1 className="decide-heading">EXPLORE US AS</h1>
      <div className="decide-role-selection">
        <label className="decide-role-option">
          <input
            type="checkbox"
            checked={selectedRole === 'admin'}
            onChange={() => handleRoleChange('admin')}
          />
          <div className='decider'>ADMIN</div>
        </label>
        <label className="decide-role-option">
          <input
            type="checkbox"
            checked={selectedRole === 'user'}
            onChange={() => handleRoleChange('user')}
          />
          <div className='decider'>USER</div>
        </label>
      </div>
      <button className="decide-submit-button" onClick={handleSubmit}>Log In</button>
    </div>
  );
};

export default Decide;
