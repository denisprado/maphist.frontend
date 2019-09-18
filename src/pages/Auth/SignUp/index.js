import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../../styles/components/Buttons';
import { Container, SignForm, SignInInput } from '../styles';
import AuthActions from '../../../store/ducks/auth';
import { signIn } from '../../../store/sagas/auth';

function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(AuthActions.signUpRequest(data.name, data.email, data.password));
  }

  return (
    <Container>
      <SignForm onSubmit={handleSubmit}>
        <h1>Criar conta</h1>

        <span>Nome</span>
        <SignInInput name="name" />

        <span>E-mail</span>
        <SignInInput type="email" name="email" />

        <span>Senha</span>
        <SignInInput type="password" name="password" />

        <Button size="big" type="submit">
          Criar
        </Button>
      </SignForm>
    </Container>
  );
}

signIn.propTypes = {
  signInRequest: PropTypes.func.isRequired,
};

export default SignUp;
