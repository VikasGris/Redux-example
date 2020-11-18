import {MOBILE_PHONE} from '../actions/types';

export default function mobileReducer(state, action){
    switch(action.type){
        case MOBILE_PHONE: {
            return{
                cart: [
                    ...state.cart,
                ]
            }
        }
        default:
            return state;
    }
}