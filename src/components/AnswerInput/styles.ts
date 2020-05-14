import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 10px;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  padding: 10px 20px;
  p {
    text-align: center;
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    color: #505050;
  }

  textarea {
    resize: none;
    padding: 5px;
    margin: 10px 0px;
  }

  button {
    background-color: #60b7ff;
    color: #fff;
    font-weight: 600;
    border-radius: 5px;
    border: 1px solid transparent;
    align-self: flex-end;
    height: 30px;
    width: 100px;
    cursor: pointer;

    &:hover {
      background: ${shade(0.2, '#60b7ff')};
    }
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-left: 15px;
`;
