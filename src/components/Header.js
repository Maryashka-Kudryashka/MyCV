import React, { Component } from 'react';
import '../styles/header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <img src={require('../images/pic.jpg')} alt="Person" className="Header__image"/>   
        <div className="Header__info">
          <h1 className="Header__heading">{this.props.name}</h1>
          <h3>{this.props.description}</h3>  
        </div>
      </header>
    );
  }
}

export default Header;
