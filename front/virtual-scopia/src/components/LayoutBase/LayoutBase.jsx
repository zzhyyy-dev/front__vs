import React from 'react';
import Menu from '../Menu/Menu';
import * as S from './styles';
import { useAuth } from '@context/AuthContext'; // Usar o contexto

const LayoutBase = ({ children }) => {
  const { userType } = useAuth(); // Pegar o userType do contexto

  return (
    <S.LayoutContainer>
      <Menu userType={userType} />
      <S.ContentContainer>
        {children}
      </S.ContentContainer>
    </S.LayoutContainer>
  );
};

export default LayoutBase;
