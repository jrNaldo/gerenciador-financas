import { useState } from "react"
import Card from "../layout/Card"
import Input from "../layout/Input"
import Title from "../layout/Title"
import { useDispatch, useSelector } from "react-redux"
import Button from "../layout/Button"

export default function Debito(props){
    const [transferencia, setTransferencia] = useState(900)
    const {debito, saldo} = useSelector(rootReducer => rootReducer.SaldoReducer)
    const dispatch = useDispatch()
    
    const changeDebit = () => {
        dispatch({
            type: 'saldo/transferencia',
            payload: saldo - parseFloat(transferencia)
        })

        dispatch({
            type: 'saldo/debito',
            payload: debito + parseFloat(transferencia)
        })
    }
    return (
        <Card cor='bg-violet-500' title='Total de Débito'>
            <div>
                <Title>R${debito || 0},00</Title>
                <Input
                    type='number'
                    value={transferencia >= 0 ? transferencia: 0}
                    onChange={e => setTransferencia(e.target.value)}
                />
            </div>
            <Button onClick={changeDebit}>Transferir</Button>
        </Card>
    )
}