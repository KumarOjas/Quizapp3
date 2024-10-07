import React from 'react';

const ImageLinkComponent = ({ imgSrc, imgAlt, linkUrl, linkText }) => {
    return (
        <div style={cardStyle}>
            <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                <img src={imgSrc} alt={imgAlt} style={imageStyle} />
                <p>{linkText}</p>
            </a>
        </div>
    );
};

// Styles for the image and card
const cardStyle = {
    margin: '0 10px',
    textAlign: 'center',
};

const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
};

export default ImageLinkComponent;
