import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import * as S from './styles'; 
import { getAlunosTurma } from '@services/api/authService'; 

const Alunos = () => {
  const [alunos, setAlunos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const turmaId = localStorage.getItem('selectedTurmaId');
    const cachedAlunos = localStorage.getItem(`alunos_${turmaId}`);

    if (cachedAlunos) {
      setAlunos(JSON.parse(cachedAlunos));
    } else if (turmaId) {
      getAlunosTurma(turmaId)
        .then((data) => {
          setAlunos(data);
          localStorage.setItem(`alunos_${turmaId}`, JSON.stringify(data)); // Salva no localStorage
        })
        .catch((error) => console.error('Erro ao buscar alunos:', error));
    } else {
      console.error('turmaId não encontrado no localStorage');
    }
  }, []);

  const handleAlunoClick = (aluno) => {
    localStorage.setItem('selectedAlunoId', aluno.id);
    navigate(`/aluno/${aluno.id}`);
  };

  return (
    <S.Container>
      <S.AlunoGrid>
        {alunos.map((aluno) => (
          <S.AlunoCard key={aluno.id} onClick={() => handleAlunoClick(aluno)}>
            <S.Foto>Foto</S.Foto>
            <S.AlunoName>{aluno.name}</S.AlunoName>
          </S.AlunoCard>
        ))}
      </S.AlunoGrid>
    </S.Container>
  );
};

export default Alunos;
