import * as Styled from "./styles"
import { FormTransaction } from "./form-transaction"
import { ListReceiving } from "./list-receiving"
import { useState } from "react"

export const BoxTransaction = () => {
    const [data, setData] = useState()

    return (
        <Styled.Container>
            <Styled.Box>
                <FormTransaction/>
                <ListReceiving/>
            </Styled.Box>
        </Styled.Container>
    )
}