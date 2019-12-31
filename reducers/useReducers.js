import { LOGIN, LOGIN_TC, LOGIN_TB } from '../action/actionTypes';
const usereducer = (user = [], action) => {
    switch (action.type) {
        case LOGIN_TC:
            return action.dsUser
        case LOGIN_TB:
            return []
            case LOGIN:
                return[
                    ...user,
                action.newUser];

        default:
            return user;
    }
}
export default useReducer;