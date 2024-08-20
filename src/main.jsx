import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Layout from './Pages/Layout';
import Qs from './Pages/Qs';
import AssistenciaNotebook from './Pages/AssistenciaNotebook';
import PecasparaComputadores from './Pages/PeçasparaComputadores';
import AssistenciaParaCelular from './Pages/AssistenciaParaCelular';
import AcessoriosParaCelular from './Pages/AcessoriosParaCelular';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div />} /> {/* Placeholder para a rota raiz */}
        <Route path="quem-somos" element={<Qs />} />
        <Route path="assistencia-notebook" element={<AssistenciaNotebook />} />
        <Route path="pecas-para-computadores" element={<PecasparaComputadores />} /> 
        <Route path="assistencia-para-celular" element={<AssistenciaParaCelular />} />
        <Route path="acessorios-para-celular" element={<AcessoriosParaCelular />} />
        <Route path="*" element={<h1>Nada</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
