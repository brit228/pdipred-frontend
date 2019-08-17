import React from 'react'
import { Button, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'
import PredictionOutput from './PredictionOutput'
// import DrugResult from './DrugResult'
// import MoleculeViewer from './MolViewer'

const Results = ({ drugs, proteins, predictions, predict, update, updateResults }) => {
  if (update) {
    update.then(val => {updateResults(val)})
  }

  return (
    <>
      <Row>
        <Button onClick={() => {predict()}} style={{width:'100%'}}><h3>Predict</h3></Button>
      </Row>
      {predictions.length > 0 ?
        <Row>
          <PredictionOutput predictions={predictions} />
        </Row>
      : null}
    </>
  )
}

Results.propTypes = {
  drugs: PropTypes.array,
  proteins: PropTypes.array,
  predictions: PropTypes.array,
  predict: PropTypes.func.isRequired,
  update: PropTypes.objectOf(Promise),
  updateResults: PropTypes.func.isRequired
}

export default Results