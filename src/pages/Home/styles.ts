import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-top: 90px;
  align-self: center;
`;

export const QuestionList = styled.ul`
  margin-top: 20px;
  list-style: none;
  li {
    margin-bottom: 10px;
  }
`;
