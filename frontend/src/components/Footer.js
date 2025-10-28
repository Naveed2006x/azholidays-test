import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSocialClick = (platform) => {
        let url = '';

        if (platform === 'facebook') {
            url = 'https://facebook.com/AzHdolidaysPteLtd/';
        } else if (platform === 'instagram') {
            url = 'https://instagram.com/azholidays_sg/';
        } else if (platform === 'twitter') {
            url = 'https://twitter.com/AzHolidaysPteLtd/';
        }

        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    const handleServiceClick = (service) => {
        console.log(`Navigate to ${service} page`);
    };

    const handlePolicyClick = (policy) => {
        console.log(`Navigate to ${policy} page`);
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Az Holidays</h3>
                        <p>Making your travel dreams come true since 2009. Experience the world with us and create unforgettable memories.</p>
                        <div className="social-links">
                            <button
                                onClick={() => handleSocialClick('facebook')}
                                aria-label="Facebook"
                                className="social-button"
                            >
                                <FacebookIcon />
                            </button>
                            <button
                                onClick={() => handleSocialClick('instagram')}
                                aria-label="Instagram"
                                className="social-button"
                            >
                                <InstagramIcon />
                            </button>
                            <button
                                onClick={() => handleSocialClick('twitter')}
                                aria-label="Twitter"
                                className="social-button"
                            >
                                <TwitterIcon />
                            </button>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <button
                            onClick={() => scrollToSection('home')}
                            className="footer-link-button"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('destinations')}
                            className="footer-link-button"
                        >
                            Destinations
                        </button>
                        <button
                            onClick={() => handleServiceClick('Packages')}
                            className="footer-link-button"
                        >
                            Packages
                        </button>
                        <button
                            onClick={() => handleServiceClick('About Us')}
                            className="footer-link-button"
                        >
                            About Us
                        </button>
                    </div>

                    <div className="footer-section">
                        <h4>Services</h4>
                        <button
                            onClick={() => handleServiceClick('Flight Booking')}
                            className="footer-link-button"
                        >
                            Flight Booking
                        </button>
                        <button
                            onClick={() => handleServiceClick('Hotel Reservations')}
                            className="footer-link-button"
                        >
                            Hotel Reservations
                        </button>
                        <button
                            onClick={() => handleServiceClick('Tour Packages')}
                            className="footer-link-button"
                        >
                            Tour Packages
                        </button>
                        <button
                            onClick={() => handleServiceClick('Travel Insurance')}
                            className="footer-link-button"
                        >
                            Travel Insurance
                        </button>
                        <button
                            onClick={() => handleServiceClick('Visa Assistance')}
                            className="footer-link-button"
                        >
                            Visa Assistance
                        </button>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <div className="contact-item">
                            <span><PhoneIcon /></span>
                            <div>
                                <p>+65 6297 0786</p>
                                <small>Office Line</small>
                            </div>
                        </div>
                        <div className="contact-item">
                            <span><WhatsAppIcon /></span>
                            <div>
                                <p>+65 9126 3786</p>
                                <small>WhatsApp</small>
                            </div>
                        </div>
                        <div className="contact-item">
                            <span><EmailIcon /></span>
                            <p>info@azholidays.com</p>
                        </div>
                        <div className="contact-item">
                            <span><LocationOnIcon /></span>
                            <p>113 Dunlop Street, Singapore 209432</p>
                        </div>
                        <div className="contact-item">
                            <span><AccessTimeIcon /></span>
                            <p>Mon - Sun: 10.30AM - 9.30PM</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Az Holidays. All rights reserved.</p>
                    <div className="footer-links">
                        <button
                            onClick={() => handlePolicyClick('Privacy Policy')}
                            className="footer-link-button"
                        >
                            Privacy Policy
                        </button>
                        <button
                            onClick={() => handlePolicyClick('Terms of Service')}
                            className="footer-link-button"
                        >
                            Terms of Service
                        </button>
                        <button
                            onClick={() => handlePolicyClick('Cookie Policy')}
                            className="footer-link-button"
                        >
                            Cookie Policy
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;