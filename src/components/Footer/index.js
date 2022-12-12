import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./footer.css";

export default function Footer() {
  return (
    <Navbar className="footer">
      <Container>
        <Navbar.Brand>
            <Nav.Link>
                <Link to="/">
                    <img src="./dist/assets/icons/home.png"></img>
                    <p>Accueil</p>
                </Link>
            </Nav.Link>

            <Nav.Link>
                <Link to="/selection">
                    <img src="./dist/assets/icons/star-3.png"></img>
                    <p>Ma sélection</p>
                </Link>
            </Nav.Link>

            <Nav.Link>
                <Link to="/account">
                    <img src="./dist/assets/icons/account.png"></img>
                    <p>Ma sélection</p>
                </Link>
            </Nav.Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
