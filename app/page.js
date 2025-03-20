'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedPaper, setSelectedPaper] = useState(null);

  // Function to handle paper selection
  const handlePaperSelect = (paperTitle) => {
    setSelectedPaper(paperTitle);
  };

  return (
    <main className="content-container">
      <section className="review-section">
        <h1 className="section-title">Phase 1: Critical Review</h1>
        
        <div className="instructions-container">
          <h2>Instructions</h2>
          <div className="instruction-text">
            <p>In this activity, you&apos;ll examine how randomization is reported in scientific papers and identify what information is missing.</p>
            
            <p>First, select one of the papers below. Then review its methods section and identify questions you have about how randomization was implemented.</p>
            
            <p>Consider the following as you review:</p>
            
            <ul className="review-points">
              <li>Was randomization actually performed?</li>
              <li>What information is missing about the randomization procedure?</li>
              <li>What additional details would you need to replicate this study?</li>
              <li>Are there aspects of the study that should have been randomized but might not have been?</li>
            </ul>
          </div>
        </div>

        <h2 className="paper-selection-heading">Select a paper to review:</h2>
        
        <div className="paper-selection">
          <button 
            className={`paper-option ${selectedPaper === 'NMDA' ? 'selected' : ''}`}
            onClick={() => handlePaperSelect('NMDA')}
          >
            <h3>Effects of NMDA receptor antagonist on spatial memory in mice</h3>
            <p className="paper-citation">Jensen et al., Neuropharmacology, 2023</p>
          </button>

          <button 
            className={`paper-option ${selectedPaper === 'Environmental' ? 'selected' : ''}`}
            onClick={() => handlePaperSelect('Environmental')}
          >
            <h3>Environmental enrichment effects on neuronal cell viability</h3>
            <p className="paper-citation">Rodriguez et al., J Neurosci Methods, 2022</p>
          </button>

          <button 
            className={`paper-option ${selectedPaper === 'Family' ? 'selected' : ''}`}
            onClick={() => handlePaperSelect('Family')}
          >
            <h3>Family environment effects on zebrafish brain development</h3>
            <p className="paper-citation">Based on Antunes et al., Scientific Reports, 2021</p>
          </button>
        </div>

        {selectedPaper && (
          <div className="selected-paper-info">
            <h3>You selected: {selectedPaper}</h3>
            <p>The paper&apos;s methods section would be displayed here.</p>
          </div>
        )}
      </section>
    </main>
  );
}