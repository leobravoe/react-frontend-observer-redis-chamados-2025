// src/pages/ChamadosPage.jsx

import { useState } from 'react';
import { useChamadosPage } from '../hooks/useChamadosPage';

import FiltroChamados from '../components/FiltroChamados';
import ListaChamados from '../components/ListaChamados';
import Paginacao from '../components/Paginacao';
import RealtimeChamados from '../components/RealtimeChamados';

const PAGE_SIZE = 10;

export default function ChamadosPage() {
  const [estado, setEstado] = useState(null); // null='todos', 'a', 'f'
  const [page, setPage] = useState(1);

  // Usa o nosso hook customizado para buscar os dados.
  // A complexidade da busca, cache, etc., está abstraída.
  const { data, isLoading, isFetching, isError } = useChamadosPage({
    estado,
    page,
    pageSize: PAGE_SIZE,
  });

  // Estado de carregamento inicial
  if (isLoading) {
    return <main><h1>Chamados</h1><p>Carregando chamados...</p></main>;
  }

  // Estado de erro na busca
  if (isError) {
    return <main><h1>Chamados</h1><p>Ocorreu um erro ao buscar os chamados.</p></main>;
  }

  // Garante que 'data' e 'data.items' existam para evitar erros
  const items = data?.items ?? [];
  const total = data?.total ?? 0;

  const hasPrev = page > 1;
  const hasNext = page * PAGE_SIZE < total;

  // Função para lidar com a mudança de filtro, resetando a página.
  const handleFilterChange = (novoEstado) => {
    setPage(1);
    setEstado(novoEstado);
  };

  return (
    <main style={{ fontFamily: 'sans-serif', maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h1>Chamados</h1>

      {/* Componente para o filtro */}
      <FiltroChamados estado={estado} onEstadoChange={handleFilterChange} />

      {/* Componente que renderiza a navegação da paginação */}
      <Paginacao
        page={page}
        total={total}
        pageSize={PAGE_SIZE}
        hasPrev={hasPrev}
        hasNext={hasNext}
        onPrev={() => setPage((p) => p - 1)}
        onNext={() => setPage((p) => p + 1)}
      />

      {/* Componente "invisível" que lida com as atualizações em tempo real */}
      <RealtimeChamados />

      {/* Indicador de que uma nova busca está acontecendo em segundo plano */}
      {isFetching && <small style={{ display: 'block', margin: '12px 0' }}>Atualizando lista...</small>}

      {/* Componente que renderiza a lista de chamados */}
      <ListaChamados items={items} />
    </main>
  );
}