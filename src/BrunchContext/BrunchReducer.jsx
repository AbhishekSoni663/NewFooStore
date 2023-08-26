const BrunchReducer= (state,action)=>{
    switch(action.type){
        case "BRUNCH":
        return{
            ...state,
            brunches:action.payload
        }
        default:
            return state
    }
}
export default BrunchReducer