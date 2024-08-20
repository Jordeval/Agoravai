import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import seta from '../assets/img/seta-para-cima.png';
import './Navibar.css'; 

const Navibar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navibar ${menuOpen ? 'menu-open' : ''}`}>
      <div className="menu" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 3a.5.5 0 0 1 .5.5v.5h11V3.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zM2.5 7a.5.5 0 0 1 .5.5v.5h11V7.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zM2.5 11a.5.5 0 0 1 .5.5v.5h11v-.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
        </svg>
      </div>
      <div className="movel">
        <img src={seta} alt="Seta para cima" />
        Click no menu para conhecer nossos serviços.
      </div>
      <div className={`button-home ${menuOpen ? 'show-menu' : ''}`}>
        <Link to="/quem-somos" className='button-item' onClick={toggleMenu}>Quem somos</Link>
        <Link to="/assistencia-notebook" className='button-item' onClick={toggleMenu}>Assistência para Notebook</Link>
        <Link to="/pecas-para-computadores" className='button-item' onClick={toggleMenu}>Peças para Computadores</Link>
        <Link to="/assistencia-para-celular" className='button-item' onClick={toggleMenu}>Assistência para celular</Link>
        <Link to="/acessorios-para-celular" className='button-item' onClick={toggleMenu}>Acessórios para Celular</Link>
        <button className={`button-item-l ${menuOpen ? 'show' : 'hide'}`}>Redes Sociais</button>
        <button className={`button-item-l ${menuOpen ? 'show' : 'hide'}`}>Localização</button>
        <button className={`button-item-l ${menuOpen ? 'show' : 'hide'}`}>WhatsApp</button>
      </div>
    </div>
  );
};

export default Navibar;
