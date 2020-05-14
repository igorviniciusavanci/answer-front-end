import React from 'react';
import { Link } from 'react-router-dom';

import { MdChat } from 'react-icons/md';

import {
  Container,
  Content,
  ContentBotton,
  Question,
  AnswerIndicator,
} from './styles';
import NameIcon from '../NameIcon';

interface QuestionProps {
  id: string;
  text: string;
  user: string;
  answerCount: number;
}

const QuestionCard: React.FC<QuestionProps> = ({
  id,
  user,
  text,
  answerCount,
}) => (
  <Container>
    <Content>
      <NameIcon name={user} />
      <Question>{text}</Question>
      <ContentBotton>
        <AnswerIndicator>
          <MdChat color="#1AB800" />
          <p>{`${answerCount} answers`}</p>
        </AnswerIndicator>
        <Link to={`/questions/${id}`}>
          <button type="button">See answer</button>
        </Link>
      </ContentBotton>
    </Content>
  </Container>
);

export default QuestionCard;
