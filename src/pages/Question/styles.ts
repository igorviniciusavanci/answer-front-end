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

export const UserContent = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  display: flex;
  height: 25px;
  width: 25px;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  margin-right: 10px;
  border: 2px solid #fd4755;
  color: #fd4755;
  font-weight: 600;
  font-size: 15px;
`;

export const QuestionCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-left: 35px;
    margin-top: 10px;
  }
`;
