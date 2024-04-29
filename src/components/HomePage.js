import React, { useState } from 'react';
import './HomePage.css'; // Import the CSS file for styling
import logo from './assets/assets/logo.jpg';
// import logo from './assets/assets/logo.jpg'; // Import the image file
import backgroundImage from './assets/assets/animal.jpg'; // Import the background image file
import articleImage1 from './assets/assets/article1.jpeg'; // Import the article image file
import article2 from './assets/assets/article2.jpg';
import greenImage1 from './assets/assets/photo1.jpg'; // Import the greenery image files
import greenImage2 from './assets/assets/photo2.jpg';
import greenImage3 from './assets/assets/photo3.jpg';
import greenImage4 from './assets/assets/photo4.jpg'; // New greenery image
import greenImage5 from './assets/assets/photo5.jpg'; // New greenery image
import greenImage6 from './assets/assets/photo6.jpg'; // New greenery image

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const greeneryImages = [greenImage1, greenImage2, greenImage3, greenImage4, greenImage5, greenImage6]; // Updated array of images

  const facts = [
    "A coral reef can support more species per square meter than any other type of habitat.",
    "Rainforests get at least 250cm of rain per year.",
    "The Amazon Rainforest produces around 20% of the world's oxygen supply.",
    "One mature tree can absorb up to 48 pounds of carbon dioxide in a year.",
    "A single teaspoon of soil contains more organisms than there are people on Earth.",
    "The Giant Sequoia tree is the largest living organism by volume on the planet."
  ];

  const handlePreviousFact = () => {
    setCurrentFactIndex((prevIndex) => (prevIndex - 1 + facts.length) % facts.length);
  };

  const handleNextFact = () => {
    setCurrentFactIndex((prevIndex) => (prevIndex + 1) % facts.length);
  };

  return (
    <div className="HomePage">
      {/* Navigation Bar */}
      <div className="navbar">
        {/* Logo */}
        {/* <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <div className="logo-text">Life on Land</div>
        </div> */}

        {/* Navigation Items */}
        {/* <div className="nav-items">
          <div className="nav-item">Convoy's Game of Life</div>
          <div className="nav-item">Community</div>
          <div className="nav-item">Educational</div>
          <div className="nav-item sign-in">Sign In</div>
        </div> */}
      </div>

      {/* Content */}
      <div className="content">
        {/* Image */}
        <img src={backgroundImage} alt="Background" className="background-image" />
      
        {/* Block letters */}
        <div className="block-letters">
          <div className="block-letter">RESTORE BIODIVERSITY.</div>
          <div className="block-letter">REDUCE DEFORESTATION.</div>
        </div>

        {/* SDG Implementation */}
        <p className="sdg-implementation">
          Amidst the myriad wonders of the world, the lush greenery that blankets our planet stands as its greatest treasure, a testament to nature's boundless beauty and resilience.
        </p>

        {/* Gallery */}
        <p className="bold-text">Nature's Tapestry</p>
        <div className="gallery">
          <div className="gallery-row">
            {greeneryImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Greenery ${index + 1}`}
                className="small-greenery-image"
              />
            ))}
          </div>
        </div>

        {/* Featured Reads */}
        <div>
          <p className="bold-text">Featured Reads</p>
          <div className="articles">
            {/* Article Block 1 */}
            <div className="article-block">
              <div className="article-image">
                <img src={articleImage1} alt="Article Image" />
              </div>
              <div className="article-description">
                <p>Forest Conservation & Environmental Awareness</p>
                <p>Read more: <a href="https://www.sciencedirect.com/science/article/pii/S1878522015000788">Link</a></p>
              </div>
            </div>
            {/* Article Block 2 */}
            <div className="article-block">
              <div className="article-image">
                <img src={article2} alt="Article Image" />
              </div>
              <div className="article-description">
                <p>Save Today Survive Tomorrow</p>
                <p>Read more: <a href="https://d19k0hz679a7ts.cloudfront.net/value_added_material/2fcd9-conserving-the-forests-save-today-survive-tomorrow.pdf">Link</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* Facts Section */}
        <div className="facts-section">
          <div className="facts-container">
            <div className="facts-arrow" onClick={handlePreviousFact}>
              &lsaquo;
            </div>
            <div className="facts-text">FACTS</div>
            <div className="facts-arrow" onClick={handleNextFact}>
              &rsaquo;
            </div>
          </div>
          <p className="fact">{facts[currentFactIndex]}</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
