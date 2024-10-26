import React, { useEffect, useState } from 'react';
import * as S from './styles'; 
import LayoutBase from '@components/LayoutBase/LayoutBase';
import { getTurmasProfessor } from '@services/api/authService'; 
import Alunos from '@pages/Alunos/Alunos'; 
import { useNavigate } from 'react-router-dom';

const Turma = () => {
  const [userType, setUserType] = useState('');
  const [turmas, setTurmas] = useState(JSON.parse(localStorage.getItem('turmas')) || []); 
  const [selectedTurma, setSelectedTurma] = useState(null);
  const [selectedTurmaName, setSelectedTurmaName] = useState('');
  const navigate = useNavigate();

  const handleTurmaClick = (turmaId, turmaName) => {
    console.log('Turma ID:', turmaId); 
    setSelectedTurma(turmaId);
    setSelectedTurmaName(turmaName);

    localStorage.setItem('selectedTurmaId', turmaId);
  };

  useEffect(() => {
    const savedUserType = localStorage.getItem('userType');
    const teacherId = localStorage.getItem('userId'); 
    if (savedUserType && teacherId && !turmas.length) { 
      setUserType(savedUserType);
      getTurmasProfessor(teacherId)
        .then((data) => {
          setTurmas(data);
          localStorage.setItem('turmas', JSON.stringify(data)); // Salva no localStorage
        })
        .catch((error) => console.error('Erro ao buscar as turmas:', error));
    } else if (!savedUserType || !teacherId) {
      navigate('/');
    }
  }, [navigate, turmas]);

  return (
    <LayoutBase userType={userType}>
      <S.Container>
        <S.Title>{!selectedTurma ? 'Suas Turmas' : `Turma: ${selectedTurmaName} Alunos -`}</S.Title>
        <hr />
        
        {!selectedTurma ? ( 
          <S.TurmaGrid>
            {turmas.map((turma) => (
              <S.TurmaCard 
                key={turma.id} 
                onClick={() => handleTurmaClick(turma.id, turma.name)}
              >
                <S.Foto>Foto</S.Foto>
                <S.TurmaName>{turma.name}</S.TurmaName>
              </S.TurmaCard>
            ))}
          </S.TurmaGrid>
        ) : (
          <Alunos turmaId={selectedTurma} />
        )}
      </S.Container>
    </LayoutBase>
  );
};

export default Turma;
