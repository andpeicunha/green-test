import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
        background-color: rgba(220, 220, 220, 0.5);
        background: linear-gradient(0deg, rgba(107,201,255,0.5) 0%, rgba(190,231,255,0.3) 100%);
    }

    html, body, #__next {
        height: 100%;
        width: 100vw;
    }

    body {
        font-size: 1.6rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    `;

export default GlobalStyle;
