import React from 'react'
import { Container, Row } from 'react-bootstrap'
import PropTypes from 'prop-types'
import MoleculeViewer from './MolViewer';

const DrugResult = ({ drug }) => {
  return (
    <Container>
      <Row>
        <h2>{drug.commonName ? drug.commonName : drug.SMILES}</h2>
      </Row>
      {drug.code ? <Row>
        <MoleculeViewer code={drug.code} molecule='DRUG' />
      </Row> : <></>}
    </Container>
  )
}

DrugResult.propTypes = {
  drug: PropTypes.shape({
    code: PropTypes.string,
    SMILES: PropTypes.string.isRequired,
    commonName: PropTypes.string
  }).isRequired
}

export default DrugResult
