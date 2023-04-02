import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text[0]};
    font: 400 16px Roboto, sans-serif;

    width: 100vw;
    height: 100vh;
  }

  .bg{
    background: ${props => props.theme.colors.background};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    position:fixed;
    overflow:hidden;

  }
  p, h1, h2, h3, h4, h5, h6, a, li, span, label, strong {
    color: ${props => props.theme.colors.text};
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;

    text-align: center;
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.primary};
  }


  p{
    font-size: 18px;
    line-height: 30px;
    max-width: 800px;
    text-indent: 30px;
    text-align: justify;
    padding: 10px 20px;
  }
  h1 {
    font-weight: bold;
    font-size: 34px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 30px;
    padding: 0 10px;
  }
  h3 {
    font-size: 26px;
    margin-bottom: 20px;

    &.normal {
      font-weight: normal;
      font-size: 30px;
    }
  }
  h4 {
    font-weight: normal;
    font-size: 22px;
    margin-bottom: 20px;
  }

  a {
    color: ${props => props.theme.colors.text[0]};
    font-weight: 400;

    :hover {
      color: ${props => props.theme.colors.primary};
      font-weight: 500;
    }
  }


  ul {
    list-style: none;
  }
  .container {
    width: 100%;
    max-width: 1200px;
  }
  .row {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;

    @media (max-width: 700px) {
    padding: 0 15px;
  }
  }
  .blankSpace {
    width: 100%;
    height: calc(100vh - 497px);
  }
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  section {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 50px 0;


  }


`;
