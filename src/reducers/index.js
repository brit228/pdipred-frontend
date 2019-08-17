import { combineReducers } from 'redux'

import drugs from './drugs'
import proteins from './proteins'
import particles from './particles'
import results from './results'

const combinedReducer = combineReducers({
  drugs,
  proteins,
  particles,
  results
})

function predictionReducer(state, action) {
  switch (action.type) {
    case 'PREDICT':
      const predictPromise = new Promise((resolve) => {
        console.log(process.env.REACT_APP_BACKEND_URL+'/predict')
        fetch(process.env.REACT_APP_BACKEND_URL+'/predict', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            proteins: state.proteins.map((p,i) => (p.text)),
            drugs: state.drugs.map((d,i) => (d.text))
          })
        }).then(response => response.json())
          .then(data => {resolve(data)})
      })
      var output = Object.assign({}, state, {
        results: Object.assign({}, state.results, {
          inputs: {
            drugs: state.drugs,
            proteins: state.proteins
          },
          outputs: {
            drugs: [],
            proteins: [],
            predictions: []
          },
          updatePromise: predictPromise
        })
      })
      return output
    case 'UPDATE_RESULTS':
      return Object.assign({}, state, {
        results: Object.assign({}, state.results, {
          outputs: Object.assign({}, state.results.outputs, {
            proteins: action.newOutput.proteins,
            drugs: action.newOutput.drugs,
            predictions: action.newOutput.predictions
          }),
          updatePromise: null
        })
      })
    default:
      return state
  }
}

function rootReducer(state, action) {
  const intermediateState = combinedReducer(state, action)
  return predictionReducer(intermediateState, action)
}

export default rootReducer
