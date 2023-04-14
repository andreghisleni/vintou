'use-strict';

import { Container, ReactPlayerStyled } from '@styles/pages/home';

import React from 'react';

const Home: React.FC = () => {
  return (
    <Container className="container">
      <ReactPlayerStyled url="https://youtu.be/0A0t0Oewsf8" />
    </Container>
  );
};

export default Home;
