//from Takeahike

// Globals
import React, { Component } from 'react';

// Styles
import localStyles from './styles/CardName.scss';
const styles = Object.assign({}, localStyles);

export default class CardName extends Component {
  render() {
    return (
      <div className={`${styles.CardName}`}>
        Card Name
      </div>
    );
  }
}