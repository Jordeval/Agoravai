import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AssistenciaNotebook.css'
import './ReturnButton.css'; 

const AssistenciaNotebook = () => {
  const navigate = useNavigate();

  return (
    <div className="page-content">
      <div className='content-AN'>
      <h1>Assistência para Notebook</h1>
      <p>Informações sobre assistência para notebooks...</p>
      <button onClick={() => navigate(-1)} className="return-button">Voltar</button>
      </div>
    </div>
  );
};

export default AssistenciaNotebook;
