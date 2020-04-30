import React, { Component } from "react";
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Alert from "react-bootstrap/Alert";
import styled from 'styled-components';


const StylesButtonGroup = styled.div`


  // .flex-column {
  //   color: #000;
  //   // background-color: #000;
  //   // opacity: 0.6;
  //   // position: absolute;
  //   // top: 0;
  //   // left: 0;
  //   // bottom: 0;
  //   // right: 0;
  //   // z-index: -1;
  //   // min-height: 8vh;
  //   // width: 100%;
  //   // height: 2px;
  //   // padding-bottom: 90000px;
  //   // padding-top : 1px;
  //   // margin-top: 2px;
  //   // margin-bottom: 2px;
  //   // border: 30px;
  //   // display: flex;
  //   // justify-content: center;
  //   // align-items: center;
  //   // vertical-align: middle;
  // }

  .b1 {
    color: white;
    background-color: #bbb;
    opacity: 0.7;
    border: 0px;
    height: 50px;
    top: 0;

  }

  .t1-l {
    color: black;
    // height: 50px;
    top: 0;
  }

  .colorp {
    color: white;
    background-color: grey;
    // height: 50px;
    // top: 0;
  }

  .style_link {
    color: white;
    // background-color: #D8D8D8;
    // height: 50px;
    // top: 0;
  }

  .style_btn {
    color: white ;
    // background-color: #D8D8D8;
    // height: 50px;
    // top: 0;
  }

  

  
`;

const StylesVtab = styled.div`
/* Style the tab */
.tab {
  float: left;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  width: 30%;
  height: 300px;
}

/* Style the buttons inside the tab */
.tab button {
  display: block;
  background-color: inherit;
  color: black;
  padding: 22px 16px;
  width: 100%;
  border: none;
  outline: none;
  text-align: left;
  cursor: pointer;
  transition: 0.3s;
  font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current "tab button" class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  float: left;
  padding: 0px 12px;
  border: 1px solid #ccc;
  width: 70%;
  border-left: none;
  height: 300px;
}

`;

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_vertical_tabs


export default class About extends Component {
	render() {
		return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col md="auto">
            
          <div className="btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-secondary active">
              
            </label>
          </div>

          <div className="flex-column" >
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
            Single toggle
          </button>
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
            Single toggle
          </button>
          </div>


          

                <StylesButtonGroup>
              <ButtonGroup vertical >

                <button type="button" className="btn-secondary style_btn" data-toggle="button" aria-pressed="false" autocomplete="off" size="sm" >
                  <Nav.Link eventKey={1} className="style_link" >Button search for the keywords to learn more about each warning. search for the keywords </Nav.Link>
                </button>
                <Button className="btn-secondary style_btn" size="sm" >
                  <Nav.Link eventKey={2} className="style_link">Button search for the keywords to learn more about each warning. search for the keywords </Nav.Link>
                </Button>
                <Button className="btn-secondary style_btn" size="sm" >Button </Button>

              </ButtonGroup>
            </StylesButtonGroup>


            <StylesVtab>
              <div class="tab">
                <button class="tablinks" onclick="openCity(event, 'London')" id="defaultOpen">
                  <Nav.Link eventKey={1} className="style_link" >Button search  </Nav.Link></button>
                <button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
                <button class="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>
              </div>
              <div id="London" class="tabcontent">
                <h3>London</h3>
                <p>London is the capital city of England.</p>
              </div>

              {/* <div id="Paris" class="tabcontent">
                <h3>Paris</h3>
                <p>Paris is the capital of France.</p> 
              </div>

              <div id="Tokyo" class="tabcontent">
                <h3>Tokyo</h3>
                <p>Tokyo is the capital of Japan.</p>
              </div> */}
            </StylesVtab>


          </Col>
          <Col>
            <Tab.Content>
              <Tab.Pane eventKey={1}>
                <p>Put your content here 0.</p>
              </Tab.Pane>
              <Tab.Pane eventKey={2}>
                <p>Put your content here 1.</p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>



      
		
		)
	}
}


// {/* <div>
//         <Styles>
//         <Tab.Container id="left-tabs-example" defaultActiveKey="first">
//         <Row>
//           <Col sm={3}>
//             <Nav className="flex-column">
//               <Nav.Item className="t1">
//                 <Button variant="secondary" className="b1">
//                   <Nav.Link eventKey="first" className="t1-l">Tab 1</Nav.Link>
//                 </Button>
//               </Nav.Item>
//               < Nav.Item className="t1">
//                 <Button variant="secondary" className="b1">
//                   <Nav.Link eventKey="second" className="t1-l">Tab 1</Nav.Link>
//                 </Button>
//               </Nav.Item>

             
//             </Nav>
//           </Col> */}

//           {/* <Col sm={9}>
//             <Tab.Content>
//               <Tab.Pane eventKey="first" className="tp1">
              
//               {/* <Alert variant="success">gfjk</Alert>
//               <Alert variant="danger"> gfjkggg </Alert> */}
                
      //         </Tab.Pane>

      //         <Tab.Pane eventKey="second">
      //         <Alert variant="success">gfjk</Alert>
      //         <Alert variant="danger"> gfjkggg </Alert>
             
                
      //         </Tab.Pane>
      //       </Tab.Content>
      //     </Col>
      //   </Row>
      // </Tab.Container>
      // </Styles>
      // </div> */}