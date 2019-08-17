export const addProtein = (input_type) => ({
  type: 'ADD_PROTEIN',
  input_type,
  text: ''
})

export const removeProtein = id => ({
  type: 'REMOVE_PROTEIN',
  id
})

export const editProteinText = (id, text) => ({
  type: 'EDIT_PROTEIN_TEXT',
  id,
  text
})

export const editProteinInput = (id, input_type) => ({
  type: 'EDIT_PROTEIN_INPUT',
  id,
  input_type
})

export const addDrug = (input_type) => ({
  type: 'ADD_DRUG',
  input_type,
  text: ''
})

export const removeDrug = id => ({
  type: 'REMOVE_DRUG',
  id
})

export const editDrugText = (id, text) => ({
  type: 'EDIT_DRUG_TEXT',
  id,
  text
})

export const editDrugInput = (id, input_type) => ({
  type: 'EDIT_DRUG_INPUT',
  id,
  input_type
})

export const moveParticles = (time) => ({
  type: 'MOVE_PARTICLES',
  time
})

export const predictInputs = () => ({
  type: 'PREDICT'
})

export const updateResults = (newOutput) => ({
  type: 'UPDATE_RESULTS',
  newOutput
})
