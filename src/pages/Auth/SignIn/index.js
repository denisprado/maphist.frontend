import React from 'react';
import Button from '../../../styles/components/Buttons';

import { Container, SignForm } from '../styles';

const SignIn = () => (
  <Container>
    <SignForm onSubmit={() => {}}>
      <h1>Boas vindas</h1>

      <span>E-mail</span>
      <input type="email" name="email" value="" />

      <span>Senha</span>
      <input type="password" name="password" />

      <Button size="big" type="submit">
        Entrar
      </Button>
    </SignForm>
  </Container>
);

export default SignIn;
