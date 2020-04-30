import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
// import styled from 'styled-components';
// import boatImage from '../assets/boatImage.jpg';

// const Styles = styled.div`


//   .overlay {
//     background-color: #000;
//     opacity: 0.6;
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     z-index: -1;
// min-height: 8vh;
    // width: 100%;
    // height: 2px;
    // padding-bottom: 90000px;
    // padding-top : 1px;
    // margin-top: 2px;
    // margin-bottom: 2px;
    // border: 30px;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // vertical-align: middle;
//   }
// `;

export const Jumbotron = () => (
  // <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome</h1>
        <p>Learn to code from my YouTube videos</p>
      </Container>
    </Jumbo>
  // </Styles>
)
