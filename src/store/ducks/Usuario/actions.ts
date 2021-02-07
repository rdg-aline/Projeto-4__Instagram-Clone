import { action } from 'typesafe-actions'
import { InterfaceUsuario, UsuarioTypeAction } from './types'

export const getUsuario = (payload: InterfaceUsuario) =>  action(UsuarioTypeAction.GET_USER, payload)

