// src/hooks/useChamadosPage.js

import { useQuery } from '@tanstack/react-query';

/**
 * Função responsável por buscar os dados na API de chamados.
 * @param {object} params - Parâmetros para a busca.
 * @param {string|null} params.estado - O estado para filtrar ('a', 'f', ou null).
 * @param {number} params.page - O número da página.
 * @param {number} params.pageSize - O tamanho da página.
 * @returns {Promise<object>} - Os dados da API (items e total).
 */
const fetchChamados = async ({ estado, page, pageSize }) => {
    // 1. MELHORIA: Usa variável de ambiente para a URL base da API.
    // Isso torna o código configurável e pronto para produção.
    const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    const params = new URLSearchParams();
    if (estado) {
        params.append('estado', estado);
    }
    params.append('page', page);
    params.append('pageSize', pageSize);

    const response = await fetch(`${API_BASE_URL}/api/chamados?${params.toString()}`);

    // 2. MELHORIA: Tratamento de erro aprimorado.
    // Se a resposta não for 'ok', tentamos ler a mensagem de erro específica do corpo da resposta.
    if (!response.ok) {
        let errorMessage = 'Não foi possível buscar os dados dos chamados.';
        try {
            // Tenta extrair a mensagem de erro específica do JSON retornado pela API.
            const errorBody = await response.json();
            if (errorBody && errorBody.error) {
                errorMessage = errorBody.error;
            }
        } catch (e) {
            // O corpo da resposta não era JSON ou houve outro erro.
            // Mantemos a mensagem genérica.
        }
        // Lança um erro com a mensagem mais detalhada.
        throw new Error(errorMessage);
    }

    return response.json();
};

/**
 * Hook customizado para buscar e gerenciar os dados da página de chamados.
 */
export const useChamadosPage = ({ estado, page, pageSize }) => {
    return useQuery({
        queryKey: ['chamados', { estado, page, pageSize }],
        queryFn: () => fetchChamados({ estado, page, pageSize }),
        keepPreviousData: true,
    });
};