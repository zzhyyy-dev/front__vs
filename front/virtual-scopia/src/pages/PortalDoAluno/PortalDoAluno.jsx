import React, { useEffect, useState } from 'react';
import * as S from './styles'; 
import UserProfile from '@components/UserProfile/UserProfile';
import LayoutBase from '@components/LayoutBase/LayoutBase';
import { getUserInfo, getCompetencias } from '@services/api/authService'; 
import Profile from '@assets/pngegg.png';
import AvProva from '@pages/PortalDoAluno/AvProva/AvProva'; // Importando o conteúdo de prova

const PortalDoAluno = () => {
  const [userName, setUserName] = useState(localStorage.getItem('userName') || 'Usuário');
  const [turma, setTurma] = useState(localStorage.getItem('classId') || 'Turma Padrão');
  const [progresso, setProgresso] = useState(localStorage.getItem('progresso') || 15); 
  const [competencias, setCompetencias] = useState(JSON.parse(localStorage.getItem('competencias')) || []);
  const [userType, setUserType] = useState(localStorage.getItem('userType') || '');
  const [showProva, setShowProva] = useState(false); // Estado para controlar a exibição da prova

 

  useEffect(() => {
    const savedUserType = localStorage.getItem('userType');
    const savedUserId = localStorage.getItem('userId');
    const savedProgresso = localStorage.getItem('progresso');

    if (savedUserType && savedUserId) {
      setUserType(savedUserType);
      setUserName(localStorage.getItem('userName') || 'Usuário');
      setTurma(localStorage.getItem('classId') || 'Turma Padrão');

      if (!savedProgresso) {
        const newProgresso = Math.floor(Math.random() * 100) + 1;
        setProgresso(newProgresso);
        localStorage.setItem('progresso', newProgresso);
      }

      if (!localStorage.getItem('competencias')) {
        getCompetencias(savedUserId)
          .then((competenciasData) => {
            setCompetencias(competenciasData);
            localStorage.setItem('competencias', JSON.stringify(competenciasData));
          })
          .catch((error) => console.error('Erro ao buscar as competências:', error));
      }
    }
  }, []);

  if (!userType) {
    return <div>Carregando...</div>; 
  }

  return (
    <LayoutBase userType={userType}>
      <S.PortalContainer>
        <UserProfile 
          userName={userName} 
          turma={`Turma ${turma}`} 
          userImage={Profile} 
        />
        
        <S.WelcomeMessage>
          Olá {userName}! Veja mais sobre o seu progresso.
        </S.WelcomeMessage>

        {!showProva ? (  
          <S.OverviewContainer>
            <S.ProgressCard>
              <S.CardTitle>Progresso</S.CardTitle>
              <S.ProgressValue>{`+ ${progresso}%`}</S.ProgressValue>
              <S.ProgressInfo>Progresso de {progresso}% desde a última avaliação!</S.ProgressInfo>
            </S.ProgressCard>

            <S.CompetenciasCard>
              <S.CardTitle2>Competências</S.CardTitle2>
              <S.CompetenciasList>
                {competencias.map((comp, index) => (
                  <S.CompetenciaItem key={index}>
                    <span>{comp.competenceName}</span>
                    <S.CompetenciaScore $score={comp.score}>{comp.score}</S.CompetenciaScore>
                  </S.CompetenciaItem>
                ))}
              </S.CompetenciasList>
            </S.CompetenciasCard>

            
          </S.OverviewContainer>
        ) : (  
          <AvProva /> 
        )}

      </S.PortalContainer>
    </LayoutBase>
  );
};

export default PortalDoAluno;
