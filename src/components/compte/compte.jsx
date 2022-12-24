/* eslint-disable import/no-unresolved */
/* eslint-disable eol-last */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/main.scss'
import Button from '../button/button';

function Compte({ title, cash, balance }) {
  return (
    <div className="compte">
      <div className="compte__argent">
        <p className="compte__argent-title"> {title} </p>
        <h3 className="compte__argent-price"> ${cash} </h3>
        <p className="compte__argent-balance"> {balance} </p>
      </div>
      <div className="compte__button">
        <Button className="compte__button-view" name="View transactions" border="none" />
      </div>
    </div>
  );
}

Compte.propTypes = {};

export default Compte;