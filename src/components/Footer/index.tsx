import React from 'react';

import { Container, Contet } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <Contet>
          <p>
            Designed by{' '}
            <a href="https://andreg.com.br" target="_blank" rel="noreferrer">
              GASolutions
            </a>
          </p>
        </Contet>
      </div>
    </Container>
  );
};

export default Footer;
