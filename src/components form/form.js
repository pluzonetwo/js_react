import React, {useState} from "react";
import './style.css'

export const Form = ({onSubmit}) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({value});
        setValue('');
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <p>Enter message</p><input className='inputs' value={value} onChange={handleChange} type="text"/>
            <input className='inputs' type="submit"/>
        </form>
    )
}