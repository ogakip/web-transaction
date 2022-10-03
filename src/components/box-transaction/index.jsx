import * as Styled from "./styles"
import { FormTransaction } from "./form-transaction"

export const BoxTransaction = () => {
    return (
        <Styled.Container>
            <Styled.Box>
                <FormTransaction/>
            </Styled.Box>
        </Styled.Container>
    )
}