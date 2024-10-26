import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import * as S from './styles'; 
import LayoutBase from '@components/LayoutBase/LayoutBase';
import { getAllStudents, addStudent, deleteUser } from '@services/api/authService'; 
import pontinhos from '@assets/3p.png';

const AlunosAdm = () => {
  const [alunos, setAlunos] = useState(JSON.parse(localStorage.getItem('alunos')) || []);
  const [userType, setUserType] = useState(localStorage.getItem('userType') || '');
  const [showMenu, setShowMenu] = useState(false);
  const [selectedAluno, setSelectedAluno] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newAluno, setNewAluno] = useState({ name: '', email: '', password: '', classId: '' });
  const [isEmailValid, setIsEmailValid] = useState(false);
  const navigate = useNavigate();

  const fetchAlunos = async () => {
    try {
      const data = await getAllStudents();
      const cachedAlunos = JSON.parse(localStorage.getItem('alunos')) || [];
      
      if (JSON.stringify(data) !== JSON.stringify(cachedAlunos)) {
        setAlunos(data);
        localStorage.setItem('alunos', JSON.stringify(data));
      }
    } catch (error) {
      console.error('Erro ao buscar alunos:', error);
    }
  };

  useEffect(() => {
    if (!userType) {
      navigate('/');
      return;
    }

    fetchAlunos();
    const intervalId = setInterval(fetchAlunos, 30000);
    return () => clearInterval(intervalId);
  }, [navigate, userType]);

  const validateEmail = (email) => {
    const isValid = email.includes("student.");
    setIsEmailValid(isValid);
  };

  const handleAddAluno = () => {
    if (!isEmailValid) return;

    addStudent(newAluno)
      .then((data) => {
        setAlunos((prevAlunos) => [...prevAlunos, data]);
        localStorage.setItem('alunos', JSON.stringify([...alunos, data]));
        console.log('Novo aluno adicionado:', data);
        setShowModal(false);
      })
      .catch((error) => console.error('Erro ao adicionar aluno:', error));
  };

  const handleDeleteAluno = (id) => {
    deleteUser('student', id)
      .then((success) => {
        if (success) {
          const updatedAlunos = alunos.filter(aluno => aluno.id !== id);
          setAlunos(updatedAlunos);
          localStorage.setItem('alunos', JSON.stringify(updatedAlunos));
          console.log('Aluno excluído com sucesso');
        }
      })
      .catch((error) => console.error('Erro ao excluir aluno:', error));
  };



  return (
    <LayoutBase userType={userType}>
      <S.Container>
        <S.Header>
          <S.Title>Todos os Alunos</S.Title>
          <S.NewAlunoButton onClick={() => setShowModal(true)}>Novo Aluno</S.NewAlunoButton>
        </S.Header>
        <hr />
        <S.AlunoGrid>
          {alunos.map((aluno) => (
            <S.AlunoCard key={aluno.id}>
              <S.Foto>Foto</S.Foto>
              <S.AlunoName>{aluno.name}</S.AlunoName>
              <S.PontinhosIcon 
                src={pontinhos} 
                alt="Opções" 
                onClick={(e) => {
                  e.stopPropagation(); 
                  setSelectedAluno(aluno);
                  setShowMenu(!showMenu);
                }} 
              /> 
              {showMenu && selectedAluno?.id === aluno.id && (
                <S.OptionsMenu>
                  <li onClick={() => handleDeleteAluno(aluno.id)}>
                    Excluir
                  </li>
                </S.OptionsMenu>
              )}
              <S.AlunoEmail>{aluno.email}</S.AlunoEmail>
            </S.AlunoCard>
          ))}
        </S.AlunoGrid>

        {showModal && (
          <S.ModalOverlay>
            <S.ModalContent>
              <S.ModalTitle>Adicionar Novo Aluno</S.ModalTitle>
              <S.ModalInput
                type="text"
                placeholder="Nome do Aluno"
                value={newAluno.name}
                onChange={(e) => setNewAluno({ ...newAluno, name: e.target.value })}
              />
              <S.ModalInput
                type="email"
                placeholder="Email do Aluno (deve conter 'student.')"
                value={newAluno.email}
                onChange={(e) => {
                  setNewAluno({ ...newAluno, email: e.target.value });
                  validateEmail(e.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                placeholder="Senha do Aluno"
                value={newAluno.password}
                onChange={(e) => setNewAluno({ ...newAluno, password: e.target.value })}
              />
              <S.ModalInput
                type="number"
                placeholder="ID da Turma"
                value={newAluno.classId}
                onChange={(e) => setNewAluno({ ...newAluno, classId: e.target.value })}
              />
              <S.ModalActions>
                <S.ModalButton onClick={handleAddAluno} disabled={!isEmailValid}>
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

export default AlunosAdm;
