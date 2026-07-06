import "./App.css";

import profile from "./assets/profile.jpeg";
import movie from "./assets/movie.jpeg";

import product1 from "./assets/product1.jpeg";
import product2 from "./assets/product2.jpeg";
import product3 from "./assets/product3.jpeg";
import product4 from "./assets/product4.jpeg";

import member1 from "./assets/member1.jpeg";
import member2 from "./assets/member2.jpeg";
import member3 from "./assets/member3.jpeg";
import member4 from "./assets/member4.jpeg";

function App() {
  const teamMembers = [
    {
      id: 1,
      name: "Iron Man",
      role: "The Genius Billionaire",
      image: member1,
    },
    {
      id: 2,
      name: "Captain America",
      role: "The First Avenger",
      image: member2,
    },
    {
      id: 3,
      name: "Thor",
      role: "The God of Thunder",
      image: member3,
    },
    {
      id: 4,
      name: "Hulk",
      role: "The Strongest Avenger",
      image: member4,
    },
  ];

  const products = [product1, product2, product3, product4];

  return (
    <div>

      {/* Task 1 */}
      <section>
        <h2>Profile Card</h2>

        <div className="profile-card">
          <img src={profile} alt="profile" />
          <h3>Prajan Gowtham</h3>
          <p>React Developer</p>
        </div>
      </section>

      {/* Task 2 */}
      <section>
        <h2>Hero Banner</h2>

        <div className="hero-banner">
          <img src="/hero.jpeg" alt="hero" />

          <div className="hero-content">
            <h1>Welcome to React</h1>
            <button>Get Started</button>
          </div>
        </div>
      </section>

      {/* Task 3 */}
      <section>
        <h2>Movie Card</h2>

        <div className="movie-card">
          <img src={movie} alt="movie" />

          <div className="movie-content">
            <h3>Avengers</h3>
            <p>Hero : RDJ</p>
            <p>Collection : ₹1600 Cr</p>
          </div>
        </div>
      </section>

      {/* Task 4 */}
      <section>
        <h2>Product Gallery</h2>

        <div className="gallery">
          {products.map((item, index) => (
            <img key={index} src={item} alt="product" />
          ))}
        </div>
      </section>

      {/* Task 5 */}
      <section>
        <h2>Team Members</h2>

        <div className="team-container">
          {teamMembers.map((member) => (
            <div className="team-card" key={member.id}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default App;