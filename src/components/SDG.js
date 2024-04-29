//SDG.js
import React from 'react';
import './SDG.css';
const ExcelDisplay = () => {
  return (
    <div>
      <div className="excel-display-container">
        <div className="excel-info-container">
          
          <h2>SDG 15 - Life on Land</h2>
          <h2>Indicator 15.1.1</h2>
          <p>
By 2030, ensure the conservation, restoration and sustainable use of terrestrial and inland freshwater ecosystems and their services, in particular forests, wetlands, mountains and drylands, in line with obligations under international agreements

15.1.1
Forest area as a proportion of total land area</p>
<h2>Target 15.4</h2>
          <p>
            By 2030, ensure the conservation of mountain ecosystems, including their biodiversity, in order to enhance their capacity to provide benefits that are essential for sustainable development.
          </p>

          <h2>Indicator 15.4.2 – (a) Mountain Green Cover Index; and (b) Proportion of Degraded Mountain Area</h2>
          <p>
            The Mountain Green Cover Index (MGCI) (Indicator 15.4.2.a) measures changes in the area of green vegetation in mountain areas (forest, shrubs and pasture land, and cropland), while the Proportion of degraded mountain land (Indicator 15.4.2.b) monitors the extent of degraded mountain land as a result of land cover change of a given country and for given reporting year. This information will help identify the status of conservation of mountain environments in order to measure progress towards SDG Target 15.4.
          </p>
                    <hr />
        </div>
        <div className="video-container">
          <video controls className="video-element">
            <source src="https://www.fao.org/videos/sdgindicatorslibraries/default-video-library/video-sdg-15.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div id="tableau-container">
        <a href="https://tableau.apps.fao.org/views/SDG_15_4_2_16873668416220/Story1" target="_blank" rel="noopener noreferrer" className="followup-button">View Data Visualization</a>
      </div>
    </div>
  );
};

export default ExcelDisplay;