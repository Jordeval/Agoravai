import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PeçasparaComputadores.css'
import './ReturnButton.css';

const PecasparaComputadores = () => {
  const navigate = useNavigate();

  return (
    <div className="page-content">
      <div className='PC'>
      <h1>Peças para Computadores</h1>
      <p>Informações sobre peças para computadores...</p> {/* Certifique-se de que há conteúdo */}
      <button onClick={() => navigate(-1)} className="return-button">Voltar</button>
      </div>
    </div>
  );
};

export default PecasparaComputadores;
