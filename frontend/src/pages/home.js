import React, { useState, useEffect } from 'react';
import './home.css';
import banner from '../Images/banner.jpg'
import cablecar from '../Images/cablecar.jpg'
import universal from '../Images/universal.jpg'
import safari from '../Images/nightsafari.jpg'

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '--',
    hours: '--',
    minutes: '--',
    seconds: '--'
  });

  const singaporeAttractions = [
    {
      name: 'Cable Car',
      image: cablecar,
      description: 'Enjoy panoramic views of Singapore\'s skyline and harbor as you glide between Mount Faber and Sentosa Island in our cable cars.',
      price: 'From $21'
    },
    {
      name: 'Universal Studios',
      image: universal,
      description: 'Experience thrilling rides and entertainment at Southeast Asia\'s only Universal Studios theme park.',
      price: 'From $78'
    },
    {
      name: 'Night Safari',
      image: safari,
      description: 'Embark on an unforgettable nocturnal adventure through diverse geographical zones and observe over 2,500 animals.',
      price: 'From $49'
    }
  ];

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
    <div className="home">
      
      {/* Countdown Card - Top Right */}
      <div className="countdown-card">
        <div className="countdown-header">
          <h3>Launching Soon!</h3>
          <p>Get ready for an amazing experience</p>
        </div>
        <div className="countdown-timer">
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.days}</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.hours}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.minutes}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.seconds}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>
      </div>
      
      {/* Hero Banner with Search Overlay */}
      <section className="hero-banner" id="home">
        <div className="banner-container">
          <img src={banner} alt="Discover Paradise" className="banner-image" />
          <div className="banner-content">
            <h1>Your Dream Vacation Awaits Right Here</h1>
          </div>
        </div>
        
        {/* Search Section - Half in banner, half below */}
        <div className="search-section-overlay">
          <div className="search-container">
            <h2>Find Your Perfect Trip</h2>
            <div className="search-form">
              <div className="form-group">
                <label>Destination</label>
                <input type="text" placeholder="Where do you want to go?" />
              </div>
              <div className="form-group">
                <label>Check-in</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Check-out</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Travelers</label>
                <select>
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>Family (2+2)</option>
                  <option>Group (5+)</option>
                </select>
              </div>
              <button className="search-btn">Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* Singapore Attractions Section */}
      <section className="attractions-section">
        <div className="container">
          <h2 className="section-title">Singapore Attractions</h2>
          <p className="section-subtitle">Discover the best experiences in the Lion City</p>
          
          <div className="attractions-grid">
            {singaporeAttractions.map((attraction, index) => (
              <div key={index} className="attraction-card">
                <div className="attraction-image">
                  <img src={attraction.image} alt={attraction.name} />
                  <div className="attraction-price">{attraction.price}</div>
                </div>
                <div className="attraction-content">
                  <h3>{attraction.name}</h3>
                  <p>{attraction.description}</p>
                  <button className="attraction-btn">Explore Attraction</button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="view-all-container">
            <button className="view-all-btn">View All Attractions</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;