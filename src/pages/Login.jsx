import React from 'react';

export default function Login() {
  return (
    // Outer wrapper jo full screen cover kare
    <div style={pageStyle}>
      {/* Login container centered */}
      <div className="login-container" style={containerStyle}>
        <h1 style={{ ...titleStyle, color: '#00ff15' }}> Login</h1>

        <form className="login-form" style={formStyle}>
          {/* Email */}
          <label htmlFor="email" style={{...labelStyle, color: '#00ff15' }}>Email:</label>
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

          {/* Forgot Password */}
          <p style={forgotStyle}>
            <a href="#" style={linkStyle}>Forgot Password?</a>
          </p>

          {/* Submit Button */}
          <button type="submit" style={buttonStyle}>Login</button>
        </form>
      </div>
    </div>
  );
}

// ---------------- Inline Styles ---------------- //

// Full screen page background
const pageStyle = {
  minHeight: '100vh',            // screen height full
  display: 'flex',               // flex to center container
  justifyContent: 'center',      // horizontal center
  alignItems: 'center',          // vertical center
  backgroundColor: '#011616ff'     // page background color
};

// Container for form
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
  border: '1px solid #00ff15', // green border
  color: '#ffffff',             // text color white
  backgroundColor: '#2b2b2b'
};

const forgotStyle = {
  textAlign: 'right',
  margin: '0'
};

const linkStyle = {
  fontSize: '0.9rem',
  textDecoration: 'none',
  color: '#007bff'
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
