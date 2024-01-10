import { useEffect } from "react";
import Country from "../Country/Country";
import { useState } from "react";


const countries = () => {

    const [countries, setCountries] = useState([]);                                           

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data => setCountries(data));
    }, [])


    return (
        <div>
            <h2 className="font-bold text-2xl">Countries:{countries.length}</h2>
            {
                countries.map(country =>
                     <Country key={country.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default countries;