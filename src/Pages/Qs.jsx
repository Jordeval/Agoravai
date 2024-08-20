import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Qs.css'
import './ReturnButton.css'; 

const Qs = () => {
  const navigate = useNavigate();

  return (
    <div className="page-content">
      <div className='content-Qs'>
      <h1>Quem Somos</h1>
      <p>Informações sobre a empresa...</p>
      <button onClick={() => navigate(-1)} className="return-button">Voltar</button>
      </div>
    </div>
  );
};

export default Qs;
