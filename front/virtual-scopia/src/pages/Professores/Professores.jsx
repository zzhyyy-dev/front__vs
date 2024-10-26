import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import * as S from './styles'; 
import LayoutBase from '@components/LayoutBase/LayoutBase';
import { getAllTeacher, addTeacher, deleteUser } from '@services/api/authService';  
import pontinhos from '@assets/3p.png'; 

const Professores = () => {
  const [professores, setProfessores] = useState(JSON.parse(localStorage.getItem('Professores')) || []);
  const [userType, setUserType] = useState(localStorage.getItem('userType') || '');
  const [showMenu, setShowMenu] = useState(false); 
  const [selectedProfessor, setSelectedProfessor] = useState(null); 
  const [showModal, setShowModal] = useState(false); 
  const [newProfessor, setNewProfessor] = useState({ name: '', email: '', password: '' });
  const [isEmailValid, setIsEmailValid] = useState(false); 
  const navigate = useNavigate();

  const fetchProfessores = async () => {
    try {
      const data = await getAllTeacher();
      const cachedProfessores = JSON.parse(localStorage.getItem('Professores')) || [];
      
      if (JSON.stringify(data) !== JSON.stringify(cachedProfessores)) {
        setProfessores(data);
        localStorage.setItem('Professores', JSON.stringify(data));
      }
    } catch (error) {
      console.error('Erro ao buscar professores:', error);
    }
  };

  useEffect(() => {
    if (!userType) {
      navigate('/');
      return;
    }

    fetchProfessores();
    const intervalId = setInterval(fetchProfessores, 30000);
    return () => clearInterval(intervalId);
  }, [navigate, userType]);

  const validateEmail = (email) => {
    const isValid = email.includes("teacher.");
    setIsEmailValid(isValid);
  };

  const handleAddProfessor = () => {
    if (!isEmailValid) return;

    addTeacher(newProfessor)
      .then((data) => {
        setProfessores((prevProfessores) => [...prevProfessores, data]);
        localStorage.setItem('Professores', JSON.stringify([...professores, data]));
        console.log('Novo professor adicionado:', data);
        setShowModal(false);
      })
      .catch((error) => console.error('Erro ao adicionar professor:', error));
  };

  const handleDeleteProfessor = (id) => {
    deleteUser('teacher', id)
      .then(() => {
        setProfessores((prevProfessores) => {
          const updatedProfessores = prevProfessores.filter(professor => professor.id !== id);
          
          if (updatedProfessores.length > 0) {
            localStorage.setItem('Professores', JSON.stringify(updatedProfessores));
          } else {
            localStorage.removeItem('Professores'); 
          }
  
          return updatedProfessores;
        });
        
        console.log('Professor excluído com sucesso');
        setShowMenu(false);
      })
      .catch((error) => console.error('Erro ao excluir professor:', error));
  };

  return (
    <LayoutBase userType={userType}>
      <S.Container>
        <S.Header>
          <S.Title>Todos os Professores</S.Title>
          <S.NewAlunoButton onClick={() => setShowModal(true)}>Novo Professor</S.NewAlunoButton>
        </S.Header>
        <hr />
        <S.AlunoGrid>
          {professores.map((professor) => ( 
            <S.AlunoCard key={professor.id}>
              <S.Foto>Foto</S.Foto>
              <S.AlunoName>{professor.name}</S.AlunoName>
              <S.PontinhosIcon 
                src={pontinhos} 
                alt="Opções" 
                onClick={(e) => {
                  e.stopPropagation(); 
                  setSelectedProfessor(professor);
                  setShowMenu(!showMenu);
                }} 
              /> 
              {showMenu && selectedProfessor?.id === professor.id && (
                <S.OptionsMenu>
                  <li onClick={() => handleDeleteProfessor(professor.id)}>
                    Excluir
                  </li>
                </S.OptionsMenu>
              )}
              <S.AlunoEmail>{professor.email}</S.AlunoEmail>
            </S.AlunoCard>
          ))}
        </S.AlunoGrid>

        {showModal && (
          <S.ModalOverlay>
            <S.ModalContent>
              <S.ModalTitle>Adicionar Novo Professor</S.ModalTitle>
              <S.ModalInput
                type="text"
                placeholder="Nome do Professor"
                value={newProfessor.name}
                onChange={(e) => setNewProfessor({ ...newProfessor, name: e.target.value })}
              />
              <S.ModalInput
                type="email"
                placeholder="Email do Professor (deve conter 'teacher.')"
                value={newProfessor.email}
                onChange={(e) => {
                  setNewProfessor({ ...newProfessor, email: e.target.value });
                  validateEmail(e.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                placeholder="Senha do Professor"
                value={newProfessor.password}
                onChange={(e) => setNewProfessor({ ...newProfessor, password: e.target.value })}
              />
              <S.ModalActions>
                <S.ModalButton onClick={handleAddProfessor} disabled={!isEmailValid}>
                  Adicionar
                </S.ModalButton>
                <S.ModalButtonCancel onClick={() => setShowModal(false)}>Cancelar</S.ModalButtonCancel>
              </S.ModalActions>
            </S.ModalContent>
          </S.ModalOverlay>
        )}
      </S.Container>
    </LayoutBase>
  );
};

export default Professores;
