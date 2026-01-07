import { useState } from "react"
import Card from "../layout/Card"
import Title from "../layout/Title"
import { useSelector } from "react-redux"

export default function Saldo(props){
    const {saldo} = useSelector(rootReducer => rootReducer.SaldoReducer)
    return(
        <Card title='Total de Saldo'>
            <Title>R${saldo},00</Title>
        </Card>
    )
}