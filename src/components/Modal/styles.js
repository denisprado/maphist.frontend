import { Form, Input } from '@rocketseat/unform';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: #36393f;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: ${(props) =>
    (props.size === "big" ? 600 : props.size === "slide" ? 1024 : 400)}px;

  h1 {
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    margin: 0 0 10px;
  }
`;

export const ModalForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: space-around;

  span {
    display: flex;
    flex-direction: column;
    color: #b9bbbe;
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
    margin: 30px 30px 0 0;
  }
  > div {
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }

  > button {
    margin: 20px 0 0;
  }
`;

export const ModalInput = styled(Input).attrs({
  multiline: (props) => props.multiline && 'multiline',
  rows: (props) => props.rows && `rows=${props.rows}`,
})`
  display:block;
  min-height: 40px;
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

`;
