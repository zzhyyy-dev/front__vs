import React, { useState, useEffect } from 'react';
import LayoutBase from '@components/LayoutBase/LayoutBase';
import * as S from './styles';
import { getUserInfo } from '@services/api/authService';
import Profile from '@assets/pngegg.png';

const AlunoDetalhes = () => {
  const [alunoName, setAlunoName] = useState('');
  const [alunoId, setAlunoId] = useState('');
  const [turmaId, setTurmaId] = useState('');
  const [activeTab, setActiveTab] = useState('estudo');
  const [tempo, setTempo] = useState(localStorage.getItem('tempo') || `${Math.floor(Math.random() * 5) + 1}m${Math.floor(Math.random() * 60)}s`);
  const [aulasAssistidas, setAulasAssistidas] = useState(
    JSON.parse(localStorage.getItem('aulasAssistidas')) || { total: 20, assistidas: Math.floor(Math.random() * 20) }
  );

  useEffect(() => {
    const storedAlunoId = localStorage.getItem('selectedAlunoId');
    const storedTurmaId = localStorage.getItem('selectedTurmaId');
    if (storedAlunoId) {
      setAlunoId(storedAlunoId);
      setTurmaId(storedTurmaId || '');
      fetchAlunoDetails(storedAlunoId);
    }

    localStorage.setItem('tempo', tempo);
    localStorage.setItem('aulasAssistidas', JSON.stringify(aulasAssistidas));

    // Função que limpa o localStorage quando o componente é desmontado
    return () => {
      localStorage.removeItem('tempo');
      localStorage.removeItem('aulasAssistidas');
      localStorage.removeItem('selectedAlunoId');
      localStorage.removeItem('selectedAlunoName');
    };
  }, [tempo, aulasAssistidas]);

  const fetchAlunoDetails = async (id) => {
    try {
      const data = await getUserInfo('student', id);
      setAlunoName(data.name);
      localStorage.setItem('selectedAlunoName', data.name);
    } catch (error) {
      console.error('Erro ao buscar informações do aluno:', error);
    }
  };

  return (
    <LayoutBase userType="professor">
      <S.Container>
        <S.ProfileSection>
          <S.ProfilePicture src={Profile} alt="Foto do Aluno" />
          <S.ProfileInfo>
            <S.ProfileName>{alunoName}</S.ProfileName>
            <S.ProfileTurma>Turma - {turmaId}</S.ProfileTurma>
          </S.ProfileInfo>
          <S.ButtonsContainer>
            <S.Button $active={activeTab === 'desempenho'} onClick={() => setActiveTab('desempenho')}>
              Desempenho
            </S.Button>
            <S.Button $active={activeTab === 'estudo'} onClick={() => setActiveTab('estudo')}>
              Estudo
            </S.Button>
          </S.ButtonsContainer>
        </S.ProfileSection>

        {activeTab === 'desempenho' ? (
          <S.DesempenhoSection>
            <S.StatsSection>
              <S.StatsCard>
                <S.StatsTitle>Tempo</S.StatsTitle>
                <S.TimeDisplay>{tempo}</S.TimeDisplay>
                <S.TimeChange>-15s</S.TimeChange>
                <S.StatsDetails>Progresso de 15s desde a última avaliação!</S.StatsDetails>
              </S.StatsCard>
              <S.StatsCard>
                <S.StatsTitle>Aulas assistidas</S.StatsTitle>
                <S.StatsCircle>
                  <S.CirclePercentage>
                    {Math.round((aulasAssistidas.assistidas / aulasAssistidas.total) * 100)}%
                  </S.CirclePercentage>
                </S.StatsCircle>
                <S.StatsDetails>
                  Aulas - {aulasAssistidas.total} / Aulas assistidas - {aulasAssistidas.assistidas}
                </S.StatsDetails>
              </S.StatsCard>
            </S.StatsSection>
          </S.DesempenhoSection>
        ) : (
          <S.EstudoSection>
            <S.StatsCard>
              <S.StatsTitle>Aulas assistidas</S.StatsTitle>
              <S.StatsCircle>
                <S.CirclePercentage>
                  {Math.round((aulasAssistidas.assistidas / aulasAssistidas.total) * 100)}%
                </S.CirclePercentage>
              </S.StatsCircle>
              <S.StatsDetails>
                Aulas - {aulasAssistidas.total} / Aulas assistidas - {aulasAssistidas.assistidas}
              </S.StatsDetails>
            </S.StatsCard>
          </S.EstudoSection>
        )}
      </S.Container>
    </LayoutBase>
  );
};

export default AlunoDetalhes;
