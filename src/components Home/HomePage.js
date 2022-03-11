import {useState} from "react";
import {Link} from "@mui/material";
import {NavLink} from "react-router-dom";
import {signUp, login} from "../services/firebase";

export const HomePage = ({ isSignUp }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangePass = (e) => {
        setPass(e.target.value);
    };

    const handleSignUp = async () => {
        try {
          await signUp(email, pass);
        } catch (e) {
          setError(e.message);
        }
    }

    const handleSignIn = async () => {
        try {
            await login(email, pass);
        } catch (e) {
            setError(e.message);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignUp) {
            handleSignUp();
        } else {
            handleSignIn();
        }

        setEmail('');
        setPass('');
    };

    return (
        <>
            <h1>{ isSignUp ? 'SignUp' : 'Login' }</h1>
            <NavLink to={`${isSignUp ? '/' : '/signup'}`}>
                { !isSignUp ? 'SignUp' : 'Login' }
            </NavLink>
            <form onSubmit={handleSubmit} >
                <input type="text" value={email} onChange={handleChangeEmail} />
                <input type="password" value={pass} onChange={handleChangePass} />
                <button>Login</button>
                {error && <span>{error}</span> }
            </form>
        </>
    );
};