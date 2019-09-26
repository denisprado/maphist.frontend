import styled from 'styled-components';
import Button from '../../styles/components/Buttons';

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

export const ToolsIcon = styled(Button)`
  margin: 0 8px 0 0;
  svg {
    margin-bottom: 0px;
  }
`;

export const Tools = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
