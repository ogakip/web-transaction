import styled from "styled-components"

export const Container = styled.div`
width: 100vw;
min-height: 100vh;
padding: 20px;
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
`

export const Box = styled.div`
width: 70%;
display: flex;
border: 1px solid var(--secundaryColor);
border-radius: 5px;

@media screen and (max-width: 1000px) {
    flex-direction: column;
}
`