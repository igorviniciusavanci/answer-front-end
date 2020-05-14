import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
`;

export const ContentBotton = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

export const AnswerIndicator = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  p {
    font-size: 15px;
    line-height: 15px;
    margin-left: 5px;
  }
`;

export const Question = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-left: 35px;
  margin-top: 10px;
  margin-bottom: 20px;
  color: #505050;
`;

export const UserContent = styled.div`
  display: flex;
  align-items: center;
`;
