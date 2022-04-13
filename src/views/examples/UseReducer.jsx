import React, {useReducer} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import {reducer, initialState} from "../../store";
import {numberAdd2, login} from "../../store/actions";

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span>
                    : <span className="text">Sem usuário</span>
                }
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={_ => login(dispatch, 'João')} >Login</button>
                    <button className="btn" onClick={_ => numberAdd2(dispatch)} >+2</button>
                    <button className="btn" onClick={_ => dispatch({type: 'number_multiply7'})} >x7</button>
                    <button className="btn" onClick={_ => dispatch({type: 'number_divide25'})} >/25</button>
                    <button className="btn" onClick={_ => dispatch({type: 'number_multiplyX', value: 10})} >+ 10</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
