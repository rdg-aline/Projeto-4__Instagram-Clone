import React, { useRef } from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux'
import { InterfaceUserState } from '../store/ducks/Usuario/types';


const Form  = () => {
  
  const { name,userPicture } = useSelector((state:InterfaceUserState) => state.user)


  let inputImagem = useRef<HTMLInputElement>(null)
  let inputDescricao = useRef<HTMLInputElement>(null)
  
  const sendForm =() =>{
  const post ={
    postPicture: inputImagem.current?.value,
    description: inputDescricao.current?.value,
    user: name,
    userPicture:userPicture,
    likes: 0
  }
  
  axios.post("http://localhost:4000/posts",post)
  window.location.reload();
}


  return (
      <div className="form">
        <p>Faça uma postagem aqui</p>
        <input type="text" placeholder="Cole a url da imagem" ref={inputImagem} />
        <input type="text" placeholder="Digite uma descrição" ref={inputDescricao}/>
        <button onClick={sendForm}>Postar!</button>

        
        
      </div>
  );
}

export default Form;