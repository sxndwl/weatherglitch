import { createGlobalStyle } from 'styled-components'
import SFWoff from "../fonts/SFProDisplay-Regular.woff";
import SFWoff2 from "../fonts/SFProDisplay-Regular.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'San-Francisco';
        src: url(${SFWoff2}) format('woff2'), url(${SFWoff}) format('woff');
    }

    * {
        padding: 0;
        margin: 0;
        transition: 0.2s all;
    }

    body {
        font-family: 'San-Francisco';
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        color: #0000EE;
        margin-top: 20px;
        font-size: 20px;
    }

`