import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AcessoriosParaCelular.css';
import fone1 from '../assets/img/Fone1.jpg';
import fone2 from '../assets/img/Fone2.jpg';
import fone3 from '../assets/img/Fone3.jpg';
import fonep1 from '../assets/img/FoneP1.jpg';
import fonep2 from '../assets/img/FoneP2.jpg';
import fonep3 from '../assets/img/FoneP3.jpg';
import './ReturnButton.css'; 
import carregador1 from '../assets/img/Carregador1.jpg';
import carregador2 from '../assets/img/Carregador2.jpg';
import carregador3 from '../assets/img/Carregador3.jpg';
import carregador4 from '../assets/img/Carregador4.jpg';
import carregadorV1 from '../assets/img/CarregadorV1.jpg';
import carregadorV2 from '../assets/img/CarregadorV2.jpg';
import carregadorV3 from '../assets/img/CarregadorV3.jpg';
import carregadorV4 from '../assets/img/CarregadorV4.jpg';
import powerbank1 from '../assets/img/PowerB1.jpg';
import powerbank2 from '../assets/img/PowerB2.jpg';
import pelicola1 from '../assets/img/Pelicola1.jpg';
import pelicola2 from '../assets/img/Pelicola2.jpg';
import pelicola3 from '../assets/img/Pelicola3.jpg';
import capa1 from '../assets/img/Capa1.jpg';
import capa2 from '../assets/img/Capa2.jpg';
import capa3 from '../assets/img/Capa3.jpg';
import suporte1 from '../assets/img/Suporte1.jpg';
import suporte2 from '../assets/img/Suporte2.jpg';

const AcessoriosParaCelular = () => {
  const navigate = useNavigate();

  return (
    <div className="page-content">
      <div className='Ac'>
        <h1>Acessórios para Celular</h1>
        <div className='imagens-A'>

          <h2>Fones de ouvido</h2>
          <div className='imagem-container'>
            <img src={fone1} alt="Fone de ouvido branco" />
            <img src={fone2} alt="Fone de ouvido preto" />
            <img src={fone3} alt="Fone de ouvido cinza" />
            <img src={fonep1} alt="Fone portátil 1" />
            <img src={fonep2} alt="Fone portátil 2" />
            <img src={fonep3} alt="Fone portátil 3" />
          </div>

          <h2>Carregadores</h2>
          <div className='imagem-container'>
            <img src={carregador1} alt="Carregador de celular 1" />
            <img src={carregador2} alt="Carregador de celular 2" />
            <img src={carregador3} alt="Carregador de celular 3" />
            <img src={carregador4} alt="Carregador de celular 4" />
            <img src={carregadorV1} alt="Carregador veicular 1" />
            <img src={carregadorV2} alt="Carregador veicular 2" />
            <img src={carregadorV3} alt="Carregador veicular 3" />
            <img src={carregadorV4} alt="Carregador veicular 4" />
            <img src={powerbank1} alt="Power Bank 1" />
            <img src={powerbank2} alt="Power Bank 2" />
          </div>

          <h2>Películas</h2>
          <div className='imagem-container'>
            <img src={pelicola1} alt="Película 1" />
            <img src={pelicola2} alt="Película 2" />
            <img src={pelicola3} alt="Película 3" />
          </div>

          <h2>Capas para Celulares</h2>
          <div className='imagem-container'>
            <img src={capa1} alt="Capa para celular 1" />
            <img src={capa2} alt="Capa para celular 2" />
            <img src={capa3} alt="Capa para celular 3" />
          </div>

          <h2>Suportes</h2>
          <div className='imagem-container'>
            <img src={suporte1} alt="Suporte para celular 1" />
            <img src={suporte2} alt="Suporte para celular 2" />
          </div>
          
        </div>
        <button onClick={() => navigate(-1)} className="return-button">Voltar</button>
      </div>
    </div>
  );
};

export default AcessoriosParaCelular;
