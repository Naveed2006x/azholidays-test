import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: '--',
    hours: '--',
    minutes: '--',
    seconds: '--'
  });

  useEffect(() => {
    // Set launch date to November 10, 2025
    const launchDate = new Date(2025, 10, 10, 0, 0, 0).getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeLeft = launchDate - now;
      
      if (timeLeft < 0) {
        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00'
        });
        return;
      }
      
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      
      setTimeLeft({
        days: days < 10 ? '0' + days : days.toString(),
        hours: hours < 10 ? '0' + hours : hours.toString(),
        minutes: minutes < 10 ? '0' + minutes : minutes.toString(),
        seconds: seconds < 10 ? '0' + seconds : seconds.toString()
      });
    };
    
    // Update the countdown every second
    const interval = setInterval(updateCountdown, 1000);
    
    // Initial call
    updateCountdown();
    
    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          {/* Add your logo here - make sure logo.png is in public folder */}
          <img src="/logo.png" alt="AZ Holidays Logo" className="logo" />
        </div>
        
        <h1>AZ Holidays Pte Ltd</h1>
        <p className="address">113 Dunlop Street<br />Singapore 209432</p>
        
        <h2>Our Website is Under Construction</h2>
        <p>We're working hard to bring you an amazing travel experience. Stay tuned for our launch!</p>
        
        <div className="countdown">
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.days}</div>
            <div className="countdown-label">Days</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.hours}</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.minutes}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.seconds}</div>
            <div className="countdown-label">Seconds</div>
          </div>
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