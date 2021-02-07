import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getUsuario } from '../store/ducks/Usuario/actions'
import { InterfaceUserState } from '../store/ducks/Usuario/types'



function Usuario() {

    const dispatch = useDispatch()
    const { name, username, userPicture } = useSelector((state:InterfaceUserState) => state.user)


    useEffect(() => {
        axios.get("http://localhost:4000/user")
            .then(resposta => dispatch(getUsuario(resposta.data)))
    }, [])


    return (
        <>
           
            <div className="user-info">
                <img  alt="Perfil" src={userPicture}/>
                <div className="user-bio">
                    <strong>{name}</strong>
                    <span>{username}</span>
                </div>
            </div>
        </>
    );
}

export default Usuario