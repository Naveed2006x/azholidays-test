import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AZ Holidays Pte Ltd</h1>
        <p className="address">113 Dunlop Street<br />Singapore 209432</p>
        
        <div className="welcome-message">
          <h2>🚀 Test Deployment Successful!</h2>
          <p>Auto-deployment from GitHub to cPanel is working!</p>
        </div>

        <div className="contact-info">
          <p>For inquiries, please contact us:</p>
          <p>Email: info@azholidays.com</p>
          <p>Phone: +65 9126 3786</p>
        </div>
      </header>
    </div>
  );
}

export default App;