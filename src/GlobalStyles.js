import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 112.5%;
    font-weight: 100;
}

body {
    margin: 0;
    padding: 0;
}

:root {
    --back-dark: #303233;
    --back-middle: ;
    --back-light: #3C4046;
    --button-green: #3DA95B;
    --button-nav: #E5E2E2;
    }
    `
