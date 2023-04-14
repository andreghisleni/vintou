import React from 'react';

import { Container, ContainerLink, Content } from './styles';

interface ICard {
  title: string;
  children: React.ReactNode;
  go?: string;
  noText?: boolean;
  contentStyle?: React.CSSProperties;
}
export const Card: React.FC<ICard> = ({
  title,
  children,
  go,
  noText,
  contentStyle,
}) => {
  if (go) {
    return (
      <ContainerLink href={go} target="_blank">
        <Content style={contentStyle}>
          <header>{title}</header>

          {noText ? children : <h3>{children}</h3>}
        </Content>
      </ContainerLink>
    );
  }
  return (
    <Container>
      <Content style={contentStyle}>
        <header>{title}</header>

        {noText ? children : <h3>{children}</h3>}
      </Content>
    </Container>
  );
};
