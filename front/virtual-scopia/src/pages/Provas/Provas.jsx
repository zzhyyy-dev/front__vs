import React, { useState, useRef, useEffect } from 'react';
import * as S from './styles';
import LayoutBase from '@components/LayoutBase/LayoutBase';
import pen from '@assets/solar_pen-bold.png';
import Exercicio from '@assets/Exercicio.png';
import Pinça from '@assets/Pinça.png';
import Nivel from '@assets/Nivel.png';
import { provasTeacher, Exercicios, addSession, createChallenge } from '@services/api/authService';

const Provas = () => {
  const [selectedProva, setSelectedProva] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const [nomeProva, setNomeProva] = useState('');
  const [nivelProva, setNivelProva] = useState('');
  const [descricaoProva, setDescricaoProva] = useState('');
  const [provas, setProvas] = useState(() => JSON.parse(localStorage.getItem('provasTeacher')) || []); 
  const [rodadas, setRodadas] = useState([{ id: 1 }]);
  const [exercicios, setExercicios] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Nova mensagem de erro
  const inputFileRef = useRef(null);

  useEffect(() => {
    const fetchProvas = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) return;

      try {
        const cachedProvas = JSON.parse(localStorage.getItem('provasTeacher') || '[]');
        const newProvas = await provasTeacher(userId);

        if (newProvas && JSON.stringify(newProvas) !== JSON.stringify(cachedProvas)) {
          setProvas(newProvas);
          localStorage.setItem('provasTeacher', JSON.stringify(newProvas));
        }
      } catch (error) {
        console.error('Erro ao buscar provas:', error);
      }
    };

    const intervalId = setInterval(fetchProvas, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const handleSelectProva = (index) => {
    setSelectedProva(selectedProva === index ? null : index);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setModalStep(1);
    setSuccessMessage('');
    setErrorMessage(''); // Reseta a mensagem de erro ao abrir o modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSuccessMessage('');
    setErrorMessage(''); // Limpa as mensagens ao fechar o modal
  };

  const handleNextStep = async () => {
    if (modalStep === 1) {
      const data = await Exercicios();
      setExercicios(data);
    }
    if (modalStep < 4) {
      setModalStep((prevStep) => prevStep + 1);
    } else {
      closeModal();
    }
  };

  const handleAddRound = () => {
    setRodadas((prevRodadas) => [...prevRodadas, { id: prevRodadas.length + 1 }]);
  };

  const handleConfirmSession = async () => {
    try {
      const exercises = rodadas.map((rodada, index) => ({
        order: index + 1,
        exercises_id: parseInt(rodada.exerciseId),
      }));

      const sessionData = await addSession(exercises, nivelProva);
      const sessionId = sessionData.id;

      const teacherId = parseInt(localStorage.getItem('userId'));
      const challengeDescription = descricaoProva;
      const challengeName = nomeProva;

      const challengeData = await createChallenge(sessionId, challengeDescription, teacherId, challengeName);
      console.log("Desafio criado com ID:", challengeData.id);
      closeModal();
      alert("Sua prova foi criada com sucesso!"); 
    } catch (error) {
      closeModal();
      alert("Erro ao criar a prova. Tente novamente.");
    }
  };

  return (
    <LayoutBase userType="professor">
      <S.Container>
        <S.Title>Suas Provas</S.Title>
        <hr />
        <S.AulasSection>
          <S.AulasGrid>
            {provas.map((prova, index) => (
              <S.AulaCard key={prova.id} onClick={() => handleSelectProva(index)}>
                <S.Foto>Foto</S.Foto>
                <S.AulaName>{prova.name || 'Prova sem nome'}</S.AulaName>
                {selectedProva === index && (
                  <S.MoreOptions>
                    <S.OptionsMenu>
                      <li>Editar</li>
                      <li>Excluir</li>
                    </S.OptionsMenu>
                  </S.MoreOptions>
                )}
              </S.AulaCard>
            ))}
          </S.AulasGrid>
        </S.AulasSection>

        <S.NewAulaSection>
          <S.Subtitle>Suba uma nova Prova!</S.Subtitle>
          <hr />
          <S.InputContainer>
            <S.UploadButton onClick={openModal}>Criar Prova</S.UploadButton>
          </S.InputContainer>
        </S.NewAulaSection>

        {isModalOpen && (
          <S.ModalOverlay>
            <S.ModalContent>
            <S.CloseButton onClick={closeModal}>×</S.CloseButton>
              <S.DotsProgress>
                <span className={modalStep === 1 ? "active" : ""}></span>
                <span className={modalStep === 2 ? "active" : ""}></span>
                <span className={modalStep === 3 ? "active" : ""}></span>
              </S.DotsProgress>

              {modalStep === 1 ? (
                <>
                  <S.ModalTitle>Insira a data e Nome da Prova abaixo.</S.ModalTitle>
                  <S.InputContainer>
                    <S.InputLabel>Nome</S.InputLabel>
                    <S.InputWrapper>
                      <S.InputIcon><img src={pen} alt="Ícone de caneta" /></S.InputIcon>
                      <S.Input
                        type="text"
                        value={nomeProva}
                        onChange={(e) => setNomeProva(e.target.value)}
                        placeholder="Prova - 1"
                      />
                    </S.InputWrapper>
                  </S.InputContainer>
                  <S.InputContainer>
                    <S.InputLabel>Nível</S.InputLabel>
                    <S.InputWrapper>
                      <S.Input
                        as="select"
                        value={nivelProva}
                        onChange={(e) => setNivelProva(e.target.value)}
                      >
                        <option value="Begginer">Begginer</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                      </S.Input>
                    </S.InputWrapper>
                  </S.InputContainer>
                  <S.InputContainer>
                    <S.InputLabel>Descrição</S.InputLabel>
                    <S.TextAreaWrapper>
                      <S.InputIcon><img src={pen} alt="Ícone de caneta" /></S.InputIcon>
                      <S.TextArea
                        value={descricaoProva}
                        onChange={(e) => setDescricaoProva(e.target.value)}
                      />
                    </S.TextAreaWrapper>
                  </S.InputContainer>
                </>
              ) : modalStep === 2 ? (
                <>
                  <S.ModalTitle>Configure a sua prova.</S.ModalTitle>
                  {rodadas.map((rodada, index) => (
                    <div key={rodada.id}>
                      <S.RoundTitle>Rodada-{rodada.id}</S.RoundTitle>
                      <S.InputContainer>
                        <S.InputLabel>Exercício</S.InputLabel>
                        <S.InputWrapper>
                          <S.InputIcon><img src={Exercicio} alt="Ícone de exercício" /></S.InputIcon>
                          <S.Input
                            as="select"
                            value={rodadas[index]?.exerciseId || ""}
                            onChange={(e) => {
                              const newRodadas = [...rodadas];
                              newRodadas[index] = {
                                ...newRodadas[index],
                                exerciseId: e.target.value
                              };
                              setRodadas(newRodadas);
                            }}
                          >
                            <option value="">Selecione um exercício</option>
                            {exercicios.map((exercicio) => (
                              <option key={exercicio.id} value={exercicio.id}>
                                {exercicio.name}
                              </option>
                            ))}
                          </S.Input>
                        </S.InputWrapper>
                      </S.InputContainer>

                      <S.HandInputsContainer>
                        <S.InputLabelSmall>Mão-Direita</S.InputLabelSmall>
                        <S.InputLabelSmall>Mão-Esquerda</S.InputLabelSmall>
                      </S.HandInputsContainer>
                      <S.HandInputsContainer>
                        <S.SmallInputWrapper>
                          <S.InputIcon><img src={Pinça} alt="Ícone de mão-direita" /></S.InputIcon>
                          <S.Input
                            type="text"
                            placeholder={exercicios.find((ex) => ex.id === parseInt(rodadas[index]?.exerciseId))?.rightToolName || "Selecionar Exercício"}
                            readOnly
                          />
                        </S.SmallInputWrapper>
                        <S.SmallInputWrapper>
                          <S.InputIcon><img src={Pinça} alt="Ícone de mão-esquerda" /></S.InputIcon>
                          <S.Input
                            type="text"
                            placeholder={exercicios.find((ex) => ex.id === parseInt(rodadas[index]?.exerciseId))?.leftToolName || "Selecionar Exercício"}
                            readOnly
                          />
                        </S.SmallInputWrapper>
                      </S.HandInputsContainer>
                      <S.InputContainer>
                        <S.InputLabel>Dificuldade</S.InputLabel>
                        <S.SmallInputWrapper>
                          <S.InputIcon><img src={Nivel} alt="Ícone de nível" /></S.InputIcon>
                          <S.Input
                            type="text"
                            placeholder={exercicios.find((ex) => ex.id === parseInt(rodadas[index]?.exerciseId))?.difficulty || "Selecionar Exercício"}
                            readOnly
                          />
                        </S.SmallInputWrapper>
                      </S.InputContainer>
                    </div>
                  ))}
                  <S.AddRoundText onClick={handleAddRound}>+ Adicionar rodada</S.AddRoundText>
                </>
              ) : (
                <>
  <S.ModalTitle>Confirme as configurações da Prova</S.ModalTitle>
  <S.ConfirmationContainer>
    <p><strong>Nome:</strong> {nomeProva}</p>
    <p><strong>Nível:</strong> {nivelProva}</p>
    <p><strong>Descrição:</strong> {descricaoProva}</p>
  </S.ConfirmationContainer>

  {rodadas.map((rodada) => {
    const exercicioSelecionado = exercicios.find((ex) => ex.id === parseInt(rodada.exerciseId));
    return (
      <div key={rodada.id}>
        <S.RoundTitle>Rodada-{rodada.id}</S.RoundTitle>
        <S.InputContainer>
          <S.InputLabel>Exercício</S.InputLabel>
          <S.InputWrapper>
            <S.InputIcon><img src={Exercicio} alt="Ícone de exercício" /></S.InputIcon>
            <S.Input
              type="text"
              placeholder={exercicioSelecionado?.name || ""}
              readOnly
            />
          </S.InputWrapper>
        </S.InputContainer>

        <S.InputContainer>
          <S.InputLabel>Dificuldade</S.InputLabel>
          <S.SmallInputWrapper>
            <S.InputIcon><img src={Nivel} alt="Ícone de nível" /></S.InputIcon>
            <S.Input
              type="text"
              placeholder={exercicioSelecionado?.difficulty || ""}
              readOnly
            />
          </S.SmallInputWrapper>
        </S.InputContainer>

        <S.HandInputsContainer>
          <S.InputLabelSmall>Mão-Direita</S.InputLabelSmall>
          <S.InputLabelSmall>Mão-Esquerda</S.InputLabelSmall>
        </S.HandInputsContainer>
        <S.HandInputsContainer>
          <S.SmallInputWrapper>
            <S.InputIcon><img src={Pinça} alt="Ícone de mão-direita" /></S.InputIcon>
            <S.Input
              type="text"
              placeholder={exercicioSelecionado?.rightToolName || ""}
              readOnly
            />
          </S.SmallInputWrapper>
          <S.SmallInputWrapper>
            <S.InputIcon><img src={Pinça} alt="Ícone de mão-esquerda" /></S.InputIcon>
            <S.Input
              type="text"
              placeholder={exercicioSelecionado?.leftToolName || ""}
              readOnly
            />
          </S.SmallInputWrapper>
        </S.HandInputsContainer>
      </div>
    );
  })}
  <S.ModalConfirmButton onClick={handleConfirmSession}>Confirmar</S.ModalConfirmButton>
</>
              )}
              {modalStep < 3 && (
                <S.ModalConfirmButton onClick={handleNextStep}>Avançar</S.ModalConfirmButton>
              )}
            </S.ModalContent>
          </S.ModalOverlay>
        )}
      </S.Container>
    </LayoutBase>
  );
};

export default Provas;