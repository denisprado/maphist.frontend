import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  min-width: 25%;
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
  flex-direction: row;
  flex-flow: row;
  justify-content: space-between;
  width: 100%;
  border: none;
  display: flex;
  flex-grow: 1;
  background: ${(props) =>
    (props.active ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.2)")};
  margin: 0 0 20px;
  border: ${(props) => props.active && '2px solid #7159c1'};
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 18px;
  transition: all 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
`;
