import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import cx from "classnames";

import styles from "./Cards.module.css";

const stylesSubtitle = { fontStyle: "italic", fontWeight: 20 };

const Cards = ({ data: { recovered, confirmed, deaths, lastUpdate } }) => {
  if (!lastUpdate) {
    return "Fetching data...";
  }

  return (
    <React.Fragment>
      <Col xs={12} s={6} m={4} lg={4}>
        <Card className={cx(styles.card, styles.infected)}>
          <Card.Body>
            <Card.Title>Infected</Card.Title>
            <Card.Subtitle style={stylesSubtitle}>There are...</Card.Subtitle>
            <Card.Text as="h1">{confirmed.value}</Card.Text>
            <Card.Subtitle style={stylesSubtitle}>
              total cases of COVID-19<br></br>as of{" "}
              <strong>{new Date(lastUpdate).toDateString()}</strong>
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} s={6} m={4} lg={4}>
        <Card className={cx(styles.card, styles.recovered)}>
          <Card.Body>
            <Card.Title>Recovered</Card.Title>
            <Card.Subtitle style={stylesSubtitle}>There are...</Card.Subtitle>
            <Card.Text as="h1">{recovered.value}</Card.Text>
            <Card.Subtitle style={stylesSubtitle}>
              total recoveries from COVID-19<br></br>as of{" "}
              <strong>{new Date(lastUpdate).toDateString()}</strong>
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} s={6} m={4} lg={4}>
        <Card className={cx(styles.card, styles.deaths)}>
          <Card.Body>
            <Card.Title>Deaths</Card.Title>
            <Card.Subtitle style={stylesSubtitle}>There are...</Card.Subtitle>
            <Card.Text as="h1">{deaths.value}</Card.Text>
            <Card.Subtitle style={stylesSubtitle}>
              fatalities from COVID-19<br></br>as of{" "}
              <strong>{new Date(lastUpdate).toDateString()}</strong>
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Cards;
