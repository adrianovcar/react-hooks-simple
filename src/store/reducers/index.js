export default function reducer(state, action) {
    switch (action.type) {
        case "number_add2":
            return {...state, number: state.number + 2}
        case "number_multiply7":
            return {...state, number: state.number * 7}
        case "number_multiplyX":
            return {...state, number: state.number + action.value}
        case "number_divide25":
            return {...state, number: Math.round(state.number / 25)}
        case "login":
            return {...state, user: {name: action.payload}}
        default:
            return state
    }
}
