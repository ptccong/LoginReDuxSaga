import  {call,call} from 'redux-saga/effect';
import {wacthFetchUser, wacthNewUser} from '../sagas/userSagas';
export default function* rootSaga(){
    yield [
        fork(wacthFetchUser),
        fork(wacthNewUser)
    ]
}
