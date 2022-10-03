import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
}

:root {
    --primaryColor: #656565;
    --secundaryColor: #3d75bb;
    --secundaryColor2: #75aaee; 
}
`