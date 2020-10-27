import "./App.css";
import Navigation from "./Components/NavBar/index.js";
import CentralCard from "./Components/CentralCard/index.js";
import StatusToggler from "./Components/StatusToggler/index";

import { Container, Row, Col, Navbar } from "reactstrap";

function App() {
  return (
    <>
      <div className="App">
        <Navigation />
      </div>

      <Container>
        <Row>
          <Col xs="12">
            <StatusToggler />
          </Col>
        </Row>
      </Container>
      <CentralCard />
    </>
  );
}

export default App;
