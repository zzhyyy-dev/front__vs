import React from 'react';
import * as S from './styles'; 

const AvProva = ({ prova }) => {
  if (!prova || !prova.score) return <p>Carregando dados da prova...</p>;

  const scoreGeral = prova.score.find(item => item.score_geral)?.score_geral;

  return (
    <S.TableContainer>
      <S.TableTitle>{`Detalhes da Prova: ${prova.challengeName}`}</S.TableTitle>
      <S.Table>
        <thead>
          <tr>
            <S.TableHeader>Avaliação</S.TableHeader>
            <S.TableHeader>Gestão de tempo</S.TableHeader>
            <S.TableHeader>Ferramentas</S.TableHeader>
            <S.TableHeader>Eficiência</S.TableHeader>
            <S.TableHeader>Coordenação</S.TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <S.TableCell>Geral</S.TableCell>
            <S.TableCell>{scoreGeral.gestao}</S.TableCell>
            <S.TableCell>{scoreGeral.ferramentas}</S.TableCell>
            <S.TableCell>{scoreGeral.eficiencia}</S.TableCell>
            <S.TableCell>{scoreGeral.coordenação}</S.TableCell>
          </tr>
          {prova.score.filter(item => item.order).map((exercise, index) => (
            <tr key={index}>
              <S.TableCell>{`Exercício ${exercise.order}`}</S.TableCell>
              <S.TableCell>{exercise.score.gestao}</S.TableCell>
              <S.TableCell>{exercise.score.ferramentas}</S.TableCell>
              <S.TableCell>{exercise.score.eficiencia}</S.TableCell>
              <S.TableCell>{exercise.score.coordenação}</S.TableCell>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </S.TableContainer>
  );
};

export default AvProva;
