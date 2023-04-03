import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    :root {
        --shadow: #43a047;
        --scrollbarBG: #eee;
        --thumbBG: #66bb6a;
        --verde-escuro: #0598ae;
        --verde-claro: #bce529;
    }
    ::-webkit-scrollbar {
        width: 0.8rem;
    }
    ::-webkit-scrollbar-track {
        background: var(--scrollbarBG);
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--verde-escuro);
        box-shadow: 0 -100vh 0 100vh var(--verde-claro), 0 0 10px 3px black;
    }
    ::-webkit-scrollbar-corner {
        
    }

    html {
        font-size: 62.5%;
        background-color: rgba(0, 0, 0, 0.9);
    }

    html, body, #__next {
        height: 100vh;
        width: 100%;
    }

    body {
        font-size: 1.6rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    `;

export default GlobalStyle;
