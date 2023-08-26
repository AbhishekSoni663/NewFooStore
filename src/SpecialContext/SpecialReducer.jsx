const SpecialReducer = (state,action)=>{
    switch(action.type){
        case "SPECIALFOOD":
            return{
                ...state,
                specialfoods:action.payload
            }
            default:
            return state
    }
}
export default SpecialReducer