import { useState, useEffect } from "react";
import axios from "axios";
import callingCodeData from "../data/callingCodeData";

axios.defaults.baseURL =
  "https://restcountries.eu/rest/v2/callingcode/";

const useGetRandomCountry = () => {
    const [country, setCountry] = useState(callingCodeData[Math.floor(Math.random() * callingCodeData.length)]);
    const [response, setResponse] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        async function fetchData() {
            const countryCode = country.dial_code.substring(1,country.dial_code.length);
        
            try{
                const resp = await axios.get(`${countryCode}`);
                setResponse(resp.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }

        }
        fetchData();
    },[]);

    return { response, error, loading };

};

export default useGetRandomCountry;