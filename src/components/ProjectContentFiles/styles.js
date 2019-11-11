import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
  padding-left: 0;
  align-content: flex-start;
  justify-items: space-between;
  min-width: 265px;
`;

export const Thumb = styled.button`
  margin: 3px;
  padding: 2px;
  border: none;
  background-image: ${(props) => (props.image ? `url("${props.image}")` : null)};
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.2s;
  height: 75px;
  width: 85px;
  background-position: center;
  background-size: cover;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
