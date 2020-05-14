import React from 'react';
import { Link } from 'react-router-dom';

import handsUpLogo from '../../assets/handsup.png';

import { Container, Title, Content } from './styles';

const Header: React.FC = () => (
  <Container>
    <Content>
      <Link to="/">
        <Content>
          <img src={handsUpLogo} alt="logoAvanci" height="40" width="40" />
          <Title>Answer</Title>
        </Content>
      </Link>
    </Content>
  </Container>
);

export default Header;
