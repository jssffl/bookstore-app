import { createGlobalStyle } from 'styled-components'
import '@fontsource/roboto'

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #10bbd5;
        --color-blue-dark:#001950;
        --color-pink: #ff0072;
        --color-grey-dark: #444;

        --color-grey-light-3: #cacaca;
        --color-grey-light-2:#d0d0d0;
        --color-grey-light-1:#f0f0f0;
    }

    html {
        box-sizing: border-box;
    }

    *,
    *::after,
    *::before {
        box-sizing: inherit;
    }

    body {  
        padding: 20px 40px;
        font-family:  'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #ededef;
        color: var(--color-grey-dark);
   
    height: 100%;
    
      
      
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
                monospace;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ol,
    ul {
      margin: 0;
      padding: 0;
    }

    ul,
    ol,
    li {
      list-style: none;
    }

    a,
    a:hover {
      text-decoration: none;
     
    }

    .btn,
    button,
    button:focus,
    input:focus,
    textarea:focus,
    select,
    select:focus,
    a:focus {
      outline: 0px !important;
    }

    button {
      background-color: transparent;
      border: 0;
      cursor: pointer;
      color: inherit;
    }

    img {
      display: block;
    }
`
