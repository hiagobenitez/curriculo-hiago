import styled from 'styled-components';

export const Animation = styled.section`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background: radial-gradient(50% 50% at 50% 50%, #060706 0%, #000200 100%);

  display: flex;
  align-items: center;
  justify-content: center;

  .logocurriculo {
      fill: transparent;

      animation: logocurriculo 12s ease infinite alternate;
    }
    @keyframes logocurriculo {
      0% {
        stroke-width: 0;
        stroke-dasharray: 1 100;
        fill: transparent;
      }
      25% {
        stroke-width: 1;
        stroke-dasharray: 100 0;

        fill: transparent;
      }
      60%,
      100% {
        fill: #fff;

        stroke-width: 0.3;
      }
    }
  }
`;

export const Container = styled.section`
  width: 100%;

  img {
    width: 100%;
  }
`;
