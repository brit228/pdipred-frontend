import React from 'react'
import PropTypes from 'prop-types'
import { Jumbotron } from 'react-bootstrap'

const Prediction = ({ prediction }) => {
  const color = (val) => {
    var r = 0
    var g = 0
    if (val > 0.5) {
      g = 255
      r = Math.round((1.0 - val) * 2.0 * 255)
    } else {
      g = Math.round(val * 2.0 * 255)
      r = 255
    }
    return 'rgb('+r+','+g+',0)'
  }
  return(
    <span style={{
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      background: color(prediction),
      padding: '15px 10px',
      margin: '20px'
    }}>
      <b>{prediction}</b>
    </span>
  )
}

const PredictionOutput = ({ predictions }) => {
  return(
    <Jumbotron style={{width:'100%'}}>
      { predictions.length > 0 ? 
        <div style={{margin: '-30px 60px'}}>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          {predictions[0].map((p,i) => (
            <span style={{margin: '19px',color:'white',background:'gray',borderRadius:'5px',padding:'3px'}}>Drug {i+1}</span>
          ))}
        </div>
      : null}
      { predictions.map((p,i) => (
        <div style={{margin: '60px'}}>
          <span style={{color:'white',background:'gray',borderRadius:'5px',padding:'3px'}}>Protein {i+1}</span>
          {
            p.map((pred,j) => (
            <Prediction prediction={pred} />
            ))
          }
        </div>
      )) }
    </Jumbotron>
  )
}

PredictionOutput.propTypes = {
  predictions: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.number).isRequired
  ).isRequired
}

export default PredictionOutput
