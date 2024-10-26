import React from 'react';
import * as S from './styles'; 

const UserProfile = ({ userName, turma, userImage }) => {
  return (
    <S.ProfileCard>
      <S.UserImage src={userImage} alt="User Image" />
      <S.UserInfo>
        <S.UserName>{userName}</S.UserName>
        <S.UserRole>{turma}</S.UserRole>
      </S.UserInfo>
    </S.ProfileCard>
  );
};

export default UserProfile;
