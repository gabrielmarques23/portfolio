import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

button, a{
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover{
    transition: filter 0.2s;
}

body,
html{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR_01};
    //font-family: 'MuseoModerno', sans-serif;
    //font-size: 1rem;
    //font-weight: 100;

    //*Continuar a estilizar as fontes (separadamente em cada componente)*
}
`;