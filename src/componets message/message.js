import React from "react";
import './style.css'

export default function Message({author, text}) {
    return (
        <div className='messageText'>
            <b>{author}: {text}</b>
        </div>
    )
}