import styled from 'styled-components';

export const ProfileCardContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px 10px;
  border-radius: 15px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);
  width: 260px;
  justify-content: space-between;
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.5);
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const UserName = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

export const UserRole = styled.span`
  font-size: 0.85rem;
  color: gray;
  margin-top: 10px;
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    opacity: 0.8;
  }
`;
