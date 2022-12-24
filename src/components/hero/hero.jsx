import React from 'react';
import PropTypes from 'prop-types';
import BankTree from '../../assets/img/bank-tree.jpeg';
import '../../scss/main.scss';

function Hero() {
//   const image = {
//     backgroundImage: `url(${BankTree})`,
//     // backgroundPosition: "0 -50px",
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     // height: "300px",
//     position: 'relative',
//   };

  return (
    <div className="hero">
      <section className="hero__content">
        <h2 className="hero__content-sronly">Promoted Content</h2>
        <p className="hero__content-subtitle">No fees.</p>
        <p className="hero__content-subtitle">No minimum deposit.</p>
        <p className="hero__content-subtitle">High interest rates.</p>
        <p className="hero__content-text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
}

Hero.propTypes = {};

export default Hero;
