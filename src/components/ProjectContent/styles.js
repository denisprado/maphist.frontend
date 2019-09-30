import styled from 'styled-components';
import Button from '../../styles/components/Buttons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.8);
  margin: 30px 20px;
  border-radius: 5px;
  padding: 20px;
  width: 1024px;
`;

export const ProjectHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ProjectBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-stretch;
  overflow-y: auto;
`;

export const ProjectContentMapAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px;
  min-width: 68%;
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
