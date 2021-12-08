import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
        padding: 0;
        margin: 0;
    }

    body {
        background-color: ${({ theme }) => theme.colors.background};
    }

    input:focus, textarea:focus, select:focus {
        outline: none;
    } 

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 700;
    }

    .primary-color {
        color: ${({ theme }) => theme.colors.primary};
    }

    .font-bold {
        font-weight: 700;
    }
`;

export default GlobalStyle;
