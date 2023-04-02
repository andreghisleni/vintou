import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;
export const ContainerImages = styled.div`
  width: 100%;
  padding: 0 100px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 154px;

  > img {
    width: 160px;
    height: 160px;
  }

  h1 {
    font-family: 'IntroRustH2';
    font-size: 80px;
    font-weight: normal;
    margin: 0;
  }

  @media (max-width: 1200px) {
    padding: 0 45px 20px;
  }

  @media (max-width: 1000px) {
    > img {
      width: 120px;
      height: 120px;
    }
    h1 {
      font-size: 60px;
    }
  }
  @media (max-width: 750px) {
    > img {
      width: 100px;
      height: 100px;
    }
    h1 {
      font-size: 50px;
    }
  }
  @media (max-width: 650px) {
    > img {
      width: 80px;
      height: 80px;
    }
    h1 {
      font-size: 40px;
    }
  }

  @media (max-width: 500px) {
    justify-content: center;
    padding: 0 20px 20px;

    > img {
      display: none;
    }
  }
`;
export const ContainerNavigation = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;

  margin-bottom: 15px;
`;
export const ContentMenu = styled.nav`
  ul {
    @media (max-width: 700px) {
      flex-direction: column;
    }
    display: flex;
    flex-direction: row;
    li {
      height: 43px;
      a {
        display: flex;
        align-items: center;

        text-transform: uppercase;
        padding: 10px 20px;

        text-decoration: none;
      }
      &.active {
        a {
          color: ${props => props.theme.colors.primary};
          font-weight: 500;
        }
      }
    }
  }
`;
