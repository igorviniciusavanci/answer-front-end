import React from 'react';

import { Container, Content, Answer } from './styles';
import NameIcon from '../NameIcon';

interface QuestionProps {
  id?: string;
  text: string;
  user: string;
}

const AnswerCard: React.FC<QuestionProps> = ({ user, text }) => (
  <Container>
    <Content>
      <NameIcon name={user} />
      <Answer>{text}</Answer>
    </Content>
  </Container>
);

export default AnswerCard;
