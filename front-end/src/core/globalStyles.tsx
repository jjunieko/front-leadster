import { createGlobalStyle } from "styled-components";

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Plus Jakarta Sans';
    src: url('../../public/fonts/PlusJakartaSans-Regular.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Plus Jakarta Sans';
    src: url('../../public/fonts/PlusJakartaSans-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Plus Jakarta Sans';
    src: url('../../public/fonts/PlusJakartaSans-SemiBold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  /* Outros pesos da fonte, se necessário */

  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
  `;

export default GlobalFonts;
