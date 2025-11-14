import React from 'react';

export default function Signup() {
  return (
    <div style={pageStyle}>
      <div className="signup-container" style={containerStyle}>
        <h1 style={{ ...titleStyle, color: '#00ff15' }}>Signup</h1>

        <form className="signup-form" style={formStyle}>
          {/* First Name */}
          <label htmlFor="fname" style={{ ...labelStyle, color: '#00ff15' }}>First Name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Enter your first name"
            style={inputStyle}
          />

          {/* Last Name */}
          <label htmlFor="lname" style={{ ...labelStyle, color: '#00ff15' }}>Last Name:</label>
          <input
            type="text"
            id="lname"
            name="lname"
            placeholder="Enter your last name"
            style={inputStyle}
          />

          {/* Email */}
          <label htmlFor="email" style={{ ...labelStyle, color: '#00ff15' }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            style={inputStyle}
          />

          {/* Password */}
          <label htmlFor="password" style={{ ...labelStyle, color: '#00ff15' }}>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            style={inputStyle}
          />

          {/* Signup Button */}
          <button type="submit" style={buttonStyle}>Signup</button>
        </form>
      </div>
    </div>
  );
}

// ---------------- Inline Styles ---------------- //

const pageStyle = {
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#011616ff'
};

const containerStyle = {
  width: '450px',
  padding: '40px',
  border: '1px solid #00ff15ff',
  borderRadius: '50px',
  boxShadow: '0 0 15px rgba(0, 110, 255, 1)',
  textAlign: 'center',
  backgroundColor: '#414142ff'
};

const titleStyle = {
  marginBottom: '30px'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px'
};

const labelStyle = {
  textAlign: 'left',
  fontWeight: 'bold'
};

const inputStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #00ff15',
  color: '#ffffff',
  backgroundColor: '#2b2b2b'
};

const buttonStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#007bff',
  color: 'white',
  fontWeight: 'bold',
  cursor: 'pointer'
};
