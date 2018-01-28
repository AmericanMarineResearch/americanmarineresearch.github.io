import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import {  Button,
          Clearfix,
          Col, 
          Grid,
          Jumbotron,
          MenuItem,
          Nav,
          NavDropdown,
          NavItem,
          Navbar, 
          Row } from 'react-bootstrap';

import NavHeader from '../components/NavHeader.js'
import Footer from '../components/Footer.js'
import { __COMPONENT_STYLES__, } from '../global/Styles.js'
import BackgroundImage from '../components/BackgroundImage.js'
import { White } from '../global/Colors.js'
const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <NavHeader/>

        <Jumbotron style={{...__COMPONENT_STYLES__.jumbotron, ...styles.jumbotron}}> 
          <BackgroundImage contentStyle={__COMPONENT_STYLES__.jumboContent}>
            
            <p style={__COMPONENT_STYLES__.jumboSubtitle}>
              On the Hunt
            </p>
            <h1 style={__COMPONENT_STYLES__.jumboText}>
              American Marine Research Company
            </h1>

          </BackgroundImage>
        </Jumbotron>

        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={3}><h3>Content Title</h3><br />{dummySentences.slice(0, 6).join(' ')}</Col>
            <Col sm={6} md={3}><h3>Content Title</h3><br />{dummySentences.slice(0, 4).join(' ')}</Col>
            <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>
            <Col sm={6} md={3}><h3>Content Title</h3><br />{dummySentences.slice(0, 6).join(' ')}</Col>
            <Col sm={6} md={3}><h3>Content Title</h3><br />{dummySentences.slice(0, 2).join(' ')}</Col>
          </Row>
        </Grid>

        <Footer/>
      </div>
    );
  }
}


const styles = {
  jumbotron: {
    height: '100vh',

  },

}

