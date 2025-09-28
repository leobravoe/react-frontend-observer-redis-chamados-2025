// src/App.jsx

import RealtimeChamados from './components/RealtimeChamados';
import ChamadosPage from './pages/ChamadosPage';

function App() {
  // Em uma aplicação maior, aqui ficaria o sistema de rotas (ex: React Router).
  return (
    <>
      <ChamadosPage />
      {/* Componente "invisível" que lida com as atualizações em tempo real */}
      <RealtimeChamados />
    </>
  );
}

export default App;