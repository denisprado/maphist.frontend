import { createGlobalStyle } from 'styled-components';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #353940;
    color:#fff;
    font-family:"Source Sans Pro", sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  textarea {
    padding: 10px;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: rgba(0, 0, 0, 0.1);
    color: #f6f6f6;
    margin-top: 8px;
    transition: border 0.15 ease;
    font-size: 16px;

    &:focus {
      border-color: #7289da;
    }
  }

  html, body, #root{
    height: 100%;
  }

  input, button{
    font-family:"Source Sans Pro", sans-serif;
  }

  button{
    cursor:pointer;
  }

`;

export default GlobalStyle;
