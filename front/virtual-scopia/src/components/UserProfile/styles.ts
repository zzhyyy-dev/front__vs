import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin-bottom: 1rem;
`;

export const UserImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  margin-right: 1rem;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.h4`
  font-size: 1.25rem;
  margin: 0;
`;

export const UserRole = styled.p`
  font-size: 0.875rem;
  color: #666;
`;
