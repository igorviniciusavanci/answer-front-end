import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-left: 15px;
  color: #484848;
`;
