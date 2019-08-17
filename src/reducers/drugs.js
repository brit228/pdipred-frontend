const initialState = [
  {
    text: '',
    input_type: 'Name'
  }
]

const drugs = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DRUG':
      return [
        ...state,
        {
          text: action.text,
          input_type: action.input_type
        }
      ]
    case 'REMOVE_DRUG':
      if (state.length === 1) {
        return initialState
      } else if (action.id === state.length - 1) {
        return [
          ...state.slice(0, action.id)
        ]
      } else if (action.id === 0) {
        return [
          ...state.slice(action.id + 1)
        ]
      } else {
        return [
          ...state.slice(0, action.id),
          ...state.slice(action.id + 1)
        ]
      }
    case 'EDIT_DRUG_INPUT':
      return Object.assign([], state, state.map((drug, index) => {
        if (index === action.id) {
          return Object.assign({}, drug, {
            input_type: action.input_type
          })
        }
        return drug
      }))
    case 'EDIT_DRUG_TEXT':
      return Object.assign([], state, state.map((drug, index) => {
        if (index === action.id) {
          return Object.assign({}, drug, {
            text: action.text
          })
        }
        return drug
      }))
    default:
      return state
  }
}

export default drugs
