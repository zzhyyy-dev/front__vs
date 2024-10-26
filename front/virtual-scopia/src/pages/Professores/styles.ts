import styled from 'styled-components';

export const Container = styled.div`
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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem; /* Adicionar um espaçamento abaixo do cabeçalho */
`;

export const NewAlunoButton = styled.button`
  background-color: #FF0043;
  color: white;
  padding: 15px 30px; /* Aumentar padding para maior destaque */
  border: none;
  border-radius: 30px; /* Bordas mais arredondadas */
  font-size: 1.2rem; /* Aumentar o tamanho da fonte */
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #E6003E;
  }
`;

/* Estilos para o modal */
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const ModalTitle = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #FF0043;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #E6003E;
  }
`;

export const ModalButtonCancel = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #999;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #777;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem; /* Aumentei um pouco o tamanho da fonte */
  font-weight: bold;
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
  position: relative;
  transition: transform 0.2s ease;

  width: 250px; 
  height: 200px; 
  
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

export const PontinhosIcon = styled.img`
  width: 1.5rem;
  height: 0.5rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
`;

export const OptionsMenu = styled.ul`
  display: block;
  position: absolute;
  top: 2rem; /* Ajusta o alinhamento vertical do menu */
  right: 0; /* Alinha o menu exatamente à direita dos três pontinhos */
  background: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  list-style: none;
  padding: 0.5rem;
  z-index: 100;

  li {
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    gap: 0.5rem;
    border-radius: 10px;

    &:hover {
      background-color: #f1f1f1;
    }

    &:nth-child(2) {
      color: #ff0043;
    }

    &:nth-child(2) svg {
      fill: #ff0043;
    }

    &:nth-child(1) {
      color: black;
    }

    &:nth-child(1) svg {
      fill: black;
    }
  }
`;


export const AlunoEmail = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  text-align: center;
  color: #555;
`;
