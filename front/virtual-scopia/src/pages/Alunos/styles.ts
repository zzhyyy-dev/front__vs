import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  width: 100%;
  max-width: 1500px; 
  height: 100%;
  max-height: 600px; 
  overflow: auto; 
  background-color: #FFFFFF; 
  border-radius: 10px; 
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

export const AlunoGrid = styled.div`
   margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 2rem;  
`;

export const AlunoCard = styled.div`
  padding: 2rem;
  background-color: white; 
  border: 1px solid #e5e7eb; 
  border-radius: 0.5rem; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5); 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px); 
  }
`;

export const Foto = styled.div`
 width: 5rem;
  height: 5rem;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

export const AlunoName = styled.p`
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
`;
