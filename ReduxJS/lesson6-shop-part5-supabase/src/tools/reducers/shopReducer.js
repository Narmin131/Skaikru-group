export const shopReducer = (state=[],action)=>{
        switch (action.type) {
        case "GET_PRODUCT":
        return  action.product
            default:
                return state;
        }
}