import { useState, useEffect } from 'react';
// Custom Hook for fetching blogs from db.json file
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok) {
                throw Error('Could not fetch the data');
            }
            return res.json();
        })
        .then(data => {
            setData(data);          //prints data
            setIsPending(false);    //removes Loading... text if data is fetched
            setError(null);         //removes error message if data is fetched
        })
        .catch(err => {
            setIsPending(false);    //removes Loading... text if data is fetched
            setError(err.message);  //prints error message
        })
    }, [url]);
    return {data, isPending, error};
}
export default useFetch;