import {useDispatch, useSelector} from "react-redux";
import {changeShowName} from "../store/profile/actions";


export const Profile = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state);

    const toggleShowName = () => {
        dispatch(changeShowName);
    };

    return (
        <div>
            <h1>Profile</h1>
            <input
                type="checkbox"
                checked={data.showName}
                value={data.showName}
                onChange={toggleShowName}
            />Change Show Name
            {data.showName && <p>{data.name}</p>}
        </div>
    );
};