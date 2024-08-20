import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AssistenciaParaCelular.css'
import './ReturnButton.css'; 

const AssistenciaParacelular = () => {
  const navigate = useNavigate();

  return (
    <div className="page-content">
      <div className='AC'>
      <h1>Assistência para celular</h1>
      {/* <p>Informações sobre a empresa...</p> */}
      <button onClick={() => navigate(-1)} className="return-button">Voltar</button>
      </div>
    </div>
  );
};

export default AssistenciaParacelular;
