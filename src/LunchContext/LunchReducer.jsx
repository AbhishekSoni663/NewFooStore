const LunchReducer = (state,action)=>{
    switch(action.type){
        case"LUNCH":
        return{
            ...state,
            lunch:action.payload
        }
        default:
            return state
    }
}
export default LunchReducer