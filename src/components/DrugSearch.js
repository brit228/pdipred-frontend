import React from 'react'
import PropTypes from 'prop-types'
import { Jumbotron, Row, Button } from 'react-bootstrap'
import DrugSearchItem from './DrugSearchItem'

const DrugSearch = ({ drugs, addDrug, editDrugInput, editDrugText, removeDrug }) => (
  <Jumbotron style={{width:'100%'}}>
    <Row>
      <h4 style={{paddingInlineStart:'40px'}}>DRUGS</h4>
    </Row>
    <Row>
      <ul style={{width: "100%",paddingInlineEnd:'40px',paddingTop:'40px',paddingBottom:'40px'}}>
        {
          drugs.map((drug, index) => (
            <DrugSearchItem key={index} id={index} drug={drug} editInput={editDrugInput} editText={editDrugText} remove={removeDrug} />
          ))
        }
      </ul>
    </Row>
    <Row style={{paddingInlineStart:'40px'}}>
      <Button variant="primary" onClick={addDrug} disabled={drugs.length >= 5} className="float-right">Add Drug Search</Button>
    </Row>
  </Jumbotron>
)

DrugSearch.propTypes = {
  drugs: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      input_type: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  addDrug: PropTypes.func.isRequired,
  editDrugInput: PropTypes.func.isRequired,
  editDrugText: PropTypes.func.isRequired,
  removeDrug: PropTypes.func.isRequired
}

export default DrugSearch
