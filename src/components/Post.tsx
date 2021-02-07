import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { FiHeart } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux'
import { getPost, getLike } from '../store/ducks/Posts/actions'
import { InterfacePostItem, InterfacePostState } from '../store/ducks/Posts/types'

const Post = () => {

    const dispatch = useDispatch()
    const post = useSelector((state: InterfacePostState) => state.posts.arrayPost)
    const [likeId, setLikeId] = useState<any>()


    useEffect(() => {
        axios.get("http://localhost:4000/posts")
            .then(resposta => dispatch(getPost(resposta.data)))
    }, [])



    const curtir = useRef<HTMLParagraphElement>(null)
    const updateLike = () => {
        const requisao = {
            likes: curtir.current
        }
        axios.patch(`http://localhost:4000/posts/${likeId}`, requisao)
            .then(resposta => dispatch(getLike(resposta.data)))
    }


    return (
        <>

            {
                post?.map((item: InterfacePostItem) => (
                    <div className="post" key={item.id}>
                        <header>
                            <img src={item.userPicture} alt="user" />
                            <div className="post-user">
                                <strong>{item.user}</strong>
                                <span>{item.location}</span>
                            </div>
                        </header>
                        <div className="post-image">
                            <img src={item.postPicture} alt="post" />
                        </div>
                        <div className="post-likes"  >
                            <p ref={curtir}>
                                <FiHeart onClick={() => setLikeId(item.id)} />
                                {updateLike}</p>
                        </div>
                        <p>{item.description}</p>
                    </div>
                ))
            }



        </>

    );
}
export default Post;