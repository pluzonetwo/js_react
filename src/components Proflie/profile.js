import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {changeName, changeShowName} from "../store/profile/actions";
import {Form} from "../components form/form";
import {selectName, selectShowName} from "../store/profile/selectors";
import {PresentationProfile} from "./PresentationProfile";
import {logout, profileRef} from "../services/firebase";
import {set, onValue} from 'firebase/database';
import {useEffect, useState} from "react";


export const Profile = ({onLogout}) => {
    const dispatch = useDispatch();

    const name = useSelector(selectName, shallowEqual);
    const showName = useSelector(selectShowName, shallowEqual);
    const [snapName, setSnapName] = useState('');

    const toggleShowName = () => {
        dispatch(changeShowName);
    };

    const handleChangeName = ({value}) => {
        // dispatch(changeName(value));
        set(profileRef, value);
    }

    useEffect(() => {
        onValue(profileRef, (snapshot) => {
            setSnapName(snapshot.val());
        });
    }, [])

    const handleLogout = async () => {
        try {
            await logout();
        } catch (e) {
            console.warn(e);
        }
    }

    return (
        <>
            <Form onSubmit={handleChangeName} />
            <PresentationProfile
                name={snapName}
                showName={showName}
                toggleShowName={toggleShowName}
                onLogout={handleLogout}
            />
        </>
    );
};