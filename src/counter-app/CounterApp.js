import React from 'react'
import { Provider } from "react-redux";
import store from './store/store'
import Counter from "./Counter";



const CounterApp = () => {
    return (
        <div>
            <Provider store={store}>
                <Counter />
            </Provider>
        </div>
    )
}

export default CounterApp;
