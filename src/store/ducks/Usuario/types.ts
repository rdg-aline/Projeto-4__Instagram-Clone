export enum UsuarioTypeAction{
    GET_USER = '@GET_USER'
}

export interface InterfaceUsuario{
name: string,
username: string,
userPicture: string 
}


export interface InterfaceUserState{
    user: InterfaceUsuario
}
