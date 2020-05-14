import React from 'react';

import { Container, Icon } from './styles';

interface NameIconProps {
  name: string;
}

const NameIcon: React.FC<NameIconProps> = ({ name }) => (
  <Container>
    <Icon>{name?.charAt(0).toUpperCase()}</Icon>
    <p>{name}</p>
  </Container>
);

export default NameIcon;
