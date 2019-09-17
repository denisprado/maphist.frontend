import React from 'react';
import { Provider } from 'react-redux';
import ReduxToaster from 'react-redux-toastr';
import Routes from './routes';
import store from './store';
import GlobalStyle from './styles/global';

const App = () => (
  <Provider store={store}>
    <>
      <ReduxToaster />
      <Routes />
      <GlobalStyle />
    </>
  </Provider>
);

export default App;
