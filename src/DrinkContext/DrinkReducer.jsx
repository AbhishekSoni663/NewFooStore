const DrinkReducer = (state,action)=>{
    switch(action.type){
        case"DRINK":
        return{
            ...state,
            drink : action.payload
        }
        default:
            return state
    }
}
export default DrinkReducer