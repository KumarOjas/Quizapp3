import React from 'react';
//import './Footer.css'; // Optional: You can create a CSS file for styling

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; {new Date().getFullYear()} My Quiz App. All rights reserved.</p>
            <div style={linkContainerStyle}>
                <a href="/privacy" style={linkStyle}>Privacy Policy</a>
                <span style={{ margin: '0 10px' }}>|</span>
                <a href="/terms" style={linkStyle}>Terms of Service</a>
            </div>
        </footer>
    );
};

// Styles for the footer
const footerStyle = {
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
    padding: '20px',
    position: 'relative',
    bottom: '0',
    width: '100%',
};

const linkContainerStyle = {
    marginTop: '10px',
};

const linkStyle = {
    textDecoration: 'none',
    color: '#007bff',
};

export default Footer;
