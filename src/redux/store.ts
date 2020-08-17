import { createStore } from 'redux';

const CREATE_USER = 'CREATE_USER';


interface createUserAction {
    type: string,
    payload:{email?:string, pass?:string}
}

// interface userState {
//     user:{ email?:string,pass?:string}
// }


export  const createUser:any = (user):any => {
    return {
        type:CREATE_USER,
        payload:user
    }
}



const initState:any = {
    user:{email:'',pass:''}
}

const mainReducer = (state = initState, action:createUserAction):any => {
    switch(action.type) {
        case CREATE_USER:
        return {...state, user:{...action.payload}}
        default:return state  
    }
}

const store = createStore(mainReducer);

export default store;