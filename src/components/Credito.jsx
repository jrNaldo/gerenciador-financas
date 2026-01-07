import { useState } from "react";
import Card from "../layout/Card";
import Input from "../layout/Input";
import Title from "../layout/Title";
import { useDispatch, useSelector } from "react-redux";
import Button from "../layout/Button";

export default function Credito(props){

    const [transferencia, setTransferencia] = useState(120)
    const {saldo, credito} = useSelector(rootReducer => rootReducer.SaldoReducer)
    const dispatch = useDispatch()

    const changeCredit = () => {
        dispatch({
            type: 'saldo/transferencia',
            payload: saldo - parseFloat(transferencia)
        })
        dispatch({
            type: 'saldo/credito',
            payload: credito + parseFloat(transferencia)

        })
    }

    return (
        <Card cor='bg-blue-500' title='Total de Credíto'>
            <div>
                <Title>R${credito},00</Title>
                <Input
                    type='number'
                    value={transferencia >= 0 ? transferencia: 0}
                    onChange={e => setTransferencia(e.target.value)}
                />
            </div>

            <Button onClick={changeCredit}>Transferir</Button>
        </Card>
    )
}