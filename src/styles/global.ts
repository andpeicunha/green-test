import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
        background-color: rgba(0, 0, 0, 0.9);
    }

    html, body, #__next {
        height: 100vh;
        width: 96.5vw;
    }

    body {
        font-size: 1.6rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    `;

export default GlobalStyle;
