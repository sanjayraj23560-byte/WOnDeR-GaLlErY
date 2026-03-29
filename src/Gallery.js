import React from 'react';
import ImageCard from './ImageCard';

const images = [
  { id: 1,  title: "Misty Mountains 🍃",     description: "Golden hour over the Alpine summits.",       url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400" },
  { id: 2,  title: "Urban Geometry 🌆",       description: "Patterns in the city skyline.",              url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400" },
  { id: 3,  title: "Bengal Tiger 🐯",         description: "A rare glimpse of a tiger at dusk.",         url: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=400" },
  { id: 4,  title: "Turquoise Cove 🧜‍♂️",   description: "Crystal clear waters off the coast.",        url: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=400" },
  { id: 5,  title: "Colosseum at Dusk 🔱",   description: "Rome's iconic amphitheatre at sunset.",      url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400" },
  { id: 6,  title: "Cherry Blossoms 🌸",      description: "A tunnel of sakura in full bloom.",          url: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=400" },
  { id: 7,  title: "Night Tokyo 🌃",          description: "Shibuya crossing under neon lights.",        url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400" },
  { id: 8,  title: "Humpback Breach 🐋",      description: "A whale launching out of the Pacific.",      url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400" },
  { id: 9,  title: "Glass Canopy 🏛️",        description: "Modern atrium with intersecting beams.",     url: "https://images.unsplash.com/photo-1527030280862-64139fba04ca?w=400" },
  { id: 10, title: "Desert Dunes 🏜️",        description: "Endless golden waves of sand.",              url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400" },
  { id: 11, title: "Aurora Borealis 🌌",      description: "Northern lights dancing over the fjords.",   url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        <div className="footer-brand">
          <h3>Wonder World 🐦‍🔥</h3>
          <p>Exploring the beauty of our planet, one frame at a time. Curated photos from the world's best photographers.</p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li>🍃 Nature</li>
            <li>🌆 Cities</li>
            <li>🐯 Wildlife</li>
            <li>🌊 Oceans</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="footer-socials">
            <div className="social-btn">𝕏</div>
            <div className="social-btn">in</div>
            <div className="social-btn">▶</div>
            <div className="social-btn">📸</div>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        © 2025 <span>Wonder World Gallery</span> · Made with ❤️ by Sanjay Raj
      </div>
    </footer>
  );
}

function Gallery() {
  return (
    <>
      {/* Navbar */}
      <nav className="Navbar">
        <div className="nav-logo">
          <span className="nav-logo-icon">🐦‍🔥</span>
          <h1 className="gallery-title">Wonder World Gallery</h1>
        </div>
        <div className="nav-links">
          <button className="nav-btn active">🏠 Home</button>
          <button className="nav-btn">🍃 Nature</button>
          <button className="nav-btn">🌆 Cities</button>
          <button className="nav-btn">🐯 Wildlife</button>
        </div>
      </nav>

      {/* Hero */}
      <div className="hero">
        <h2>Discover the World ✨</h2>
        <p>A handpicked collection of stunning photographs from around the globe.</p>
      </div>

      {/* Grid */}
      <div className="gallery-wrapper">
        <div className="gallery-grid">
          {images.map((image) => (
            <ImageCard
              key={image.id}
              title={image.title}
              description={image.description}
              url={image.url}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Gallery;