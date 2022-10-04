import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15px;
font-style: italic;
box-sizing: border-box;
padding: 50px;
background-color: #75aaee26;
box-shadow: -5px 0px 10px #75aaee26;

h2, .amount-money {
    color: var(--secundaryColor);
}

hr {
    background-color: var(--secundaryColor2);
}
`

export const List = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 20px;

>li {
    font-weight: 300;
    color: var(--secundaryColor2);

    .amount-money {
        font-weight: 600;
    }
}
`