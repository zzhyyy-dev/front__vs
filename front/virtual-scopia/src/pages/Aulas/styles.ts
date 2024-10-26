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

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  margin-bottom: 2rem;
`;
export const MoreIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    opacity: 0.8; 
  }
`;



export const AulasSection = styled.div`
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

export const AulasGrid = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: scroll;
  padding-bottom: 1rem;
`;

export const AulaCard = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5); 
  text-align: center;
  min-width: 250px;
  position: relative;
  cursor: pointer;
`;

export const Foto  = styled.div`
  width: 80px;
  height: 80px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem auto;
`;

export const AulaName = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0.5rem;
`;

export const MoreOptions = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const OptionsMenu = styled.ul`
  display: block; /* Garantindo que será visível quando ativo */
  position: absolute;
  right: 0;
  top: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Sombra suave */
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 100;

  li {
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    gap: 0.5rem;

    &:hover {
      background-color: #f1f1f1;
    }

    &:nth-child(1) {
      color: black;
    }

    &:nth-child(2) {
      color: #ff0043;
    }

    &:nth-child(2) svg {
      fill: #ff0043;
    }

    &:nth-child(1) svg {
      fill: black;
    }
  }
`;

export const OptionIcon = styled.span`
  font-size: 1.2rem;
`;

export const NewAulaSection = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const UploadContainer = styled.div`
  padding: 2rem;
  border: 2px dashed ${props => props.$dragging ? '#00bfff' : '#ccc'}; // Use $ para transient props
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.$dragging ? '#f0f8ff' : 'transparent'};
  transition: background-color 0.3s ease, border-color 0.3s ease;
`;

export const UploadIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  img {
    width: 50px;  /* Ajuste o tamanho do ícone de upload aqui */
    height: 50px;
    object-fit: contain;
  }
`;

export const UploadText = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #000;
  font-weight: bold;
`;


export const InputContainer = styled.div`
  display: flex;
  flex-direction: column; /* Organiza o label e o input em coluna */
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const InputLabel = styled.label`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.25rem; /* Espaço entre o título e o campo */
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 250px; /* Ajuste a largura */
`;

export const InputIcon = styled.span`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: #888;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const Input = styled.input`
  padding: 0.7rem 0.7rem 0.7rem 3rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  font-size: 1rem;
  outline: none;
  color: #333;
`;

export const UploadButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  background: black;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  width: 100%;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6); /* Escurecendo um pouco mais */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 30px; /* Aumentando o padding para dar mais espaço */
  border-radius: 20px; /* Bordas mais arredondadas */
  width: 400px;
  text-align: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1); /* Sombra mais suave */
  z-index: 1001;
  font-family: 'Arial', sans-serif; /* Fonte mais clean */
`;

export const ModalTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

export const ModalUploadContainer = styled.div`
  /* Estilos para o container de upload no modal */
  padding: 2rem;
  border: 2px dashed ${props => props.$dragging ? '#00bfff' : '#ccc'};
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.$dragging ? '#f0f8ff' : 'transparent'};
  transition: background-color 0.3s ease, border-color 0.3s ease;
`;

export const ModalUploadIcon = styled.div`
  font-size: 50px; /* Aumentando o tamanho do ícone */
  margin-bottom: 10px;
  color: #000; /* Deixando a cor preta para combinar com o estilo minimalista */
  img {
    width: 50px;
    height: 50px;
  }
`;

export const ModalUploadText = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  color: #555; /* Tom de cinza mais suave para o texto */
`;

export const ModalInputContainer = styled.div`
  margin-bottom: 20px;
`;

export const ModalInputLabel = styled.label`
  display: block;
  margin-right: 15rem;
  margin-bottom: 0.2rem;
  margin-top: 1.5rem;
`;

export const ModalInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #f9f9f9; /* Fundo claro */
`;

export const ModalInputIcon = styled.div`
  margin-right: 10px;
  color: #888; /* Ícone com cor suave */
  img {
    width: 20px;
    height: 20px;
  }
`;

export const ModalInput = styled.input`
  border: none; /* Remover bordas */
  width: 100%;
  outline: none;
  background-color: transparent; /* Mantém o fundo transparente */
  font-size: 1rem;
  color: #333; /* Cor do texto mais escura */
`;

export const ModalUploadButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  background: black;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  width: 100%;
`;

export const ModalConfirmButton = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50; /* Verde mais suave */
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 10px; /* Bordas arredondadas */
  font-size: 16px;
  margin-top: 15px;
  width: 100%;
`;
