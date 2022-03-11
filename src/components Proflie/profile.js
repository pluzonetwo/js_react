import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {changeName, changeShowName} from "../store/profile/actions";
import {Form} from "../components form/form";
import {selectName, selectShowName} from "../store/profile/selectors";
import {PresentationProfile} from "./PresentationProfile";


export const Profile = () => {
    const dispatch = useDispatch();

    const name = useSelector(selectName, shallowEqual);
    const showName = useSelector(selectShowName, shallowEqual);

    const toggleShowName = () => {
        dispatch(changeShowName);
    };

    console.log(toggleShowName);

    const handleChangeName = ({value}) => {
        dispatch(changeName(value));
    }

    return (
        <>
            <Form onSubmit={handleChangeName} />
            <PresentationProfile
                name={name}
                showName={showName}
                toggleShowName={toggleShowName}
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