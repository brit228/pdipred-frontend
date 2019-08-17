import { connect } from 'react-redux'
import ProteinSearch from '../components/ProteinSearch'
import { addProtein, editProteinInput, editProteinText, removeProtein } from '../actions/index'

const mapStateToProps = state => {
  return {
    proteins: state.proteins
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addProtein: () => {dispatch(addProtein('Name'))},
    editProteinInput: (id, input_type) => {dispatch(editProteinInput(id, input_type))},
    editProteinText: (id, text) => {dispatch(editProteinText(id, text))},
    removeProtein: (id) => {dispatch(removeProtein(id))}
  }
}

const ProteinsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProteinSearch)

export default ProteinsList
