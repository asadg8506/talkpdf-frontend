import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

export default function LoginSignupPage() {
  const [showForm, setShowForm] = useState(false); // initially sirf welcome dikhana hai
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={pageStyle}>
      {!showForm ? (
        // -------- WELCOME SCREEN --------
        <div style={welcomeStyle}>
          <h1 style={{ color: '#00ff15', fontSize: '2.5rem' }}>Welcome to TalkPDF</h1>
          <p style={{ color: 'white', fontSize: '1.2rem', marginBottom: '30px' }}>
            Your AI-powered PDF assistant
          </p>
          <div>
            <button
              style={buttonStyle}
              onClick={() => { setIsLogin(true); setShowForm(true); }}
            >
              Login
            </button>
            <button
              style={{ ...buttonStyle, marginLeft: '20px', backgroundColor: '#00ff15', color: '#000' }}
              onClick={() => { setIsLogin(false); setShowForm(true); }}
            >
              Signup
            </button>
          </div>
        </div>
      ) : (
        // -------- LOGIN OR SIGNUP FORM --------
        <div>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <button onClick={() => setIsLogin(true)} style={tabButtonStyle}>
              Login
            </button>
            <button onClick={() => setIsLogin(false)} style={tabButtonStyle}>
              Signup
            </button>
          </div>
          {isLogin ? <Login /> : <Signup />}
        </div>
      )}
    </div>
  );
}

// ------------------ Styles ------------------ //
const pageStyle = {
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#011616ff',
  textAlign: 'center'
};

const welcomeStyle = {
  padding: '50px',
  borderRadius: '20px',
  border: '2px solid #00ff15',
  boxShadow: '0 0 15px rgba(0, 255, 100, 0.8)',
  backgroundColor: '#1c1c1c',
};

const buttonStyle = {
  padding: '10px 25px',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#007bff',
  color: 'white',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '1rem',
};

const tabButtonStyle = {
  padding: '10px 20px',
  margin: '0 10px',
  borderRadius: '8px',
  border: '1px solid #00ff15',
  backgroundColor: '#2b2b2b',
  color: '#00ff15',
  cursor: 'pointer'
};
