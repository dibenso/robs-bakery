import { useState } from "react";
import { Card, Button, Accordion, ListGroup } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { scroller, Element } from "react-scroll";

const styles = {
  container: { textAlign: "center" },
  buttonText: { color: "black" },
  card: { backgroundColor: "white" },
  toggle: { margin: "10px", width: "100px", height: "80px" },
  serviceItem: { fontWeight: "bold" }
};

const smoothScroll = elementName => {
  scroller.scrollTo(elementName, {
    duration: 1000,
    smooth: true,
    offset: -50
  });
};

export default function Services() {
  const [serviceDetailKey, setServiceDetailKey] = useState(-1);

  return (
    <div style={styles.container}>
      <Element name="services">
        <Accordion>
          <Card style={styles.card}>
            <Card.Header>
              <h2 style={{ color: "black" }}>Select A Package To Show Price And Details</h2>
              <Accordion.Toggle
                as={Button}
                variant="dark"
                eventKey="0"
                style={styles.toggle}
                onClick={() => {
                  if (serviceDetailKey === 0) smoothScroll("services");
                  else smoothScroll("service-details");
                  setServiceDetailKey(0);
                }}>
                Black Package
              </Accordion.Toggle>
              <Accordion.Toggle
                as={Button}
                variant="primary"
                eventKey="1"
                style={styles.toggle}
                onClick={() => {
                  if (serviceDetailKey === 1) smoothScroll("services");
                  else smoothScroll("service-details");
                  setServiceDetailKey(1);
                }}>
                Blue Package
              </Accordion.Toggle>
              <Accordion.Toggle
                as={Button}
                variant="danger"
                eventKey="2"
                style={styles.toggle}
                onClick={() => {
                  if (serviceDetailKey === 2) smoothScroll("services");
                  else smoothScroll("service-details");
                  setServiceDetailKey(2);
                }}>
                Red Package
              </Accordion.Toggle>
              <Accordion.Toggle
                as={Button}
                variant="success"
                eventKey="3"
                style={styles.toggle}
                onClick={() => {
                  if (serviceDetailKey === 3) smoothScroll("services");
                  else smoothScroll("service-details");
                  setServiceDetailKey(3);
                }}>
                Green Package
              </Accordion.Toggle>
              <Accordion.Toggle
                as={Button}
                variant="secondary"
                eventKey="4"
                style={styles.toggle}
                onClick={() => {
                  if (serviceDetailKey === 4) smoothScroll("services");
                  else smoothScroll("service-details");
                  setServiceDetailKey(4);
                }}>
                Basic Package
              </Accordion.Toggle>
              <Accordion.Toggle
                as={Button}
                variant="warning"
                eventKey="5"
                style={styles.toggle}
                onClick={() => {
                  if (serviceDetailKey === 5) smoothScroll("services");
                  else smoothScroll("service-details");
                  setServiceDetailKey(5);
                }}>
                Add-ons
              </Accordion.Toggle>
            </Card.Header>
            <Element name="service-details">
              <Accordion.Collapse eventKey="0">
                <Card.Body style={{ color: "white", backgroundColor: "#343a40" }}>
                  <h2 style={styles.serviceItem}>Cars: $200.00</h2>
                  <h2 style={styles.serviceItem}>Trucks: $250.00</h2>
                  <ListGroup>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Detailed Vacuum `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Interior Clean (Includes Dash Board, Cup Holders, Doors, Door Jams, etc ...) `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Shampooing `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Deep Clean Scrub `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Steam Clean `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Foam Bath `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Hand Wax (2-3 Month Protection From Bug And Animal Stains, Water Spots, And More) `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Tires / Rims Clean `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Trunk Vacuumed `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Sealant `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Engine Cleaned `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Undercarriage Spray `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="1">
                <Card.Body style={{ color: "white", backgroundColor: "#007bff" }}>
                  <h2 style={styles.serviceItem}>Cars: $100.00</h2>
                  <h2 style={styles.serviceItem}>Trucks: $150.00</h2>
                  <ListGroup>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Detailed Vacuum `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Interior Clean (Includes Dash Board, Cup Holders, Doors, Door Jams, etc ...) `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Steam Clean `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Foam Bath `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Spray Wax (1-2 Month Protection From Bug And Animal Stains, Water Spots, And More) `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Tires / Rims Clean `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Trunk Vacuumed `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Engine Cleaned `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Sealant `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="2">
                <Card.Body style={{ color: "white", backgroundColor: "#dc3545" }}>
                  <h2 style={styles.serviceItem}>Cars: $75.00</h2>
                  <h2 style={styles.serviceItem}>Trucks: $100.00</h2>
                  <ListGroup>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Detailed Vacuum `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Interior Clean (Includes Dash Board, Cup Holders, Doors, Door Jams, etc ...) `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Foam Bath `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Spray Wax (1-2 Month Protection From Bug And Animal Stains, Water Spots, And More) `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Tires / Rims Clean `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="3">
                <Card.Body style={{ color: "white", backgroundColor: "#28a745" }}>
                  <h2 style={styles.serviceItem}>Cars: $50.00</h2>
                  <h2 style={styles.serviceItem}>Trucks: $75.00</h2>
                  <ListGroup>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Detailed Vacuum `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Interior Clean (Includes Dash Board, Cup Holders, Doors, Door Jams, etc ...) `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Foam Bath `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Tires / Rims Clean `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="4">
                <Card.Body style={{ color: "white", backgroundColor: "#6c757d" }}>
                  <h2 style={styles.serviceItem}>Cars: $30.00</h2>
                  <h2 style={styles.serviceItem}>Trucks: $45.00</h2>
                  <ListGroup>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Foam Bath `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item variant="success">
                      <p style={styles.serviceItem}>
                        {`Spray Wax (1-2 Month Protection From Bug And Animal Stains, Water Spots, And More) `}
                        <FaCheck color="black" />
                      </p>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="5">
                <Card.Body style={{ color: "black", backgroundColor: "#ffc107" }}>
                  <ListGroup>
                    <ListGroup.Item>
                      <p style={styles.serviceItem}>Detailed Vacuum: $10.00</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p style={styles.serviceItem}>
                        Full Interior Detail: $75.00 For Cars And $125.00 For Trucks. (Includes Dash Board, Cup Holders,
                        Doors, Door Jams, etc ..., Deep Scrub, And Steam Clean)
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p style={styles.serviceItem}>
                        Basic Interior Clean: $30.00 For Cars And $50.00 For Trucks. (Includes Dash Board, Cup Holders,
                        Doors, Door Jams, etc ...)
                      </p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p style={styles.serviceItem}>Undercarriage Clean: $20.00</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p style={styles.serviceItem}>Engine Bay Cleaning: $45.00</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p style={styles.serviceItem}>Foam Bath: $30.00</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <p style={styles.serviceItem}>Steam Clean: $40.00</p>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Element>
          </Card>
        </Accordion>
      </Element>
    </div>
  );
}
