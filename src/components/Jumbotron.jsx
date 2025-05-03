import React from 'react';
import restaurantImage from '../styles/restfood.jpg';

const Jumbotron = () => {
    return (
      <section className="jumbotron">
        <div className="jumbotron-content">
          <h1 className="jumbotron-title">Little Lemon</h1>
          <h2 className="jumbotron-subtitle">Chicago</h2>
          <p className="jumbotron-description">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <button className="jumbotron-button">Reserve Table</button>
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