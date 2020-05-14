import React, { useCallback, useState } from 'react';

import { Container, Content } from './styles';

interface QuestionInputProps {
  onQuestionSubmit(text: string): void;
}

const QuestionInput: React.FC<QuestionInputProps> = ({ onQuestionSubmit }) => {
  const [text, setText] = useState('');

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value);
    },
    [],
  );

  const handleSubmit = useCallback(() => {
    onQuestionSubmit(text);
  }, [onQuestionSubmit, text]);
  return (
    <Container>
      <Content>
        <p>Do you have a question?</p>
        <textarea rows={3} onChange={handleChange} value={text} />
        <button type="submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </Content>
    </Container>
  );
};

export default QuestionInput;
