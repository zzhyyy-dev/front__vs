import React, { useEffect, useState } from 'react';
import * as S from './styles'; 
import UserProfileCard from '@components/UserProfileCard/UserProfileCard'; 
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from '@services/api/authService'; 
import Profile from '@assets/pngegg.png';

const Menu = () => {
  const [activeItem, setActiveItem] = useState('');
  const [userType, setUserType] = useState('');
  const [userInfo, setUserInfo] = useState(null); 
  const [initialNavigation, setInitialNavigation] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const savedUserType = localStorage.getItem('userType');
    const userId = localStorage.getItem('userId');
    const cachedUserInfo = localStorage.getItem('userInfo'); 
  
    if (savedUserType && userId) {
      setUserType(savedUserType);
  
      if (cachedUserInfo) {
        setUserInfo(JSON.parse(cachedUserInfo)); 
      } else {
        getUserInfo(savedUserType, userId)
          .then((data) => {
            setUserInfo(data);
            localStorage.setItem('userInfo', JSON.stringify(data)); 
          })
          .catch((error) => {
            console.error('Erro ao buscar informações do usuário:', error);
          });
      }
    }
  }, [navigate, initialNavigation]);
  
  const handleLogout = () => {
    // Limpa todo o conteúdo do localStorage
    localStorage.clear();
  
    // Verifica se o localStorage está realmente vazio
    if (localStorage.length === 0) {
      console.log('Local storage limpo com sucesso.');
    } else {
      console.warn('Ainda há dados no localStorage:', localStorage);
    }
  
    // Redireciona para a página inicial (ou de login)
    navigate('/');
  };

  const menuOptions = {
    administrator: [
      { name: 'Turmas', link: '/TurmasAdm' },
      { name: 'Alunos', link: '/AlunosAdm' },
      { name: 'Professores', link: '/professores' },
    ],
    teacher: [
      { name: 'Turmas', link: '/turmas' },
      { name: 'Aulas', link: '/aulas' },
      { name: 'Provas', link: '/provas' },
    ],
    student: [
      { name: 'Portal do Aluno', link: '/portal-do-aluno' },
      { name: 'Provas', link: '/ProvasStudent' },
    ],
  };

  if (!userType || !userInfo) {
    return null; 
  }

  return (
    <S.MenuContainer>
      <S.Logo src="/src/assets/logo_virtualscopia.png" alt="VirtualScopia Logo" />
      <S.MenuTitle>Menu</S.MenuTitle>
      <S.MenuList>
        {menuOptions[userType]?.map((option) => (
          <S.MenuItem key={option.name}>
            <S.MenuLink
              to={option.link}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setActiveItem(option.link)}
            >
              {option.name}
            </S.MenuLink>
          </S.MenuItem>
        ))}
      </S.MenuList>

      <S.UserProfileWrapper>
      <UserProfileCard
          userName={userInfo.name}  
          userRole={userType}       
          userImage={userInfo.imageUrl || Profile} 
          onLogout={handleLogout}   
        />
      </S.UserProfileWrapper>
    </S.MenuContainer>
  );
};

export default Menu;
