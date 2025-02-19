import React from "react";
import "../index.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="navbar">
        <button className="login-btn">Login</button>
      </header>
      <main className="main-content">
        <h1 className="site-title">YOULIVEVENT</h1>
        <a href="/discover" className="discover-btn">Découvrir</a>
      </main>
      <footer className="footer">
        <section className="description">
          <p>Découvrez YOULIVEVENT, une plateforme interactive révolutionnaire pour vos événements...</p>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Votre nom" required />
            <input type="email" placeholder="Votre email" required />
            <textarea placeholder="Votre message" required></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </section>
      </footer>
      <nav className="mobile-nav">
        <a href="#">Accueil</a>
        <a href="#">Événements</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  );
};

export default Home;