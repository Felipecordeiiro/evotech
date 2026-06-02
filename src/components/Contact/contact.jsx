import React from 'react';
import Popup from 'reactjs-popup';
import './contact.css'; 
import { FaWhatsapp } from 'react-icons/fa'; 
import { MdPhone } from 'react-icons/md'; 
import { FiMail } from 'react-icons/fi'; 
import contactCard from '../../assets/cartao-contato.webp';

const Contact = () => (
  <Popup 
    trigger={<button className="contact-btn"> Contato </button>} 
    modal 
    animation="fade" 
    overlayClassName="custom-overlay" 
    contentClassName="custom-modal-content"
  >
    {close => (
      <div className="popup-container">
        <button 
          onClick={close} 
          className="popup-close-button"
          aria-label="Fechar contato"
        >
          &times;
        </button>
        
        <div className="contact-modal-grid">
          <div className="contact-copy">
            <span className="contact-kicker">Inovação em Hardware e Software</span>
            <h2>Entre em contato!</h2>
            <p>
              Vamos conversar sobre robótica, automação, visão computacional e soluções sob medida para a sua operação.
            </p>

            <div className="contact-actions">
              <a className="contact-link primary" href="mailto:EvoTech@gmail.com">
                <FiMail aria-hidden="true" />
                EvoTech@gmail.com
              </a>
              <a className="contact-link" href="tel:+5585991317493">
                <MdPhone aria-hidden="true" />
                (85) 99131-7493
              </a>
              <a className="contact-link" href="https://wa.me/5585991317493" target="_blank" rel="noreferrer">
                <FaWhatsapp aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>

          <figure className="contact-card-preview">
            <img src={contactCard} alt="Cartão de contato da EvoTech com email e telefone" />
          </figure>
        </div>
      </div>
    )}
  </Popup>
);

export default Contact;
