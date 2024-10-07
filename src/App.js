import React, { useState } from 'react';
import ImageLinkComponent from './ImageLinkComponent';
import Navbar from './Navbar';
// Import the YellowButton component
import Footer from './Footer'; // Import the Footer component

const App = () => {
    // Create an array of 90 images with corresponding quiz links
    const images = Array.from({ length: 90 }, (_, index) => ({
        src: `https://via.placeholder.com/600x400/${((index + 1) * 111111).toString(16)}`,
        alt: `Placeholder Image ${index + 1}`,
        url: `https://quiz${index + 1}.com`, // Replace this with your actual quiz URLs
        text: `Go to Quiz ${index + 1}`
    }));

    // State for the current index of the visible images in each row
    const [visibleRows, setVisibleRows] = useState(Array(30).fill(0)); // Array to track the index of the visible images in each row

    const nextRow = (rowIndex) => {
        setVisibleRows((prevRows) =>
            prevRows.map((index, i) => (i === rowIndex && index < images.length - 3 ? index + 3 : index)) // Increase by 3 to show the next set of images
        );
    };

    const previousRow = (rowIndex) => {
        setVisibleRows((prevRows) =>
            prevRows.map((index, i) => (i === rowIndex && index > 0 ? index - 3 : index)) // Decrease by 3 to show the previous set of images
        );
    };

    const getRowImages = (rowIndex) => {
        // Calculate which images to display based on the current row index
        const startIndex = visibleRows[rowIndex]; // Get the starting index from the visibleRows state
        const rowImages = images.slice(startIndex, startIndex + 3); // Show 3 images per row
        return rowImages;
    };

    return (
        <div>
            <Navbar />
            <h1>Welcome to My Quiz App</h1>

            {/* Adding multiple rows of cards */}
            <div style={cardGridStyle}>
                {Array.from({ length: 30 }).map((_, rowIndex) => (
                    <div key={rowIndex} style={rowStyle}>
                        <button onClick={() => previousRow(rowIndex)} style={buttonStyle}>Previous</button>
                        <div style={imageContainerStyle}>
                            {getRowImages(rowIndex).map((image, index) => (
                                <ImageLinkComponent
                                    key={index}
                                    imgSrc={image.src}
                                    imgAlt={image.alt}
                                    linkUrl={image.url} // Use the quiz URL
                                    linkText={image.text}
                                />
                            ))}
                        </div>
                        <button onClick={() => nextRow(rowIndex)} style={buttonStyle}>Next</button>
                    </div>
                ))}
            </div>

            

            {/* Add the Footer component */}
            <Footer />
        </div>
    );
};

// Styles for the row container, image container, and buttons
const rowStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px 0',
};

const imageContainerStyle = {
    display: 'flex',
    overflow: 'hidden',
    width: '600px',
};

const buttonStyle = {
    margin: '0 10px',
    padding: '10px 20px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

const cardGridStyle = {
    margin: '20px auto',
    maxWidth: '1200px', // Maximum width for the grid
};

export default App;
