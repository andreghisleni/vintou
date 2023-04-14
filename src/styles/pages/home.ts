import ReactPlayer from 'react-player';
import styled from 'styled-components';

export const ContainerImages = styled.div`
  width: 100%;
  margin-top: 20px;

  @media (max-width: 1200px) {
    padding-left: 30px;
    ul {
      li {
        width: 370px;
      }
    }
  }
  @media (max-width: 400px) {
    padding-left: 30px;
    ul {
      li {
        width: 300px;
      }
    }
  }
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  }
  li {
    width: 270px;

    margin-bottom: 20px;
    img {
      object-fit: cover;
    }
  }
`;

export const Container = styled.div`
  h3 {
    color: ${props => props.theme.colors.text};
    margin-bottom: 10px;

    span {
      color: ${props => props.theme.colors.primary};
      font-size: 30px;
    }
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  padding: 40px;

  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;

  align-items: center;

  @media only screen and (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 18px;
  }
  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 12px;
  }

  @media only screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 12px;
  }
`;

export const CardContainerOne = styled.div`
  padding: 40px;
`;

export const ReactPlayerStyled = styled(ReactPlayer)`
  width: auto;
`;
