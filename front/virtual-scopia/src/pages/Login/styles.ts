import styled from 'styled-components';

export const LoginPage = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  background-color: #f0f0f0;
`;

export const LoginImage = styled.div`
  flex: 0.4;
  background: url('/src/assets/a9e4237ed39963cb7de9c11c497ce11e 1.png') no-repeat center center;
  background-size: cover;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  height: 100vh;
`;

export const LoginContainer = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 450px;
  margin: auto;
`;

export const Logo = styled.img`
  width: 120px;
  margin-bottom: 30px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const FormControl = styled.input`
  width: 20rem;
  padding: 10px;
  margin-top: 5px;
  border-radius: 50px;
  border: 2px solid #ff0055;
  background-color: transparent;
  font-size: 16px;
  text-align: left;
  
  &:focus {
    outline: none;
    border-color: #ff0055;
  }
`;

export const LoginButton = styled.button`
  background-color: #ff0055;
  color: #fff;
  padding: 15px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 18px;
  width: 100%;
  margin-top: 20px;

  &:hover {
    background-color: #e6004c;
  }
`;

export const FormFooter = styled.div`
  margin-top: 10px;
`;

export const ForgotPasswordLink = styled.a`
  font-size: 14px;
  color: #888;
  text-decoration: none;
`;

export const SignupLink = styled.div`
  margin-top: 20px;
  font-size: 14px;

  a {
    color: #ff0055;
    font-weight: bold;
    text-decoration: none;
  }
`;
