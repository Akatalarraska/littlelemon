import React from 'react';
import restaurantImage from '../styles/restfood.jpg';
import { Link } from 'react-router-dom';

const Jumbotron = () => {
    return (
      <section className="jumbotron">
        <div className="jumbotron-content">
          <h1 className="jumbotron-title">Little Lemon</h1>
          <h2 className="jumbotron-subtitle">Chicago</h2>
          <p className="jumbotron-description">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <button className="jumbotron-button"><Link to="/reservations" className="jumbotron-button">Reserve Table</Link></button>
        </div>
        <div className="jumbotron-image-container">
          <img 
            src={restaurantImage} 
            alt="Little Lemon restaurant interior" 
            className="jumbotron-image"
          />
        </div>
      </section>
    );
};

export default Jumbotron;