import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${props => props.theme.colors.card.borderHover};
    border-radius: 8px;
    cursor: pointer;
  }

  transition: 0.3s;
`;
export const ContainerLink = styled.a`
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${props => props.theme.colors.card.borderHover};
    border-radius: 8px;
    cursor: pointer;
  }

  transition: 0.3s;

  text-decoration: none;
`;

export const Content = styled.div`
  box-sizing: border-box;

  background: ${props => props.theme.colors.card.bg};
  border: 1px ${props => props.theme.colors.card.border} solid;

  border-radius: 8px;

  padding: 32px 24px;

  &:hover {
    border: 1px ${props => props.theme.colors.card.content} solid;

    header,
    h3 {
      color: ${props => props.theme.colors.card.primary};
    }
  }

  transition: 0.2s;

  header {
    font-size: 28px;
    margin-bottom: 20px;
    text-align: center;

    color: ${props => props.theme.colors.card.primary};
  }
`;
