const initialState = {
    saldo: 10000,
    credito: 0,
    debito: 0
}

const SaldoReducer = (state = initialState, action) => {
    switch(action.type){
        case 'saldo/transferencia': 
            return {...state, saldo: action.payload}
        case 'saldo/credito':
            return {...state, credito: action.payload}
        case 'saldo/debito': 
            return {...state, debito: action.payload}
        default:
            return state
    }
}

export default SaldoReducer