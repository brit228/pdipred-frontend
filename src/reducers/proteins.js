const initialState = [
  {
    text: '',
    input_type: 'Name'
  }
]

const proteins = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PROTEIN':
      return [
        ...state,
        {
          text: action.text,
          input_type: action.input_type
        }
      ]
    case 'REMOVE_PROTEIN':
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
    case 'EDIT_PROTEIN_INPUT':
      return Object.assign([], state, state.map((protein, index) => {
        if (index === action.id) {
          return Object.assign({}, protein, {
            input_type: action.input_type
          })
        }
        return protein
      }))
    case 'EDIT_PROTEIN_TEXT':
      return Object.assign([], state, state.map((protein, index) => {
        if (index === action.id) {
          return Object.assign({}, protein, {
            text: action.text
          })
        }
        return protein
      }))
    default:
      return state
  }
}

export default proteins
