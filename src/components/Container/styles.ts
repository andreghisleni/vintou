import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;

  > div {
    padding: 50px 50px;

    position: relative;

    > img {
      width: 160px;
      height: 160px;

      z-index: 0;

      &.up-corner {
        position: absolute;
        top: 30px;
        left: 30px;
      }
      &.down-corner {
        position: absolute;
        bottom: 30px;
        right: 30px;
      }
      @media (max-width: 1000px) {
        width: 120px;
        height: 120px;
      }
      @media (max-width: 750px) {
        width: 100px;
        height: 100px;
      }
      @media (max-width: 650px) {
        width: 80px;
        height: 80px;
      }

      @media (max-width: 500px) {
        width: 60px;
        height: 60px;
      }
    }
  }
`;
