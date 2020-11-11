import {APPLE_PHONE} from './action';

const initialState = {
    apple : "",
}

const appleReducer = (state, actions) =>{
    switch(actions.type){
        case APPLE_PHONE:
            return {
                ...state,
                apple : "https://rukminim1.flixcart.com/flap/50/50/image/aacfef8ab9489a29.jpg?q=50"
            }
        default:
            break;

    }
}
export default appleReducer;