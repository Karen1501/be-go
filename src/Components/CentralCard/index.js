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
          <div className="address-wrapper position-relative">
            <img alt="img" src={Line} className="travel-line" />

            <div className="d-flex align-items-center">
              <img alt="img" src={Arrow} />
              <div className="d-flex flex-column ml-2">
                <span>PICKUP</span>
                <p className="text-white" id="text">
                  123 Main Street, Unit 21New York, 10001
                </p>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <img alt="img" src={Point} />

              <div className="d-flex flex-column ml-2">
                <span>DROPOFF</span>
                <p className="text-white" id="text">
                  476 McMaster Way, Pitsburg, PA 15222
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <div className="class-text">
            <p className="text-white">Hazardouz - Class 1 (2) 48Unit</p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <div className="profile-data">
            <img alt="img" src={Avatar} />
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
        <img alt="img" src={Indicator} />
      </div>
    </Container>
  );
}

export default CentralCard;
