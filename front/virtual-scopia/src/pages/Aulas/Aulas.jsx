import React, { useState, useEffect, useRef } from 'react';
import * as S from './styles'; 
import LayoutBase from '@components/LayoutBase/LayoutBase';
import pen from '@assets/solar_pen-bold.png';
import uploadIcon from '@assets/Vector.png'; 

const aulasMock = [
  { id: 1, title: 'Aula de Matemática', description: 'Introdução ao cálculo diferencial' },
  { id: 2, title: 'Aula de Física', description: 'Leis de Newton e suas aplicações' },
  { id: 3, title: 'Aula de Química', description: 'Reações químicas básicas' },
  { id: 4, title: 'Aula de Biologia', description: 'Estudo das células' },
  { id: 5, title: 'Aula de História', description: 'Revolução Industrial' },
];

const Aulas = () => {
  const [selectedAula, setSelectedAula] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal
  const [dragging, setDragging] = useState(false); // Estado para o arrastar
  const [file, setFile] = useState(null); // Estado para armazenar o arquivo
  const [modalFile, setModalFile] = useState(null); // Estado para armazenar o arquivo no modal
  const [selectedImage, setSelectedImage] = useState(null); // Estado para a imagem carregada
  const inputFileRef = useRef(null); // Referência para o input de arquivos
  const aulaCardRef = useRef(null); 
  const aulas = Array(5).fill('Aula - 1');
  const modalRef = useRef(null);
  const dropAreaRef = useRef(null); // Referência para a área de drop fora do modal
  const modalDropAreaRef = useRef(null); // Referência para a área de drop dentro do modal

  const handleSelectAula = (index) => {
    setSelectedAula(selectedAula === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false); // Fecha o modal ao clicar fora
    }
  };

  const handleEditClick = () => {
    setIsModalOpen(true); // Apenas abre o modal
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false); // Apenas fecha o modal
  };
  
  const handleDragOver = (e) => {
    e.preventDefault(); // Previne o comportamento padrão
    e.stopPropagation();
    setDragging(true); // Quando o arquivo é arrastado para a área
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false); // Quando o arquivo sai da área
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    
    const droppedFile = e.dataTransfer.files[0]; 
    setFile(droppedFile); 
    console.log("Arquivo solto fora do modal: ", droppedFile);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result); 
      };
      reader.readAsDataURL(file); 
    }
  };

  const handleModalDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };
  
  const handleModalDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };
  
  const handleModalDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    setModalFile(droppedFile);
    console.log("Arquivo solto dentro do modal: ", droppedFile);
  };

  const handleClickOnFoto = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click(); // Abre o seletor de arquivos ao clicar no botão "Foto"
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <LayoutBase userType="professor">
      <S.Container>
        <S.Title>Suas Aulas</S.Title>
        <hr />
        <S.AulasSection>
          <S.AulasGrid>
            {aulas.map((aula, index) => (
              <S.AulaCard
                key={index}
                ref={aulaCardRef} 
                onClick={() => handleSelectAula(index)}
              >
                
                <S.Foto >
                Foto
                </S.Foto>
                <S.AulaName>{aula}</S.AulaName>

                {selectedAula === index && ( 
                  <S.MoreOptions>
                    <S.OptionsMenu>
                      <li onClick={handleEditClick}>Editar</li> 
                      <li>Excluir</li>
                    </S.OptionsMenu>
                  </S.MoreOptions>
                )}
              </S.AulaCard>
            ))}
          </S.AulasGrid>
        </S.AulasSection>

        <S.NewAulaSection>
          <S.Subtitle>Suba uma nova aula !</S.Subtitle>
          <S.UploadContainer
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            ref={dropAreaRef}
            $dragging={dragging} 
          >
            <S.UploadIcon>
              <img src={uploadIcon} alt="Ícone de upload" />
            </S.UploadIcon>
            <S.UploadText>
              {file ? `Arquivo selecionado: ${file.name}` : 'Arraste seu arquivo .mp4 aqui'}
            </S.UploadText>
            <S.InputContainer>
              <S.InputLabel>Título</S.InputLabel>  
              <S.InputWrapper>
                <S.InputIcon>
                  <img src={pen} alt="Ícone de caneta" />
                </S.InputIcon>
                <S.Input placeholder="" />
              </S.InputWrapper>
              <S.UploadButton 
                onClick={handleClickOnFoto} 
                onDragOver={handleDragOver} 
                onDragLeave={handleDragLeave} 
                onDrop={handleDrop}
              >
                Foto
              </S.UploadButton>
            </S.InputContainer>
            <S.UploadText>Arraste seu arquivo .png aqui</S.UploadText>
          </S.UploadContainer>
        </S.NewAulaSection>

        <input
          type="file"
          ref={inputFileRef}
          style={{ display: 'none' }}
          accept="image/*"
          onChange={handleImageChange}
        />

        {isModalOpen && (
          <S.ModalOverlay>
            <S.ModalContent ref={modalRef}>
              <S.ModalTitle>Atualize a sua aula!</S.ModalTitle>
              <S.ModalUploadContainer
                onDragOver={handleModalDragOver}
                onDragLeave={handleModalDragLeave}
                onDrop={handleModalDrop}
                ref={modalDropAreaRef}
                $dragging={dragging} 
              >
                <S.ModalUploadIcon>
                  <img src={uploadIcon} alt="Ícone de upload" />
                </S.ModalUploadIcon>
                <S.ModalUploadText>
                  {modalFile ? `Arquivo selecionado: ${modalFile.name}` : 'Arraste seu arquivo .mp4 aqui'}
                </S.ModalUploadText>
              </S.ModalUploadContainer>
              <S.ModalInputContainer>
                <S.ModalInputLabel>Título</S.ModalInputLabel>
                <S.ModalInputWrapper>
                  <S.ModalInputIcon>
                    <img src={pen} alt="Ícone de caneta" />
                  </S.ModalInputIcon>
                  <S.ModalInput placeholder="Digite o título da aula" />
                </S.ModalInputWrapper>
                <S.UploadButton 
                onClick={handleClickOnFoto} 
                onDragOver={handleDragOver} 
                onDragLeave={handleDragLeave} 
                onDrop={handleDrop}
              >
                Foto
              </S.UploadButton>
              </S.ModalInputContainer>
              <S.ModalUploadText>Arraste seu arquivo .png aqui</S.ModalUploadText>
              <S.ModalConfirmButton onClick={handleCloseModal}>Confirmar</S.ModalConfirmButton>
            </S.ModalContent>
          </S.ModalOverlay>
        )}
      </S.Container>
    </LayoutBase>
  );
};

export default Aulas;
