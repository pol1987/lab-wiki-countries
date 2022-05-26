import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function CountriesList() {
    const [countriesList, setCountriesList] = useState([]);
    const { alpha3Code } = useParams();
  
    //! Primero, me traigo la API con Async Await
  
    useEffect(() => {
      getCountries();
    }, []);
  
    const getCountries = async () => {
      try {
        const response = await axios.get(
          "https://ih-countries-api.herokuapp.com/countries"
        );
        setCountriesList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    // if (countriesList === null) {
    //   return <h3>...Loading</h3>;
    // }
  
    return (
      <div>
        
  
        {countriesList.map((eachCountry, index) => {
          return (
            <li key={eachCountry.alpha3Code + index}>
              <Link to={`/${eachCountry.alpha3Code}`}>{eachCountry.name.common}</Link>
            </li>
          );
        })}
  
        <h1>LAB WikiCountries.</h1>
      </div>
    );
  }
  
  export default CountriesList;