import React from 'react'
import { Row, Container } from 'react-bootstrap'

// import logo from './logo.svg';
import './App.css'

import NavbarComponent from './components/Navbar'
import ProteinsList from './containers/ProteinsList'
import DrugsList from './containers/DrugsList'
import ParticlesAnimation from './containers/ParticlesAnimation'
import ResultsList from './containers/ResultsList'

function App() {
  return (
    <>
      <NavbarComponent />
      <Container>
        <Row style={{margin:'20px'}}></Row>
        <Row>
          <ProteinsList />
        </Row>
        <Row>
          <ParticlesAnimation />
        </Row>
        <Row>
          <DrugsList />
        </Row>
        <ResultsList />
        <Row style={{margin:'20px'}}></Row>
      </Container>
    </>
  )
}

export default App
