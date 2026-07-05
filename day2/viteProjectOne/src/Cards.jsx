function Cards() {
  return (
    <section className="cards-section">
      <h2>Popular Courses</h2>

      <div className="cards-container">
        <div className="card">
          <h3>React JS</h3>
          <p>Learn modern frontend development using React.</p>
          <button>Learn More</button>
        </div>

        <div className="card">
          <h3>Python</h3>
          <p>Master Python programming from basics to advanced.</p>
          <button>Learn More</button>
        </div>

        <div className="card">
          <h3>Java</h3>
          <p>Build enterprise applications using Java.</p>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Cards;