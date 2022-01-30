import React, {useState} from "react";
import './style.css'

export const Form = ({onSubmit}) => {
    const [author, setAuthor] = useState('')
    const [value, setValue] = useState('');

    const handleChangeValue = (e) => {
        setValue(e.target.value);
    }

    const handleChangeAuthor = (e) => {
        setAuthor(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({author, value});
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <p>Author</p><input className='inputs' value={author} onChange={handleChangeAuthor} type="text"/>
            <p>Message</p><input className='inputs' value={value} onChange={handleChangeValue} type="text"/>
            <input className='inputs' type="submit"/>
        </form>
    )
}