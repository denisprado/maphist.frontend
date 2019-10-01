import styled from 'styled-components';
import { ReactComponent as BackBtn } from '../../assets/images/back.svg';
import { ReactComponent as NextBtn } from '../../assets/images/next.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SlideHeader = styled.div`
  display: flex;
  flex-direction: row-reverse;
  svg {
    color: rgba(0, 0, 0, 0.4);
    width: 25px;
    height: 25px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      color: #7289da;
    }
  }
`;

export const SlideBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: stretch;
  align-items: center;
  height: 640px;
  img {
    color: #fff;
    width: 80%;
  }
`;

export const Back = styled(BackBtn)`
  fill: rgba(0, 0, 0, 0.4);
  width: 100px;
  height: 200px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    fill: #7289da;
  }
`;
export const Next = styled(NextBtn)`
  fill: rgba(0, 0, 0, 0.4);
  width: 100px;
  height: 200px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    fill: #7289da;
  }
`;
