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
  margin-bottom: 2rem;
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
  cursor: pointer;
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
  position: absolute;
  right: 0;
  top: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 100;

  li {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background-color: #f1f1f1;
    }
    &:nth-child(1) {
      color: black;
    }
    &:nth-child(2) {
      color: #ff0043;
    }
  }
`;

export const NewAulaSection = styled.div`
  margin-top: 2rem;
  text-align: center;
  display: flex;  /* Usar flexbox para centralizar */
  flex-direction: column;
  justify-content: center;  /* Centralizar verticalmente */
  align-items: center;  /* Centralizar horizontalmente */
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  /* Adicionado para centralizar verticalmente */
  margin-top: 2rem;
  width: 100%;  /* Certifique-se de que o contêiner usa a largura total */
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8rem;
`;

export const UploadContainer = styled.div`
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: background-color 0.3s ease, border-color 0.3s ease;
`;

export const UploadIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  img {
    width: 50px;
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
  flex-direction: column;
  align-items: center; /* Centraliza os inputs horizontalmente */
  width: 100%; /* Garante que o contêiner use a largura total */
`;

export const InputLabel = styled.label`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.25rem;
  margin-left: 3rem;
  align-self: flex-start; /* Alinha o texto à esquerda */
`;

export const HandInputContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  max-height: 40px;
  margin-bottom: 20px;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 40px;
  border-radius: 25px;
  width: 450px;
  max-height: 80vh; /* Limita a altura máxima para o conteúdo */
  overflow-y: auto; /* Adiciona scroll vertical */
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  position: relative;
`;

export const TextAreaWrapper = styled(InputWrapper)`
  max-height: 100px; // Altura maior para a descrição
`;

export const TextArea = styled.textarea`
  padding: 10px 10px 10px 40px;
  border: none;
  border-radius: 10px;
  width: 100%;
  font-size: 1rem;
  outline: none;
  resize: none; // Desativa o redimensionamento
  height: 80px; // Define a altura da área de texto
  box-sizing: border-box;
`;

export const DotsProgress = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;

  span {
    width: 10px;
    height: 10px;
    background-color: #d3d3d3;
    border-radius: 50%;
    display: inline-block;
  }

  span.active {
    background-color: #ff0043;
  }
`;


export const Input = styled.input`
  padding: 10px 10px 10px 40px;
  border: none;
  border-radius: 10px;
  width: 100%;
  font-size: 1rem;
  outline: none;
`;

export const ModalConfirmButton = styled.button`
  padding: 12px 30px;
  background-color: #ff0043;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin: 20px auto 0 auto;
  display: block;

  &:hover {
    background-color: #ff3366;
  }
`;

export const AddRoundText = styled.p`
  color: #000;
  font-size: 0.8rem;
  text-align: end;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const InputIcon = styled.span`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  img {
    width: 20px;
    height: 20px;
  }
`;


export const UploadButton = styled.button`
  padding: 10px 20px;
  background-color: #ff0043;
  color: white;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #e6003e;
  }
`;



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




export const ModalTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
`;

export const ConfirmationContainer = styled.div`
  background-color: #f9f9f9; /* Cor de fundo suave */
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra leve */
  text-align: left;
  font-size: 1rem;
  color: #333; /* Cor do texto */

  p {
    margin: 10px 0;
    font-weight: bold;
    display: flex;
    align-items: center;

    strong {
      margin-right: 10px; /* Espaço entre o título e o valor */
      color: #555; /* Cor do título */
    }
  }
`;


export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

export const SecondModalContent = styled(ModalContent)`
  width: 400px;
  text-align: center;
`;

export const HandInputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;
`;

export const InputLabelSmall = styled.span`
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  text-align: center;
  color: #333;
`;

export const HandInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SmallInputWrapper = styled(InputWrapper)`
  width: 100%;
  max-width: 350px; /* mesma largura que o input de Exercício */
`;

export const AddRoundButton = styled.button`
  background: transparent;
  color: #ff0043;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const RoundTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin: 1rem 0;
`;

export const ModalBackButton = styled.button`
  position: absolute;
  left: 15px;
  top: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #ff0043;

  &:hover {
    color: #e6003e;
  }
`;