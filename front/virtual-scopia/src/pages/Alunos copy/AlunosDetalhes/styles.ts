import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  width: 100%;
  max-width: 1500px; 
  height: 100%;
  max-height: 900px; 
  overflow: auto; 
  background-color: #FFFFFF; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  border-radius: 10px; 
  margin: 0 auto;
`;

export const ProfileSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;  /* Garante que o container use 100% da largura */
`;

export const ProfilePicture = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2rem;
`;

export const ProfileName = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ProfileTurma = styled.p`
  font-size: 1rem;
  color: #777;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  border: 2px solid #000;
  border-radius: 50px;
  overflow: hidden;
  width: fit-content;
  margin-left: auto;  /* Isso posiciona o container de botões no canto direito */
`;

export const Button = styled.button`
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  border: none;
  background-color: ${({ $active }) => ($active ? '#ff0043' : '#fff')};
  color: ${({ $active }) => ($active ? '#fff' : '#000')};
  outline: none;
  transition: all 0.3s ease;

  &:first-child {
    border-right: 1px solid #000; 
  }
`;

export const DesempenhoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;
`;

export const EstudoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;
`;

export const StatsSection = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const StatsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  border: 1px solid #ff0043;
  border-radius: 15px;
  text-align: center;
  width: 350px;
  height: 350px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 300px; 
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 250px; 
    height: 250px;
  }
`;

export const StatsTitle = styled.h2`
   font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #000; /* Cor preta para o título */
`;

export const TimeDisplay = styled.p`
  font-size: 3rem; /* Tamanho maior do texto */
  font-weight: bold;
  margin: 0; /* Remove margem superior */
`;

export const TimeChange = styled.p`
  font-size: 1.5rem;
  color: #FF004450;
  margin-top: -0.5rem;
  margin-left : 6rem;
`;

export const StatsCircle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 10px solid #ff0043;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  left: 23%;
  margin-bottom: 1rem;
  position: relative; 
`;

export const CirclePercentage = styled.p`
  font-size: 2.5rem; 
  font-weight: bold;
  color: #ff0043;
  position: absolute; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centraliza o texto completamente */
  margin: 0; /* Remove qualquer margem */
`;

export const StatsDetails = styled.p`
  font-size: 1rem;
  color: #777;
  margin-top: 1rem;
`;
