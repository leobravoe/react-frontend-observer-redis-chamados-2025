// src/components/FiltroChamados.jsx

export default function FiltroChamados({ estado, onEstadoChange }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
      <strong>Filtro:</strong>
      <select
        value={estado ?? ''}
        onChange={(e) => onEstadoChange(e.target.value || null)}
        style={{ padding: '8px' }}
      >
        <option value="">Todos</option>
        <option value="a">Abertos</option>
        <option value="f">Fechados</option>
      </select>
    </label>
  );
}