import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { countries } from "../../api";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setFetchedCountries(await countries());
    };

    fetchCountries();
  }, [setFetchedCountries]);
  return (
    <Form>
      <Form.Control
        as="select"
        onChange={(event) => handleCountryChange(event.target.value)}
      >
        <option value="global">Global</option>
        {fetchedCountries.map((country) => (
          <option value={country}>{country}</option>
        ))}
      </Form.Control>
    </Form>
  );
};

export default CountryPicker;
