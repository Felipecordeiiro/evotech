import React from 'react';
import "./MobileNav.css";
import logo from '../../assets/EvoTech.png';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
      <div className='mobile-menu-container'>
        <img className='logo' src={logo} alt="Logo" />
        <ul>
          <li>
            <a className='menu-item' href="#home">Home</a>
          </li>
          <li>
            <a className='menu-item' href="#sobre">Sobre</a>
          </li>
          <li>
            <a className='menu-item' href="#projetos">Projetos</a>
          </li>
          <li>
            <a className='menu-item' href="#missao">Missão</a>
          </li>
          <li>
            <a className='contact-btn' href="https://wa.me/5585991317493" target="_blank" rel="noreferrer">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;
