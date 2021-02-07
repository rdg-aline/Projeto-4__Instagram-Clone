import React, { useState, useEffect } from 'react';
import axios from 'axios';
import{ InterfaceStories } from '../types/InterfaceStories'

function Stories() {
    const [storie, setStories] = useState([])


    useEffect(() => {
        axios.get("http://localhost:4000/stories")
            .then(resposta => setStories(resposta.data))
    }, [])


return (

        <div className="stories">
            <h2>Stories</h2>
            {
                storie?.map((item: InterfaceStories) => (
                    <div className="storie" key={item.id}>
                        <div className="storie-image">
                            <img src={item.userPicture} alt="user" />
                        </div>
                        <div className="storie-user">
                            <strong>{item.user}</strong>
                            <span>{item.time}</span>
                        </div>
                    </div>
                ))
            }
        </div>

    );

}

export default Stories