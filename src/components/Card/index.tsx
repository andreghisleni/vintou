import React from 'react';

import { Container, ContainerLink, Content } from './styles';

interface ICard {
  title: string;
  children: React.ReactNode;
  go?: string;
}
export const Card: React.FC<ICard> = ({ title, children, go }) => {
  if (go) {
    return (
      <ContainerLink href={go} target="_blank">
        <Content>
          <header>{title}</header>

          <h3>{children}</h3>
        </Content>
      </ContainerLink>
    );
  }
  return (
    <Container>
      <Content>
        <header>{title}</header>

        <h3>{children}</h3>
      </Content>
    </Container>
  );
};
