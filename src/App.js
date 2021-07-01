import "./App.css";
import CardGroupp from "./Components/CardGroupp";
import { Row, Col } from "reactstrap";
import Collapse from "./Components/Collapse";

function App() {
  return (
    <div className="aa" >
      <Row >
        <Col md="3">
          <Collapse href="first" >
            <CardGroupp
              cardTitle="card 1"
              cardText="Lorem Ipsum Text 1"
              updatedTime="Last updated 1 min ago"
              image="https://picsum.photos/id/1/200/300"
            ></CardGroupp>
          </Collapse>
        </Col>

        <Col md="3">
          <Collapse href="second">
            <CardGroupp
              
              cardText="Lorem Ipsum Text 2"
              updatedTime="Last updated 2 min ago"
              image="https://picsum.photos/id/10/200/300"
            ></CardGroupp>
          </Collapse>
        </Col>

        <Col md="3">
          <Collapse href="third">
            <CardGroupp
              cardTitle="card 3"
              cardText="Lorem Ipsum Text 3"
              updatedTime="Last updated 3 min ago"
              image="https://picsum.photos/id/100/200/300"
            ></CardGroupp>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
}

export default App;
