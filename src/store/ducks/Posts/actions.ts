import {action} from 'typesafe-actions'
import{  InterfacePostArray,  PostTypeAction } from './types'

export const getPost = (payload: InterfacePostArray ) => action(PostTypeAction.GET_POST,payload)
export const getLike = (payload: InterfacePostArray ) => action(PostTypeAction.GET_LIKE,payload)
