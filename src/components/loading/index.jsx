import * as Styled from "./styles"
import ReactLoading from "react-loading"

export const Loading = () => {
    return (
        <Styled.Container>
            <ReactLoading type="spinningBubbles" color="var(--secundaryColor2)" />
        </Styled.Container>
    )
}