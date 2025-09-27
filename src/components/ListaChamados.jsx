// src/components/ListaChamados.jsx

import ChamadoItem from './ChamadoItem';

export default function ListaChamados({ items }) {
  if (items.length === 0) {
    return <p style={{ marginTop: '12px' }}>Nenhum chamado encontrado para este filtro.</p>;
  }

  return (
    <ul style={{ marginTop: '12px', paddingLeft: '20px', listStyle: 'none' }}>
      {items.map((item) => (
        <ChamadoItem key={item.id} chamado={item} />
      ))}
    </ul>
  );
}