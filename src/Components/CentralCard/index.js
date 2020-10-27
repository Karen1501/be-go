import React from "react";
import "./style.css";
import Clock from "../../assets/noun_clock_3244697.svg";
import Distance from "../../assets/dashboard.svg";
import Price from "../../assets/price-1.svg";
import Line from "../../assets/Line 9.svg";
import Arrow from "../../assets/Group 2.svg";
import Point from "../../assets/location.png";
import CustomPhill from "../CustomPhill/index";
import Avatar from "../../assets/Adam.svg";
import Indicator from "../../assets/indicator.png";

import { Container, Row, Col, Button } from "reactstrap";

function CentralCard() {
  return (
    <Container className="container-wrapper">
      <div className="date-wrapper">
        <h4 id="newOrder">New Order</h4>
        <span id="date">November 25 2020 &bull; 9:30 </span>
      </div>

      <Row>
        <Col xs="12">
          <div className="d-flex inf-wrapper">
            <CustomPhill title="APROX. TIME" img={Clock} text="4hr 30 min" />

            <CustomPhill title="DISTANCE" img={Distance} text="60 km" />

            <CustomPhill title="PRICE" img={Price} text="$ 120" />
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <div className="address-wrapper">
            <span>
              <img src={Arrow} />
              PICKUP
              <p>123 Main Street, Unit 21New York, 10001</p>
            </span>

            <span>
              DROPOFF
              <div>
                <img src={Point} />
                <p>476 McMaster Way, Pitsburg, PA 15222</p>
              </div>
            </span>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <div className="class-text">
            <span className="text-white">Hazardouz - Class 1 (2) 48Unit</span>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <div className="profile-data">
            <img src={Avatar} />
            <p>
              Marcus Klaus <br />
              <span>ID 098ytg67</span>
            </p>
            <a>EDIT</a>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <div className="points-wrapper">
            <p>
              Points earned <span>40</span>
            </p>
            <div className="btn-wrapper">
              <Button id="btn-send">Send</Button>
            </div>
          </div>
        </Col>
      </Row>

      <div className="indicator">
        <img src={Indicator} />
      </div>
    </Container>
  );
}

export default CentralCard;
