# Observer Chamados - Frontend

## Visão Geral

Este é o projeto de frontend para a aplicação **Observer Chamados**, desenvolvido para estudantes de desenvolvimento web. A aplicação fornece uma interface para visualizar e filtrar uma lista de "chamados" (tickets), com atualizações em tempo real.

Construído com React, o projeto utiliza uma arquitetura baseada em componentes para renderizar a interface do usuário. O gerenciamento de estado do servidor é abstraído por meio de um hook customizado (`useChamadosPage`) que lida com a busca de dados e paginação. A funcionalidade de tempo real é implementada através de um componente dedicado (`RealtimeChamados`) que estabelece uma conexão Server-Sent Events (SSE) com o backend para receber atualizações e invalidar os dados em cache, fazendo com que a interface seja atualizada automaticamente.

### Principais Funcionalidades

*   Visualização de uma lista paginada de chamados.
*   Filtro de chamados por estado (ex: Aberto, Fechado).
*   Atualização automática da lista quando ocorrem mudanças no backend.
*   Indicador visual durante a busca de novos dados.

## Requisitos

*   **Sistema Operacional**: (indeterminado)
*   **Pré-requisitos**: (indeterminado)

**Fonte**: `package.json`

## Configuração e Instalação

1.  Clone o repositório para sua máquina local:
    ```sh
    git clone <URL_DO_REPOSITORIO>
    ```

2.  Navegue até o diretório do projeto:
    ```sh
    cd react-frontend-observer-redis-chamados-2025
    ```

3.  Instale as dependências do projeto. O gerenciador de pacotes utilizado é (indeterminado).
    ```sh
    npm install
    ```

4.  **Variáveis de Ambiente**: O projeto pode ser configurado através de um arquivo `.env` na raiz. A variável a seguir é utilizada para definir a URL base da API do backend.

| Variável | Exemplo | Obrigatória? | Descrição |
| --- | --- | --- | --- |
| `VITE_API_URL` | `http://localhost:5000` | Não | URL base do servidor de backend. Se não for fornecida, o padrão `http://localhost:5000` será usado. |

**Fontes**: `package.json`, `src/hooks/useChamadosPage.js`

## Executar em Desenvolvimento

Para iniciar o servidor de desenvolvimento com recarga automática (`hot-reloading`), execute o seguinte comando:

```sh
npm run dev
```

A aplicação estará disponível em uma URL local. A porta padrão é (indeterminada), mas geralmente é `http://localhost:5173`.

**Fonte**: `package.json`

## Execução com Containers

(não aplicável)

## Scripts Disponíveis

*   `dev`: Inicia o servidor de desenvolvimento com Vite.
*   `build`: Compila a aplicação para produção.
*   `lint`: Executa a ferramenta de lint para análise estática do código.
*   `preview`: Inicia um servidor local para visualizar a versão de produção da aplicação.

**Fonte**: `package.json`

## Qualidade, Testes e Padrões

*   **Testes**: (indeterminado)
*   **Qualidade e Estilo de Código**: O projeto utiliza o ESLint para garantir a qualidade e a padronização do código. Para executar a verificação, utilize o comando:
    ```sh
    npm run lint
    ```
*   **Convenções de Commit**: (indeterminado)

**Fonte**: `package.json`, `eslint.config.js`

## Build e Deploy (Produção)

A variável de ambiente `VITE_API_URL` deve ser configurada com a URL do backend de produção.

Para construir a aplicação para um ambiente de produção, execute:

```sh
npm run build
```

Após o build, você pode iniciar um servidor para pré-visualizar o resultado com:

```sh
npm run preview
```

**Fonte**: `package.json`

## Documentação de API

(não aplicável)

## Ambiente de Demonstração

(não aplicável)

## Troubleshooting (FAQ)

*   **Problema**: A aplicação exibe a mensagem "Ocorreu um erro ao buscar os chamados."
    *   **Solução**: Verifique se o serviço de backend está em execução e acessível na URL configurada em `VITE_API_URL` (padrão: `http://localhost:5000`).

*   **Problema**: As atualizações em tempo real não estão funcionando.
    *   **Solução**: Certifique-se de que o backend está em execução e que o endpoint de eventos (`/api/chamados/events`) está acessível. Verifique o console do navegador por erros de conexão SSE.

**Fonte**: `src/pages/ChamadosPage.jsx`, `src/components/RealtimeChamados.jsx`

## Roadmap e Contribuição

(não aplicável)

## Licença e Créditos

*   **Licença**: MIT
*   **Autor**: Leonardo Bravo Estácio
