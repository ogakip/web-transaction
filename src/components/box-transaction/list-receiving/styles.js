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

@media screen and (min-width: 1000px) {
    max-width: 400px;
}

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
max-height: 250px;
overflow-y: scroll;
padding: 10px;
-webkit-overflow-scrolling: touch;

.empty-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    >img {
        width: 50%;
    }

    >span {
        text-align: center;
    }
}

>li {
    font-weight: 300;
    color: var(--secundaryColor2);

    .amount-money {
        font-weight: 600;
    }
}
`