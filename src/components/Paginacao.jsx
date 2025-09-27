// src/components/Paginacao.jsx

export default function Paginacao({ page, total, pageSize, hasPrev, hasNext, onPrev, onNext }) {
  if (total === 0) return null;

  return (
    <nav style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <button disabled={!hasPrev} onClick={onPrev} style={{ padding: '8px 12px' }}>
        Anterior
      </button>
      <span style={{ margin: '0 12px' }}>
        Página {page}
      </span>
      <button disabled={!hasNext} onClick={onNext} style={{ padding: '8px 12px' }}>
        Próxima
      </button>
    </nav>
  );
}