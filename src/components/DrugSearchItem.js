import React from 'react'
import { Button, InputGroup, Dropdown, DropdownButton, FormControl } from 'react-bootstrap'
import PropTypes from 'prop-types'

const DrugSearchItem = ({ id, drug, editInput, editText, remove }) => {
  return (
    // <InputGroup className="mb-3">
    //   <FormControl
    //     onChange={e => {editText(id, e.target.value)}}
    //     aria-describedby="basic-addon1"
    //     value={drug.text}
    //   />
    //   <DropdownButton
    //     as={InputGroup.Append}
    //     variant="outline-secondary"
    //     title={drug.input_type}
    //     id="input-group-dropdown-1"
    //   >
    //     <Dropdown.Item onClick={() => {editInput(id, 'Name')}}>Name</Dropdown.Item>
    //     <Dropdown.Item onClick={() => {editInput(id, 'PDB Ligand ID')}}>PDB Ligand ID</Dropdown.Item>
    //     <Dropdown.Item onClick={() => {editInput(id, 'SMILES')}}>SMILES</Dropdown.Item>
    //   </DropdownButton>
    //   <InputGroup.Append>
    //     <Button onClick={() => {remove(id)}} variant="outline-secondary">Remove</Button>
    //   </InputGroup.Append>
    // </InputGroup>
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <Button onClick={() => {remove(id)}} variant="outline-secondary">Remove</Button>
        <Button variant="outline-primary">Drug {id+1}</Button>
      </InputGroup.Prepend>
      <FormControl
        onChange={e => {editText(id, e.target.value)}}
        aria-describedby="basic-addon1"
        value={drug.text}
      />
    </InputGroup>
  )
}

DrugSearchItem.propTypes = {
  id: PropTypes.number.isRequired,
  drug: PropTypes.shape({
    text: PropTypes.string,
    input_type: PropTypes.string.isRequired
  }).isRequired,
  editInput: PropTypes.func.isRequired,
  editText: PropTypes.func.isRequired
}

export default DrugSearchItem
