import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 112.5%;
}

body {
    margin: 0;
    padding: 0;
}

:root {
    --back-dark: #0E0F10;
    --back-middle: ;
    --back-light: #2A2D32;
   
    --button-green: #3DA95B;
    --button-nav: #E5E2E2;
}
`