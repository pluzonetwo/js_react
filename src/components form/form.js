import React, {useState} from "react";
import './style.css'
import {Button, TextField} from '@mui/material';
import {useRef, useEffect} from "react";

export const Form = ({onSubmit}) => {
    const [value, setValue] = useState('');
    const formFocusRef = useRef();

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue('');
    }

    useEffect( () => {
        formFocusRef.current?.focus();
    }, []);

    return (
        <form className='form'
              onSubmit={handleSubmit}
        >
            <TextField
                inputRef={formFocusRef}
                className='myTxtField'
                value={value}
                onChange={handleChange}
            />
            <Button
                className='myBtn'
                variant='contained'
                onClick={handleSubmit}
            >Send
            </Button>
        </form>
    )
}