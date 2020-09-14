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
    --back-dark: #407531;
    --back-middle: ;
    --back-light: #658349;
   
    --button-green: #73A536;
    --button-nav: #FEFEFE;
}
`
