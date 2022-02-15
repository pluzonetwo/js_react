import {useDispatch, useSelector} from "react-redux";
import {CHANGE_NAME, changeShowName} from "../store/profile/actions";
import {Form} from "../components form/form";


export const Profile = () => {
    const dispatch = useDispatch();
    const {name, showName} = useSelector((state) => state);

    const toggleShowName = () => {
        dispatch(changeShowName);
    };

    const handleChangeName = (text) => {
        dispatch({
            type: CHANGE_NAME,
            payload: text,
        });
    }

    return (
        <>
            <h1>Profile</h1>
            <Form onSubmit={handleChangeName} />
            <div>
                <input
                    type="checkbox"
                    checked={showName}
                    value={showName}
                    onChange={toggleShowName}
                />Show Name
                {showName && <p>{name}</p>}
            </div>
        </>
    );
};