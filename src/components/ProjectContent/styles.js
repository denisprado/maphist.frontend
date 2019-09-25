import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.8);
  margin: 40px 20px;
  border-radius: 5px;
  padding: 40px;
  width: 50%;
  * {
    margin-bottom: 20px;
  }
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DeleteIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #7159c1;
  font-weight: bold;
  font-size: 18px;
  border: none;
  margin: 0px;
  height: 0px;
`;
