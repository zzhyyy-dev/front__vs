import React, { useEffect, useState } from 'react';
import * as S from './styles';
import UserProfile from '@components/UserProfile/UserProfile';
import LayoutBase from '@components/LayoutBase/LayoutBase';
import Profile from '@assets/pngegg.png';
import { getProvas } from '@services/api/authService';
import AvProva from '@pages/PortalDoAluno/AvProva/AvProva';

const generateRandomDate = (start, end) => {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

const ProvasStudent = () => {
  const [userName, setUserName] = useState(localStorage.getItem('userName') || 'Usuário');
  const [userType, setUserType] = useState(localStorage.getItem('userType') || '');
  const [turma, setTurma] = useState(localStorage.getItem('classId') || 'Turma Padrão');
  const [provas, setProvas] = useState(JSON.parse(localStorage.getItem('provas')) || []);
  const [showProva, setShowProva] = useState(false);
  const [selectedProva, setSelectedProva] = useState(null);

  const fetchAndCheckNewProvas = () => {
    const savedUserId = localStorage.getItem('userId');
    if (savedUserId) {
      getProvas(savedUserId)
        .then((data) => {
          const existingProvas = JSON.parse(localStorage.getItem('provas')) || [];
          const newProvas = data.filter(prova => 
            !existingProvas.some(existing => existing.challengeId === prova.challengeId)
          );

          if (newProvas.length > 0) {
            const updatedProvas = [
              ...existingProvas,
              ...newProvas.map(prova => ({
                ...prova,
                score: typeof prova.score === 'string' ? JSON.parse(prova.score) : prova.score,
                data: generateRandomDate(new Date(2022, 0, 1), new Date())
              }))
            ];
            setProvas(updatedProvas);
            localStorage.setItem('provas', JSON.stringify(updatedProvas));
          }
        })
        .catch((error) => console.error('Erro ao buscar as provas:', error));
    } else {
      console.error('userId não encontrado');
    }
  };

  useEffect(() => {
    fetchAndCheckNewProvas(); // Inicializa a verificação
    const intervalId = setInterval(fetchAndCheckNewProvas, 300000); // Verifica a cada 5 minutos
    return () => clearInterval(intervalId);
  }, []);

  const handleProvaClick = (prova) => {
    setSelectedProva(prova);
    setShowProva(true);
  };

  return (
    <LayoutBase userType={userType}>
      <S.PortalContainer>
        <UserProfile userName={userName} turma={`Turma ${turma}`} userImage={Profile} />
        <S.WelcomeMessage>Olá {userName}! Aqui estão suas provas:</S.WelcomeMessage>

        {!showProva ? (
          <S.ProvasGrid>
            {provas.map((prova) => {
              const scoreGeral = prova.score.find(item => item.score_geral)?.score_geral;
              return (
                <S.ProvaCard key={prova.challengeId} onClick={() => handleProvaClick(prova)}>
                  <S.ProvaTitle>{prova.challengeName}</S.ProvaTitle>
                  <S.ProvaInfo>
                    <S.ScoreSection>
                      <S.ScoreLabel>Geral</S.ScoreLabel>
                      <S.ScoreItem><strong>Gestão:</strong> {scoreGeral?.gestao || 'N/A'}</S.ScoreItem>
                      <S.ScoreItem><strong>Ferramentas:</strong> {scoreGeral?.ferramentas || 'N/A'}</S.ScoreItem>
                      <S.ScoreItem><strong>Eficiência:</strong> {scoreGeral?.eficiencia || 'N/A'}</S.ScoreItem>
                      <S.ScoreItem><strong>Coordenação:</strong> {scoreGeral?.coordenação || 'N/A'}</S.ScoreItem>
                    </S.ScoreSection>
                    <S.Date><strong>Data:</strong> {prova.data}</S.Date>
                  </S.ProvaInfo>
                </S.ProvaCard>
              );
            })}
          </S.ProvasGrid>
        ) : (
          <AvProva prova={selectedProva} />
        )}
      </S.PortalContainer>
    </LayoutBase>
  );
};

export default ProvasStudent;
