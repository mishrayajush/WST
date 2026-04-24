import React, { useState } from 'react';

const LoginPage = ({ onLoginSuccess }) => {
  const handleLoginSuccess = () => {
    if (onLoginSuccess) onLoginSuccess();
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const Login = (e) => {
    e.preventDefault();

    let valid = true;

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email");
      valid = false;
    } else {
      setEmailError("");
    }

    // Password validation
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    } else {
      setPasswordError("");
    }

    // If all valid
    if (valid) {
      console.log("Login Details:", { email, password });
      alert("Login Successful");
      handleLoginSuccess();
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={Login} style={styles.form}>
        <h2>Login</h2>

        <div style={styles.inputGroup}>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {emailError && <span style={styles.error}>{emailError}</span>}
        </div>

        <div style={styles.inputGroup}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          {passwordError && <span style={styles.error}>{passwordError}</span>}
        </div>

        <button type="submit" style={styles.button}>Log In</button>

      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px'
  },
  form: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
    width: '300px'
  },
  inputGroup: {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer'
  },
  error: {
    color: 'red',
    fontSize: '12px'
  }
};

export default LoginPage;