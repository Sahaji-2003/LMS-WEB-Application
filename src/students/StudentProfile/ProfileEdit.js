import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useGlobalState } from '../../components/Constants/GlobalStateProvider';
import { API_URL } from '../../components/Constants/Url';
function ProfileEdit({ profile }) {
  const { getGlobal } = useGlobalState();
  const globalState = getGlobal();
  
  const [formData, setFormData] = useState({
    educator_name: '',
    institute: '',
    role: '',
    educator_phone: '',
    user_id: '',
  });

  useEffect(() => {
    setFormData({
      educator_name: profile.educator_name || '',
      institute: profile.institute || '',
      role: profile.role || '',
      educator_phone: profile.educator_phone || '',
      user_id: profile.user_id || '',
    });
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${API_URL}/api/auth/educator/${globalState}`, formData);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('There was an error updating the profile!', error);
      alert('There was an error updating the profile!');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="profileImage" className="col-md-4 col-lg-3 col-form-label">
            Profile Image
          </label>
          <div className="col-md-8 col-lg-9">
            <img src="assets/img/man-face.jpg" alt="Profile" />
            <div className="pt-2">
              <a href="#" className="btn btn-primary btn-sm" title="Upload new profile image">
                <i className="bi bi-upload" />
              </a>
              <a href="#" className="btn btn-danger btn-sm" title="Remove my profile image">
                <i className="bi bi-trash" />
              </a>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="educator_name" className="col-md-4 col-lg-3 col-form-label">
            Full Name
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="educator_name"
              type="text"
              className="form-control"
              id="educator_name"
              value={formData.educator_name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="institute" className="col-md-4 col-lg-3 col-form-label">
            Institute
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="institute"
              type="text"
              className="form-control"
              id="institute"
              value={formData.institute}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="role" className="col-md-4 col-lg-3 col-form-label">
            Role
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="role"
              type="text"
              className="form-control"
              id="role"
              value={formData.role}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="educator_phone" className="col-md-4 col-lg-3 col-form-label">
            Phone
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="educator_phone"
              type="number"
              className="form-control"
              id="educator_phone"
              value={formData.educator_phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="user_id" className="col-md-4 col-lg-3 col-form-label">
            Email
          </label>
          <div className="col-md-8 col-lg-9">
            <input
              name="user_id"
              type="email"
              className="form-control"
              id="user_id"
              value={formData.user_id}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileEdit;
