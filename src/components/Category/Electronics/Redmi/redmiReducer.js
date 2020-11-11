import {REDMI_PHONE} from './action';

const initialState = {
    redmi : [],
    
}

const redmiReducer = (state = initialState, actions) =>{
    switch(actions.type){
        case REDMI_PHONE:
            return{
            ...state,
              redmi : "https://rukminim1.flixcart.com/flap/50/50/image/ca25d3d2ca486342.jpg?q=50",
            }
        default:
            break;

    }
}
export default redmiReducer;