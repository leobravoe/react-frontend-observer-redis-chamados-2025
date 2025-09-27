// src/components/RealtimeChamados.jsx

import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';

export default function RealtimeChamados() {
  const queryClient = useQueryClient();

  useEffect(() => {
    const API_URL = 'http://localhost:5000/api/chamados/events';
    console.log('Realtime: Iniciando conexão SSE...');
    const eventSource = new EventSource(API_URL);

    eventSource.addEventListener('chamado-update', (event) => {
      const eventData = JSON.parse(event.data);
      console.log('Realtime: Recebida atualização do servidor!', eventData);
      
      // Invalida a query 'chamados', fazendo com que o React Query
      // busque os dados mais recentes automaticamente.
      queryClient.invalidateQueries({ queryKey: ['chamados'] });
    });

    eventSource.onerror = (error) => {
      console.error('Realtime: Erro na conexão SSE', error);
    };

    return () => {
      console.log('Realtime: Encerrando conexão SSE.');
      eventSource.close();
    };
  }, [queryClient]);

  return null;
}