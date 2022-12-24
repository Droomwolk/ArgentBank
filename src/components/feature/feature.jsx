import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/main.scss';

function Feature({ icon, title, content }) {
  return (
    <div className="feature__item">
      <img className="feature__item-icon" src={icon} alt="features-icons" />
      <h3 className="feature__item-title">{title}</h3>
      <p>{content}</p>
    </div>
  );
}

Feature.propTypes = {
};

export default Feature;