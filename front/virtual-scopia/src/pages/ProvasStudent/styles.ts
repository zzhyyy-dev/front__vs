import styled from 'styled-components';

// Container principal da página
export const PortalContainer = styled.div`
  padding: 2rem;
  width: 100%;
  max-width: 1500px; 
  height: 100%;
  max-height: 900px; 
  overflow: auto; 
  background-color: #FFFFFF; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4); 
  border-radius: 10px; 
  margin: 0 auto;
`;

// Mensagem de boas-vindas
export const WelcomeMessage = styled.h2`
  font-size: 1.5rem;
  margin-top: 1rem;
  text-align: center;
  font-weight: 400;
`;


// Grid de provas
export const ProvasGrid = styled.div`
  display: flex;
  justify-content: space-evenly; /* Espaçamento mais uniforme entre os cartões */
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

// Cartões de prova
export const ProvaCard = styled.div`
  background-color: #fff;
  border: 2px solid #ff0043;
  border-radius: 10px;
  padding: 1rem;
  width: 30%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-width: 250px;
  max-width: 350px; /* Define uma largura máxima */
  flex: 1; /* Permite que os cartões ajustem o tamanho conforme o espaço disponível */
  margin-bottom: 2rem; /* Espaçamento abaixo dos cartões para não ficarem colados entre si ao quebrar linha */
`;


export const OverviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;  // Adiciona espaço entre os cartões
  width: 100%;
  margin-top: 2rem;
`;

export const ProgressCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; // Alinha o conteúdo ao topo
  height: 35vh;
  border: 1px solid #ff0043;
  border-radius: 10px;
  padding: 1rem;
  width: 30%;
  text-align: center;
  min-width: 250px;
`;

// Título da prova
export const ProvaTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

export const ProvaInfo = styled.div`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 1rem;
`;

export const ScoreSection = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 10px;
`;

export const ScoreLabel = styled.span`
  font-weight: bold;
  color: #000;
  margin-bottom: 8px;
`;

export const ScoreItem = styled.div`
  font-size: 1.2em;
  color: #000;
  display: flex;
  justify-content: space-between;
`;

export const Date = styled.div`
  margin-top: 15px;
  font-size: 0.85em;
  color: #000;
  text-align: right;
  font-style: italic;
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
`;

export const ProvaStatus = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
