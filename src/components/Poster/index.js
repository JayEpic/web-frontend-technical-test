import React from "react";
import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Movies from "../../movies.json";
import './poster.css';

export default class Poster extends Component {
  render() {
    return (
      <>
        <Container fluid>
            {Movies.map((movie, i) => (
              <Row className="poster">
                <Col key={i} sm>
                    <span>
                    <img src={"./dist/" + movie.cover} key={i}></img>
                    <p>{movie.title}</p>
                    </span>
                </Col>
              </Row>
            ))}
        </Container>
      </>
    );
  }
}
