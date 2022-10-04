import * as Styled from "./styles"
import { FormTransaction } from "./form-transaction"
import { ListReceiving } from "./list-receiving"
import { useState } from "react"

export const BoxTransaction = () => {
    const [data, setData] = useState(undefined)

    return (
        <Styled.Container>
            <Styled.Box>
                <FormTransaction setData={setData}/>
                <ListReceiving data={data}/>
            </Styled.Box>
        </Styled.Container>
    )
}