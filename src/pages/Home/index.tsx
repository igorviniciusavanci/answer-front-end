import React, { useCallback, useEffect, useState } from 'react';

import Header from '../../components/Header';
import QuestionInput from '../../components/QuestionInput';
import QuestionCard from '../../components/QuestionCard';

import api from '../../service/api';

import { Container, Content, QuestionList } from './styles';

interface QuestionData {
  id: string;
  text: string;
  user: string;
  created_at: string;
  updated_at: string;
  answerCount: number;
}

const Home: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    setRefresh(false);
    async function getQuestions(): Promise<void> {
      const response = await api.get('questions');
      setQuestions(response.data);
    }
    getQuestions();
  }, [refresh]);

  const handleQuestionSubmit = useCallback(async (text: string) => {
    try {
      await api.post('questions', {
        text,
      });
      setRefresh(true);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Container>
      <Header />
      <Content>
        <QuestionInput onQuestionSubmit={handleQuestionSubmit} />
        <QuestionList>
          {questions.map(question => {
            const { answerCount, text, user, id } = question;
            return (
              <li key={id}>
                <QuestionCard
                  id={id}
                  user={user}
                  text={text}
                  answerCount={answerCount}
                />
              </li>
            );
          })}
        </QuestionList>
      </Content>
    </Container>
  );
};

export default Home;
