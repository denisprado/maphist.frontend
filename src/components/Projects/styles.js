import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: scroll;
  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 20px;

    h1 {
      font-size: 20px;
    }

    div {
      button {
        margin-left: 10px;
      }
    }
  }
`;

export const Project = styled.button`
  flex: 1;
  flex-direction: column;
  flex-flow: column-nowrap;
  width: 100%;
  border: none;
  display: flex;
  flex-grow: 1;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  border-radius: 5px;
  margin: 0 0 20px;
  padding: 20px;
  font-size: 18px;
  transition: all 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
`;
