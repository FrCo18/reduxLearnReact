import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {fetchCustomers} from "./asyncActions/customers";

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)

    const addCash = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type: "GET_CASH", payload: cash})
    }

    const addCustomer = (name) => {
        const customer = {
            name: name,
            id: Date.now()
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    return (
        <div className="App">
            <div style={{fontSize: "3rem"}}>
                {cash}
            </div>
            <div style={{display: "flex"}}>
                <button onClick={() => addCash(Number(prompt()))}>Пополнить счёт</button>
                <button onClick={() => getCash(Number(prompt()))}>Снять со счёта</button>
                <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
                <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>
            </div>

            {customers.length > 0
                ?
                <div>
                    {customers.map(customer =>
                        <div onClick={() => removeCustomer(customer)}
                             style={{fontSize: '2 rem', border: '1px solid black', padding: '5px'}}>
                            {customer.name}
                        </div>
                    )}
                </div>
                :
                <div>
                    Клиенты отсутствуют
                </div>
            }

        </div>
    );
}

export default App;
