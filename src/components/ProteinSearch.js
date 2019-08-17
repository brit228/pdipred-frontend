import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Button, Jumbotron } from 'react-bootstrap'
import ProteinSearchItem from './ProteinSearchItem'

const ProteinSearch = ({ proteins, addProtein, editProteinInput, editProteinText, removeProtein }) => (
  <Jumbotron style={{width:'100%'}}>
    <Row>
      <h4 style={{paddingInlineStart:'40px'}}>PROTEINS</h4>
    </Row>
    <Row>
      <ul style={{width: "100%",paddingInlineEnd:'40px',paddingTop:'40px',paddingBottom:'40px'}}>
        {
          proteins.map((protein, index) => (
            <ProteinSearchItem key={index} id={index} protein={protein} editInput={editProteinInput} editText={editProteinText} remove={removeProtein} />
          ))
        }
      </ul>
    </Row>
    <Row style={{paddingInlineStart:'40px'}}>
      <Button className="float-right" variant="primary" onClick={addProtein} disabled={proteins.length >= 5}>Add Protein Search</Button>
    </Row>
  </Jumbotron>
)

ProteinSearch.propTypes = {
  proteins: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      input_type: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  addProtein: PropTypes.func.isRequired,
  editProteinInput: PropTypes.func.isRequired,
  editProteinText: PropTypes.func.isRequired,
  removeProtein: PropTypes.func.isRequired
}

export default ProteinSearch
