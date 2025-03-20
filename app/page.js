export default function Home() {
  return (
    <main className="content-container">
      <section className="review-section">
        <h1 className="section-title">Phase 1: Critical Review</h1>
        
        <div className="instructions-container">
          <h2>Instructions</h2>
          <div className="instruction-text">
            <p>In this activity, you'll examine how randomization is reported in scientific papers and identify what information is missing.</p>
            
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
      </section>
    </main>
  );
}