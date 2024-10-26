import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '@pages/Login/Login';
import Turmas from '@pages/Turmas/Turmas';
import TurmasAdm from '@pages/TurmasAdm/TurmasAdm';
import Alunos from '@pages/Alunos/Alunos';
import AlunosAdm from '@pages/Alunos copy/AlunosAdm';
import AlunoDetalhes from '@pages/Alunos/AlunosDetalhes/AlunosDetalhes';
import Aulas from '@pages/Aulas/Aulas';
import NotFound from '@pages/NotFound/NotFound';
import PortalDoAluno from '@pages/PortalDoAluno/PortalDoAluno';
import Provas from '@pages/Provas/Provas';
import Professores from '@pages/Professores/Professores';
import ProvasStudent from '@pages/ProvasStudent/ProvasStudent';
import AvProva from '@pages/PortalDoAluno/AvProva/AvProva';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Turmas" element={<Turmas />} />
        <Route path="/TurmasAdm" element={<TurmasAdm />} />
        <Route path="/Aulas" element={<Aulas />} />
        <Route path="/Alunos/:turma" element={<Alunos />} />
        <Route path="/AlunosAdm" element={<AlunosAdm />} />
        <Route path="/Aluno/:aluno" element={<AlunoDetalhes />} />
        <Route path="/Professores" element={<Professores />} />
        <Route path="/portal-do-aluno" element={<PortalDoAluno />}>
          {/* Rotas aninhadas */}
          <Route path="AvProva" element={<AvProva />} />
        </Route>
        <Route path="/provas" element={<Provas />} />
        <Route path="/provasStudent" element={<ProvasStudent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
