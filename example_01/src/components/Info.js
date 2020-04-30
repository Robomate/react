import React, { Component } from "react";
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from 'styled-components';

const Styledtab = styled.div`
  .nav-pills .nav-item.nav-link:not(.active) {
    // background-color: #f6f6f6!important;
    background-color: WhiteSmoke!important;
    color: #505050!important;
    border: none!important;
    margin-top: 0.0em;
    margin-bottom: 0.0em;
    // outline: none!important;
    // outline-style: solid!important;
    // outline-width: 1px!important;
    // outline-color: #cfcfcf!important;
    padding-top: 0px; 
    padding-bottom: 0px;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    // border: 1px solid #cfcfcf!important;
    // border-bottom: 1px solid #cfcfcf!important;
    // transition: 0.1s;
    box-shadow: none!important;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }

 .nav-pills .nav-item.nav-link.active {
    background-color: #505050!important;
    color: white!important;
    border: none!important;
    outline: none!important;
    margin-top: 0.0em;
    margin-bottom: 0.0em;
    padding-top: 0px; 
    padding-bottom: 0px;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    // border: 1px solid #cfcfcf!important;
    // border-down: 5px solid #cfcfcf!important;
    // padding: 5px;
    // transition: 0.1s;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }

  .nav-pills .nav-item.nav-link:hover {
    background-color:  	#585858!important;
    // transition-delay: 500ms;
    color: #E8E8E8!important;
  }

  .nav-tabs .nav-item.nav-link:not(.active) {
    // background-color: #f6f6f6!important;
    background-color: WhiteSmoke!important;
    color: #505050!important;
    border: none!important;
    margin-top: 0.0em!important;
    margin-bottom: 0.0em;
    // outline: none!important;
    // outline-style: solid!important;
    // outline-width: 1px!important;
    // outline-color: #cfcfcf!important;
    padding-top: 0px!important; 
    padding-bottom: 0px!important;
    -webkit-border-radius: 0!important;
    -moz-border-radius: 0!important;
    border-radius: 0!important;
    // border: 1px solid #cfcfcf!important;
    // border-bottom: 1px solid #cfcfcf!important;
    // transition: 0.1s;
    box-shadow: none!important;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }

  .nav-tabs .nav-item.nav-link.active {
    background-color: #505050!important;
    color: white!important;
    border: none!important;
    outline: none!important;
    margin-top: 0.0em;
    margin-bottom: 0.0em;
    padding-top: 0px; 
    padding-bottom: 0px;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    // border: 1px solid #cfcfcf!important;
    // border-down: 5px solid #cfcfcf!important;
    // padding: 5px;
    // transition: 0.1s;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }

  .tabcol_1 {
    // color: black;
    background-color: WhiteSmoke;
    margin-right: 0.0em;
    margin-left: 1.0em;
    // border: 1px solid #cfcfcf;
    border-top: 1px solid #E8E8E8;
    border-right: 1px solid #E8E8E8;
    border-left: 1px solid #E8E8E8;
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
    margin-right: 1.0em;
    border-top: 1px solid #E8E8E8;
    border-right: 1px solid #E8E8E8;
    border-bottom: 1px solid #E8E8E8;
    padding: 5px;
    // border-radius: 5px;
    // outline-style: solid!important;
    // outline-width: 1px!important;
    // outline-color: #cfcfcf;
  }

`;

export default class Info extends Component {  
  constructor(props) {
    super();
    this.state = {
      // Takes active tab from props if it is defined there
      activeTab: props.activeTab || 1
    };
    // Bind the handleSelect function already here (not in the render function)
    this.handleSelect = this.handleSelect.bind(this);
  }
  
  // https://codepen.io/tchaffee/pen/yMmywz
  render() {
    return (
      <Styledtab>
        <Tab.Container id="Tab1" defaultActiveKey={1} activeKey={this.state.activeTab} onSelect={this.handleSelect}>
          <Row>
            <Col className="tabcol_1">  
              <Tabs className="flex-column nav-tabs" activeKey={this.state.activeTab} onSelect={this.handleSelect}>
                <Tab eventKey={1} title="Tab 1"></Tab>
                <Tab eventKey={2} title="Tab 2"></Tab>
                <Tab eventKey={3} title="Tab 3"></Tab>
                <Tab eventKey={4} title="Tab 4"></Tab>
                <Tab eventKey={5} title="Tab 5"></Tab>
                <Tab eventKey={6} title="Tab 6"></Tab>
              </Tabs>
            </Col>
            <Col className="tabcol_2">
              <Tab.Content>
                <Tab.Pane eventKey={1}>
                 <p>Put your content here 1.</p>
                </Tab.Pane>
                <Tab.Pane eventKey={2}>
                  <p>Put your content here 2.</p>
                </Tab.Pane>
                <Tab.Pane eventKey={3}>
                  <p>Put your content here 3.</p>
                </Tab.Pane>
                <Tab.Pane eventKey={4}>
                  <p>Put your content here 4.</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Styledtab>
    );
  }
  
  handleSelect(selectedTab) {
    // The active tab must be set into the state so that
    // the Tabs component knows about the change and re-renders.
    this.setState({
      activeTab: selectedTab
    });
 }
}