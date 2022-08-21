import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const GlobalStyle = (): JSX.Element => {
  return (
    <Global
      styles={css`
        ${emotionReset}

        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }
      `}
    />
  );
};

export default GlobalStyle;
