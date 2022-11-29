import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Daphne Ruth</span>
            <span className="purple">.</span>
            <br />
            <br />
            <br />
            </p>
            {/*
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
  */}
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!{" "}
          </p>
          <footer className="blockquote-footer">Daphne</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
