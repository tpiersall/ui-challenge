import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`


* {
    box-sizing: border-box;
}
body {
    font-family: 'IBM Plex Sans';
    font-size: 1em;
    padding: 0px;
    margin: 0px;
    background-color: rgb(244, 245, 246);

    ul {
        margin: 0px;
        padding: 0px;
    }

    h2 {
        font-size: 2em;
        font-weight: 100;
        margin: 5px;
    }

  }

`