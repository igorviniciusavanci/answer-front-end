import React, { useCallback, useEffect, useState } from 'react';

import { RouteComponentProps } from 'react-router-dom';

import Header from '../../components/Header';
import AnswerInput from '../../components/AnswerInput';
import AnswerCard from '../../components/AnswerCard';

import api from '../../service/api';

import {
  Container,
  Content,
  QuestionList,
  UserContent,
  Icon,
  QuestionCard,
} from './styles';

interface AnswerData {
  id: string;
  text: string;
  user: string;
  question_id: string;
}

interface QuestionData {
  id: string;
  text: string;
  user: string;
  created_at: string;
  updated_at: string;
  answer: AnswerData[];
}

interface MatchParams {
  id: string;
}

const Question: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const [question, setQuestion] = useState<QuestionData>({} as QuestionData);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    setRefresh(false);
    async function getQuestionsById(): Promise<void> {
      const questionId = match.params.id;
      const response = await api.get(`questions/${questionId}`);
      setQuestion(response.data);
    }
    getQuestionsById();
  }, [match.params.id, refresh]);

  const handleAnswerSubmit = useCallback(
    async (text: string) => {
      try {
        await api.post('answers', {
          text,
          question_id: question.id,
        });
        setRefresh(true);
      } catch (error) {
        console.log(error);
      }
    },
    [question.id],
  );
  return (
    <Container>
      <Header />
      <Content>
        <QuestionCard>
          <UserContent>
            <Icon>{question.user?.charAt(0).toUpperCase()}</Icon>
            <p>{question.user}</p>
          </UserContent>
          <h3>{question.text}</h3>
        </QuestionCard>
        <QuestionList>
          {question.answer?.map(answer => {
            const { id, text, user } = answer;
            return (
              <li key={id}>
                <AnswerCard user={user} text={text} />
              </li>
            );
          })}
        </QuestionList>
        <AnswerInput onAnswerSubmit={handleAnswerSubmit} />
      </Content>
    </Container>
  );
};

export default Question;
