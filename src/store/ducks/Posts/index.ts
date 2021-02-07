import { InterfacePostArray, PostTypeAction } from './types'

const initialStatePost: InterfacePostArray = {
    arrayPost: []
}


export function reducerPost(state = initialStatePost, action: any) {
    switch (action.type) {
        case PostTypeAction.GET_POST:
            return {
                arrayPost: action.payload
            }
        default:
            return state
    }


}



const initialStateL: any = {
    likes: 0
}


export function reducerLike(state = initialStateL, action: any) {
    switch (action.type) {
        case PostTypeAction.GET_LIKE:
            return {
                likes: state.likes + 1
            }
        default:
            return state
    }


}

