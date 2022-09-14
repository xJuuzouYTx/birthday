import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetPersons = (API) => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        getData();
    },[]);

    const getData = async() => {
        const response = await axios.post(API);
        setPersons(response.data);
    }

    return persons;
}

export default useGetPersons;