// src/components/ChamadoItem.jsx

// Funções utilitárias para formatação
function formatarEstado(estado) {
  return estado === 'a' ? 'Aberto' : 'Fechado';
}

function formatarData(dataIso) {
  return new Date(dataIso).toLocaleString('pt-BR');
}

export default function ChamadoItem({ chamado }) {
  const estadoFormatado = formatarEstado(chamado.estado);

  return (
    <li style={{ border: '1px solid #ddd', padding: '12px', marginBottom: '8px', borderRadius: '4px' }}>
      <div>
        <strong style={{ color: '#0056b3' }}>#{chamado.id}</strong> — {chamado.texto}
      </div>
      <div style={{ fontSize: '0.9em', color: '#555', marginTop: '8px' }}>
        <span style={{ 
          backgroundColor: chamado.estado === 'a' ? '#28a745' : '#dc3545',
          color: 'white',
          padding: '2px 6px',
          borderRadius: '4px'
        }}>
          {estadoFormatado}
        </span>
        <small> — atualizado em: {formatarData(chamado.data_atualizacao)}</small>
      </div>
    </li>
  );
}