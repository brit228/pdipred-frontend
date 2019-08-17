import React from 'react'
import { Button, InputGroup, Dropdown, DropdownButton, FormControl } from 'react-bootstrap'
import PropTypes from 'prop-types'

const ProteinSearchItem = ({ id, protein, editInput, editText, remove }) => {
  return (
    // <InputGroup className="mb-3">
    //   <InputGroup.Prepend>
    //     <Button onClick={() => {remove(id)}} variant="outline-secondary">Remove</Button>
    //   </InputGroup.Prepend>
    //   <DropdownButton
    //     as={InputGroup.Prepend}
    //     variant="outline-secondary"
    //     title={protein.input_type}
    //     id="input-group-dropdown-1"
    //   >
    //     <Dropdown.Item onClick={() => {editInput(id, 'Name')}}>Name</Dropdown.Item>
    //     <Dropdown.Item onClick={() => {editInput(id, 'PDB ID')}}>PDB ID</Dropdown.Item>
    //     <Dropdown.Item onClick={() => {editInput(id, 'Sequence')}}>Sequence</Dropdown.Item>
    //     <Dropdown.Item onClick={() => {editInput(id, 'FASTA File')}}>FASTA File</Dropdown.Item>
    //   </DropdownButton>
    //   <FormControl
    //     onChange={e => {editText(id, e.target.value)}}
    //     aria-describedby="basic-addon1"
    //     value={protein.text}
    //   />
    // </InputGroup>
    <InputGroup className="mb-3" style={{width:'100%'}}>
      <InputGroup.Prepend>
        <Button onClick={() => {remove(id)}} variant="outline-secondary">Remove</Button>
        <Button variant="outline-primary">Protein {id+1}</Button>
      </InputGroup.Prepend>
      <FormControl
        onChange={e => {editText(id, e.target.value)}}
        aria-describedby="basic-addon1"
        value={protein.text}
      />
    </InputGroup>
  )
}

ProteinSearchItem.propTypes = {
  id: PropTypes.number.isRequired,
  protein: PropTypes.shape({
    text: PropTypes.string,
    input_type: PropTypes.string.isRequired
  }).isRequired,
  editInput: PropTypes.func.isRequired,
  editText: PropTypes.func.isRequired
}

export default ProteinSearchItem
