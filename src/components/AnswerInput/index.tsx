import React, { useCallback, useState } from 'react';

import { Container, Content } from './styles';

interface AnswerInputProps {
  onAnswerSubmit(text: string): void;
}

const AnswerInput: React.FC<AnswerInputProps> = ({ onAnswerSubmit }) => {
  const [text, setText] = useState('');

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value);
    },
    [],
  );

  const handleSubmit = useCallback(() => {
    onAnswerSubmit(text);
  }, [onAnswerSubmit, text]);
  return (
    <Container>
      <Content>
        <p>Do you have a ansoware?</p>
        <textarea rows={3} onChange={handleChange} value={text} />
        <button type="submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </Content>
    </Container>
  );
};

export default AnswerInput;
