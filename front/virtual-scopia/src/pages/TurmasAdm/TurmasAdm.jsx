import React, { useEffect, useState } from 'react';
import * as S from './styles'; 
import LayoutBase from '@components/LayoutBase/LayoutBase';
import { getAllClasses, addTurma, deleteTurma } from '@services/api/authService'; 
import { useNavigate } from 'react-router-dom';
import pontinhos from '@assets/3p.png'; 

const TurmasAdm = () => {
  const [turmas, setTurmas] = useState(JSON.parse(localStorage.getItem('turmas')) || []);
  const [userType, setUserType] = useState(localStorage.getItem('userType') || '');
  const [showMenu, setShowMenu] = useState(false); 
  const [selectedTurma, setSelectedTurma] = useState(null); 
  const [showModal, setShowModal] = useState(false); 
  const [newTurma, setNewTurma] = useState({ description: '', name: '', teacherId: '' }); 
  const navigate = useNavigate();

  const fetchTurmas = async () => {
    try {
      const data = await getAllClasses();
      const cachedTurmas = JSON.parse(localStorage.getItem('turmas')) || [];
      
      if (JSON.stringify(data) !== JSON.stringify(cachedTurmas)) {
        setTurmas(data);
        localStorage.setItem('turmas', JSON.stringify(data));
      }
    } catch (error) {
      console.error('Erro ao buscar todas as turmas:', error);
    }
  };

  useEffect(() => {
    if (!userType) {
      navigate('/');
      return;
    }

    fetchTurmas();
    const intervalId = setInterval(fetchTurmas, 30000);
    return () => clearInterval(intervalId);
  }, [navigate, userType]);

  const handleAddTurma = () => {
    addTurma(newTurma)
      .then((data) => {
        setTurmas((prevTurmas) => [...prevTurmas, data]);
        localStorage.setItem('turmas', JSON.stringify([...turmas, data]));
        console.log('Nova turma adicionada:', data);
        setShowModal(false);
      })
      .catch((error) => console.error('Erro ao adicionar a turma:', error));
  };

  const handleDeleteTurma = (id) => {
    deleteTurma(id)
      .then(() => {
        setTurmas((prevTurmas) => {
          const updatedTurmas = prevTurmas.filter(turma => turma.id !== id);
          localStorage.setItem('turmas', JSON.stringify(updatedTurmas)); 
          return updatedTurmas;
        });
        console.log(`Turma ${id} excluída com sucesso.`);
        setShowMenu(false);
      })
      .catch((error) => console.error('Erro ao excluir a turma:', error));
  };

  const handlePontinhosClick = (turma) => {
    setSelectedTurma(turma);
    setShowMenu(showMenu !== turma.id ? turma.id : null); 
  };

  return (
    <LayoutBase userType={userType}>
      <S.Container>
        <S.Header>
          <S.Title>Todas as Turmas</S.Title>
          <S.NewTurmaButton onClick={() => setShowModal(true)}>Nova Turma</S.NewTurmaButton>
        </S.Header>
        <hr />
        <S.TurmaGrid>
          {turmas.map((turma) => (
            <S.TurmaCard key={turma.id}>
              <S.TurmaName>{turma.name}</S.TurmaName> 
              <S.PontinhosIcon src={pontinhos} alt="Opções" onClick={() => handlePontinhosClick(turma)} /> 
              {showMenu === turma.id && (
                <S.OptionsMenu>
                  <li onClick={() => handleDeleteTurma(turma.id)}>
                    Excluir
                  </li>
                </S.OptionsMenu>
              )}
            </S.TurmaCard>
          ))}
        </S.TurmaGrid>

        {showModal && (
          <S.ModalOverlay>
            <S.ModalContent>
              <S.ModalTitle>Adicionar Nova Turma</S.ModalTitle>
              <S.ModalInput
                type="text"
                placeholder="Descrição da Turma"
                value={newTurma.description}
                onChange={(e) => setNewTurma({ ...newTurma, description: e.target.value })}
              />
              <S.ModalInput
                type="text"
                placeholder="Nome da Turma"
                value={newTurma.name}
                onChange={(e) => setNewTurma({ ...newTurma, name: e.target.value })}
              />
              <S.ModalInput
                type="number"
                placeholder="ID do Professor"
                value={newTurma.teacherId}
                onChange={(e) => setNewTurma({ ...newTurma, teacherId: e.target.value })}
              />
              <S.ModalActions>
                <S.ModalButton onClick={handleAddTurma}>Adicionar</S.ModalButton>
                <S.ModalButtonCancel onClick={() => setShowModal(false)}>Cancelar</S.ModalButtonCancel>
              </S.ModalActions>
            </S.ModalContent>
          </S.ModalOverlay>
        )}
      </S.Container>
    </LayoutBase>
  );
};

export default TurmasAdm;
