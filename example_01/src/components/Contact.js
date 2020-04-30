import React from 'react'
import { Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab'
import ListGroup from 'react-bootstrap/ListGroup';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from 'styled-components';


const Styledtab = styled.div`

  .list-group-item.active {
    background-color:  	 	 	#585858!important;
    border-color:  	 	 	#585858!important;
    padding-left: 15px!important;
    padding-top: 2px!important;
    padding-bottom: 2px!important;
    // border: 1px solid #cfcfcf!important;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;

  }

  .list-group-item:not(.active) {
    background-color:  	#F5F5F5!important;
    border-color:  	#F5F5F5!important;
    // border: 1px solid #cfcfcf!important;
    padding-left: 15px!important;
    padding-top: 2px!important;
    padding-bottom: 2px!important;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;

  }

  .tabcol_1 {
    // color: black;
    background-color: WhiteSmoke;
    // margin-right: -0.5em;
    margin-left: 1.0em;
    border: 1px solid #cfcfcf;
    // border-top: 1px solid #E8E8E8;
    // border-right: 1px solid #E8E8E8;
    // border-left: 1px solid #E8E8E8;
    // border-bottom: 1px solid #cfcfcf;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    padding-down: 0px;
    // border-radius: 5px;
    // outline-style: solid!important;
    // outline-width: 1px!important;
    // outline-color: #cfcfcf;
  }

  .tabcol_2 {
    color: black;
    // background-color: #cfcfcf;
    // height: 50px; 
    padding-left: 20px!important;
    // margin-left: 1.0em;
    margin-right: 1.0em;
    border-top: 1px solid #cfcfcf;
    border-right: 1px solid #cfcfcf;
    border-bottom: 1px solid #cfcfcf;
    padding: 5px;
    // border-radius: 5px;
    // outline-style: solid!important;
    // outline-width: 1px!important;
    // outline-color: #cfcfcf;
  }

  .tabrow_1 {
    // color: black;
    background-color: WhiteSmoke;
    margin-right: -0.5em;
    margin-left: 1.0em;
    // border: 1px solid #cfcfcf;
    // border-top: 1px solid #E8E8E8;
    // border-right: 1px solid #E8E8E8;
    // border-left: 1px solid #E8E8E8;
    // border-bottom: 1px solid #cfcfcf;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    padding-down: 0px;
    border-radius: 5px;
    // outline-style: solid!important;
    // outline-width: 1px!important;
    // outline-color: #cfcfcf;
  }

`;


export const Contact = () => (
 
<Container fluid>
<Styledtab>
<Tab.Container id="list-group-tabs-example" >
  <Row >
    <Col className ="tabcol_1">
      <ListGroup variant="flush">
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
 
    <Col className ="tabcol_2">
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
 
</Container>



)



