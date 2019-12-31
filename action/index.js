import {LOGIN,LOGIN_TC,LOGIN_TB} from '../action/actionTypes';


//export const fecthUserAction =(sort)=>{
 //   return{
    //    type:LOGIN,
   //     sort
   // }
//}
export const LoginUserAction=(newUser)=>{
    return{
        type:LOGIN,
        newUser
    }
}
export const fecthTCAction=(dsUser)=>{
    return{
        type:LOGIN_TC,
        dsUser
    }
}
export const fecthTbAction=(error)=>{
    return{
        type:LOGIN_TC,
        error
        
    }
}