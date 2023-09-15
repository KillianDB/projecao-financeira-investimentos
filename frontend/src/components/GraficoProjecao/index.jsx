import React from 'react';
import { useParams } from 'react-router-dom';
import './GraficoProjecao.css';

function GraficoProjecao() {
  const { id } = useParams();

  // Aqui você pode usar o ID para buscar os detalhes do item
  // Exemplo: faça uma solicitação de API com o ID

  return (
    <div>
      <h1>Detalhes do Item #{id}</h1>
      {/* Renderize os detalhes do item aqui */}
    </div>
  );
}

export default GraficoProjecao;
