import { InterfaceUsuario, UsuarioTypeAction } from "./types"



const initialStateUsuario: InterfaceUsuario = {
    name: '',
    username: '',
    userPicture: ''
}



function reducerUsuario(state = initialStateUsuario, action: any) {
    switch (action.type) {
        case UsuarioTypeAction.GET_USER:
            return {
                name: action.payload.name,
                username: action.payload.username,
                userPicture: action.payload.userPicture
            }
        default:
            return state
    }
}

export default reducerUsuario