import Credito from "./components/Credito";
import Debito from "./components/Debito";
import Saldo from "./components/Saldo";
import { Provider } from "react-redux";
import store from "./Redux/store";

export default function App() {

  return (
    <Provider store={store}>
      <div className="w-full h-max min-h-screen bg-gray-500">
        <h1 className="text-center text-3xl text-white py-4 font-bold">Gerenciador de Créditos</h1>
        <div className="grid grid-cols-3 gap-2 h-75 mx-2">
          <Credito />
          <Debito />
          <Saldo />
        </div>
      </div>
    </Provider>
  )
}
