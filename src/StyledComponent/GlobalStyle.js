import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,300;1,400;1,500&display=swap");
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
   
}

body{
    background-color: #1b1b1b;
    color: white;
}
button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor:pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        background-color: #23d997;
    }
}
    span{
        font-weight: bold;
        color: #23d997;
    }
    h2{
        font-weight: lighter;
        font-size: 3rem;
    }
    p{
        padding: 1rem 0rem;
        color: #ccc;
        font-size: 1.2rem;
        line-height: 150%;

    }
    h3{
        font-size: 2rem;
    }
    h4{
        font-size: 2rem;
    }
`;

export default GlobalStyle;
