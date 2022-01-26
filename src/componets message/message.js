import React from "react";
import './style.css'

export default function Message({text}) {
    return (
        <div className='messageText'><b>{text}</b></div>
    )
}