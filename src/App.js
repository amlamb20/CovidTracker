import React from "react";
import "./App.css";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import { Container, Row } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <Container>
        <Row className="justify-content-center">
          <Cards data={data} />
        </Row>
        <Row className="justify-content-center">
          <CountryPicker handleCountryChange={this.handleCountryChange} />
        </Row>
        <Row className="justify-content-center">
          <Chart data={data} country={country} />
        </Row>
      </Container>
    );
  }
}

export default App;
