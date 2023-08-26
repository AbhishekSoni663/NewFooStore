const DinnerReducer = (state,action) => {
    switch(action.type){
        case"DINNER":
        return{
            ...state,
            dinner:action.payload
        }
        default:
            return state
    }
}
export default DinnerReducer