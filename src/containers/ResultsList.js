import { connect } from 'react-redux'
import Results from '../components/Results'
import { predictInputs, updateResults } from '../actions/index'

const mapStateToProps = state => {
  return ({
    drugs: state.results.outputs.drugs,
    proteins: state.results.outputs.proteins,
    predictions: state.results.outputs.predictions,
    update: state.results.updatePromise
  })
}

const mapDispatchToProps = dispatch => {
  return({
    predict: () => {dispatch(predictInputs())},
    updateResults: (out) => {dispatch(updateResults(out))}
  })
}

const ResultsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Results)

export default ResultsList
