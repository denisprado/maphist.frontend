import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SlideHeader = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const SlideBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  justify-items: center;
  img {
    color: #fff;
    width: 50%;
  }
`;
