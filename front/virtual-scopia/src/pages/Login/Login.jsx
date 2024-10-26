import React, { useState } from 'react';
import * as S from './styles';
import { loginUser } from '@services/api/authService';  
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const getUserTypeFromEmail = (email) => {
    if (email.startsWith('admin')) {
      return 'administrator';
    } else if (email.startsWith('prof')) {
      return 'teacher';
    } else if (email.startsWith('student')) {
      return 'student';
    } else {
      throw new Error('Tipo de usuário desconhecido');
    }
  };

 

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const userType = getUserTypeFromEmail(email);
    try {
      const data = await loginUser(email, password, userType);
      
      console.log('Login bem-sucedido:', data);
  
      setLoginSuccess(true);
      setLoginError('');
  
     
      if (data.userId) {
        localStorage.setItem('userType', userType);
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('classId', data.classId || ''); 
      } else {
        console.error('userId não encontrado nos dados retornados.');
      }
  
      
      if (userType === 'administrator') {
        navigate('/TurmasAdm');
      } else if (userType === 'teacher') {
        navigate('/turmas');
      } else if (userType === 'student') {
        navigate('/portal-do-aluno');
      }
  
    } catch (error) {
      console.error('Erro ao realizar o login:', error);
      setLoginError(error.message || 'Erro ao tentar se conectar ao servidor. Verifique sua conexão e tente novamente.');
    }
  };

  return (
    <S.LoginPage>
      <S.LoginImage />
      <S.LoginContainer>
        <S.Logo src="/src/assets/Logo_VirtualScopia.png" alt="VirtualScopia Logo" />
        <form onSubmit={handleLogin}>
          <S.FormGroup>
            <S.FormControl
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </S.FormGroup>
          <S.FormGroup>
            <S.FormControl
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </S.FormGroup>
          {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
          {loginSuccess && <p style={{ color: 'green' }}>Login realizado com sucesso!</p>}
          <S.FormFooter>
            <S.ForgotPasswordLink href="/forgot-password">Esqueceu a senha? Clique aqui</S.ForgotPasswordLink>
          </S.FormFooter>
          <S.LoginButton type="submit">Entrar</S.LoginButton>
          <S.SignupLink>
            Ainda não tem uma conta? <a href="/signup">Cadastre-se</a>
          </S.SignupLink>
        </form>
      </S.LoginContainer>
    </S.LoginPage>
  );
};

export default Login;
