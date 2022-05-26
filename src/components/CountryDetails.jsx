import React from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';


function CountryDetails() {
  
  const [ countryProfile, setCountryProfile ] = useState(null);

  const { alpha3Code } = useParams()

  useEffect(() => {
      getCountryProfile();
  }, [])

  const getCountryProfile = async () => {
      try{
          const response = await axios.get(
              `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`
          );
          setCountryProfile(response.data);
      } catch (error) {
        console.log(error)
      }
  }

  useEffect(() => {
      getCountryProfile();
  }, [alpha3Code])

  if (countryProfile === null) {
      return <h3>...Loading</h3>
  }




  return (
    <div>
        <h3>{countryProfile.name.common}</h3>
        <img src={countryProfile.alpha2Code} alt="" />
        <h4>{countryProfile.capital}</h4>
        

    </div>
  )
}

export default CountryDetails