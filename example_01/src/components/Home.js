import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab'
import ListGroup from 'react-bootstrap/ListGroup';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from 'styled-components';



const Styledtab = styled.div`

  .list-group-item.active {
    background-color: #aed248!important;
    border-color: #aed248!important;

  }

`;


export const Home = () => (
  <div>
    <h2>Hello World</h2>
    <p>Put your content here.</p>

    <Accordion >
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Click me!
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          Click me!
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2">
          Click me!
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
    <br/>
    <Styledtab>
    <Tab.Container id="list-group-tabs-example" >
  <Row>
    <Col sm={4}>
      <ListGroup >
        <ListGroup.Item action href="#1" className="list-group-item">
          Link 1
        </ListGroup.Item > 
        <ListGroup.Item action href="#2" className="list-group-item">
          Link 2
        </ListGroup.Item>
        <ListGroup.Item action href="#3" className="list-group-item">
          Link 3
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col sm={8}>
      <Tab.Content>
        <Tab.Pane eventKey="#1">
          <p>Put your content here 1.</p>
        </Tab.Pane>
        <Tab.Pane eventKey="#2">
          <p>Put your content here 2.</p>
        </Tab.Pane>
        <Tab.Pane eventKey="#3">
          <p>Put your content here 3.</p>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</Styledtab>







   
</div>
)
