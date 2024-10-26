import React from 'react';
import * as S from './styles'; 
import logoutIcon from '@assets/Vector1.png'; 

const UserProfileCard = ({ userName, userRole, userImage, onLogout }) => {
  return (
    <S.ProfileCardContainer>
      <S.ProfileImage src={userImage} alt={`${userName} profile`} />
      <S.ProfileInfo>
        <S.UserName>{userName}</S.UserName>
        <S.UserRole>{userRole}</S.UserRole>
      </S.ProfileInfo>
      <S.LogoutButton onClick={onLogout}>
        <img src={logoutIcon} alt="Logout Icon" />
      </S.LogoutButton>
    </S.ProfileCardContainer>
  );
};

export default UserProfileCard;
