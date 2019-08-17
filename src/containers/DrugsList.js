import { connect } from 'react-redux'
import DrugSearch from '../components/DrugSearch'
import { addDrug, editDrugInput, editDrugText, removeDrug } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    drugs: state.drugs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDrug: () => {dispatch(addDrug('Name'))},
    editDrugInput: (id, input_type) => {dispatch(editDrugInput(id, input_type))},
    editDrugText: (id, text) => {dispatch(editDrugText(id, text))},
    removeDrug: (id) => {dispatch(removeDrug(id))}
  }
}

const DrugsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(DrugSearch)

export default DrugsList
