import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../actions/userActions';

const Register = () => {
  const dispatch = useDispatch();
  const history = useNavigate(); // Initialize useHistory
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({}); // State for form errors

  const { name, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here (e.g., check for empty fields)
    if (!name || !email || !password) {
      setErrors({ message: 'Please fill in all fields' });
      return;
    }

    dispatch(registerUser(formData))
      .then(() => {
        // Redirect to dashboard or any other page upon successful registration
        history.push('/dashboard');
      })
      .catch((error) => {
        // Handle registration errors
        setErrors({ message: error.message });
      });
  };

  return (
    <div>
      <h2>Register</h2>
      {errors && <div className="error">{errors.message}</div>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} onChange={handleChange} placeholder="Name" required />
        <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required />
        <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
