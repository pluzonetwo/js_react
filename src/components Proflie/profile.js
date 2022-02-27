import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {changeName, changeShowName} from "../store/profile/actions";
import {Form} from "../components form/form";
import {selectName, selectShowName} from "../store/profile/selectors";
import {PresentationProfile} from "./PresentationProfile";
import {logout} from "../services/firebase";


export const Profile = ({onLogout}) => {
    const dispatch = useDispatch();

    const name = useSelector(selectName, shallowEqual);
    const showName = useSelector(selectShowName, shallowEqual);

    const toggleShowName = () => {
        dispatch(changeShowName);
    };

    const handleChangeName = ({value}) => {
        dispatch(changeName(value));
    }

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
                name={name}
                showName={showName}
                toggleShowName={toggleShowName}
                onLogout={handleLogout}
            />
        </>
        // <>
        //     <h1>Profile</h1>
        //     <Form onSubmit={handleChangeName} />
        //     <div>
        //         <input
        //             type="checkbox"
        //             checked={showName}
        //             value={showName}
        //             onChange={toggleShowName}
        //         />Show Name
        //         {showName && <p>{name}</p>}
        //     </div>
        // </>
    );
};