import React from 'react';
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {
    increment,
    decrement,
    add,
    subtract,
    storeResult,
    deleteResult,
    resetStore,
    userLogin,
    userLogout
} from '../../store/actions'

const Counter = (props) => {

    console.log('props.result: ', props.result)

    const listResults = props.result.map((result) => {
        return (
            <li key={result.id} onClick={() => props.deleteResult(result.id)}>{result.value}</li>
        )
    });

    console.log('User Logged? ', props.isUserLoggedIn)

    return (
        <div>
            <CounterOutput value={props.counter} />
            <CounterControl label="Increment" clicked={props.incrementCounter} />
            <CounterControl label="Decrement" clicked={props.decrementCounter}  />
            <CounterControl label="Add 5" clicked={() => props.addToCounter(5)}  />
            <CounterControl label="Subtract 5" clicked={() => props.substractToCounter(5)}  />
            <hr/>
                <p>{props.isUserLoggedIn ? 'Utente LOGGATO' : 'Utente NON LOGGATO'}</p>
                <p><button disabled={props.isUserLoggedIn} onClick={props.loginUser}>Login</button></p>
                <p><button disabled={!props.isUserLoggedIn} onClick={props.logoutUser}>Logout</button></p>
            <hr></hr>
            <button onClick={props.storeResult}>Store Result</button>
            <br/><br/>
            <button onClick={props.resetStore}>RESET Result</button>
            <ul>
                {listResults}
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        counter: state.counter.counter,
        result: state.counter.result,
        isUserLoggedIn: state.auth.isLoggedIn
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        incrementCounter: () => dispatch(increment()),
        addToCounter: (value) => dispatch(add(value)),
        decrementCounter: () => dispatch(decrement()),
        substractToCounter: (value) => dispatch(subtract(value)),
        resetStore: () => dispatch(resetStore()),
        storeResult: () => dispatch(storeResult()),
        deleteResult: (id) => dispatch(deleteResult(id)),
        loginUser: () => dispatch(userLogin()),
        logoutUser: () => dispatch(userLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);