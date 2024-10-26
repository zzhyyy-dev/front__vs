import styled from 'styled-components';

// Container principal da página
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

// Container de visão geral
export const OverviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;  // Adiciona espaço entre os cartões
  width: 100%;
  margin-top: 2rem;
`;

// Cartões para progresso, competências e avaliações
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

export const CompetenciasCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  border: 1px solid #ff0043;
  border-radius: 10px;
  padding: 1rem;
  width: 30%; 
  min-width: 250px;
  text-align: center;
  overflow: hidden;  /* Adicionado para garantir que o conteúdo seja cortado se exceder */
  height: auto; /* Ajusta a altura conforme o conteúdo */
  word-wrap: break-word; /* Quebra palavras muito longas */
`;

export const AvaliacoesCard = styled(ProgressCard)`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
`;

// Título dos cartões
export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 5rem;
  align-self: center; // Garante que o título fique no topo do cartão
`;

export const CardTitle2 = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 2rem;
  align-self: center;
`;

// Valor do progresso
export const ProgressValue = styled.p`
  font-size: 2.5rem;
  color: green;
  font-weight: bold;
`;

// Informação do progresso (parte inferior do cartão)
export const ProgressInfo = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin-top: auto; // Mantém o texto na parte inferior
`;

// Competências
export const CompetenciasList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  height: 260px; /* Ajuste a altura de acordo com a necessidade */
  overflow-y: scroll;
  scrollbar-width: none; /* Oculta a barra de rolagem no Firefox */
  -ms-overflow-style: none;  /* Oculta a barra de rolagem no Internet Explorer e no Edge */
  
  /* Oculta a barra de rolagem no Chrome, Safari e outros WebKit */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CompetenciaItem = styled.li`
  display: flex;
  justify-content: space-between;  // Deixa o nome e a pontuação lado a lado
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
`;

export const CompetenciaScore = styled.span`
  font-weight: bold;
  color: ${props => props.$score >= 7 ? 'green' : props.$score >= 5 ? 'orange' : 'red'};
`;

// Avaliações
export const AvaliacaoButtons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
`;

export const AvaliacaoButton = styled.button`
  background-color: #ff0043;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  margin: 0.5rem;
  min-width: 100px;
`;

export const AvaliacaoInfo = styled.p`
  font-size: 0.875rem;
  color: #666;
  text-align: center;
  margin-top: auto; // Isso garantirá que o texto fique na parte inferior do cartão
  padding-top: 1rem;
`;
