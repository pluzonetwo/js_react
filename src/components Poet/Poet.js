import {useEffect} from "react";
import {Button, CircularProgress} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getPoet} from "../store/poet/actions";
import {errorSelect, isLoadingSelector, poetSelector} from "../store/poet/selectors";

export const Poet = () => {
    const dispatch = useDispatch();
    const error = useSelector(errorSelect);
    const isLoading = useSelector(isLoadingSelector);
    const data = useSelector(poetSelector);

    const getData = async () => {
        dispatch(getPoet());
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h1>Lines</h1>
            <Button onClick={getData}>Refresh</Button>
            {error && <h4>Error</h4>}
            {isLoading ? (
                <CircularProgress/>
            ) : (
                <div>
                    {data.map((items, id) => (
                        <ul key={id}>{items.lines.map((el, index) => (
                            <li key={index}>{el}</li>
                        ))}</ul>
                    ))}
                </div>
            )}
        </>
    );
};