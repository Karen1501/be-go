import React, { useState } from "react";
import Avatar from "../../assets/Bitmap.svg";
import BellIcon from "../../assets/noun_notification_3350881.svg";
import "./style.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
} from "reactstrap";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
          </Nav>
        </Collapse>

        <div className="avatar-wrapper">
          <img className="avatar" src={Avatar} />
          <div className="user-data">
            <p className="cash m-0 text-white">
              <span>$</span>230.90
            </p>
            <p className="points m-0 text-white">10 Points</p>
          </div>
        </div>

        <img src={BellIcon} />
      </Navbar>
    </div>
  );
};

export default Navigation;
