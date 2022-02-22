import {apiURL} from "../Utils/constants";
import {useEffect, useState} from "react";

export const DataApi = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(apiURL)
            .then((responce) => {
            if (!responce.ok) {
                throw new Error(responce.status);
            }

            return responce.json();
        })
            .then(result => setData(result))
            .catch((err) => {
            console.warn(err);
        });
    }, []);

    return (
        <>
            <h1>DataAPI</h1>
            <div>
                {data.map((id, item) => (
                    <div key={id}>{item.lines}</div>
                ))}
            </div>
        </>
    );
};