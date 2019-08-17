import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import biopv from 'bio-pv'

const MoleculeViewer = ({ code, molecule }) => {
  let viewer = React.createRef()

  useEffect(() => {
    var options = {
      width: 600,
      height: 600,
      antialias: true,
      quality : 'medium'
    }
    let view = biopv.Viewer(viewer.current, options)
    switch (molecule) {
      case 'PROTEIN':
        fetch('http://pdb.org/pdb/files/' + code.split(':')[0] + '.pdb')
          .then(response => response.text())
          .then(data => {
            var structure = biopv.io.pdb(data)
            view.cartoon('protein', structure.select({chain: code.split(':')[1]}))
            view.fitTo(structure.select({chain: code.split(':')[1]}))
          })
        break
      case 'DRUG':
        fetch('http://files.rcsb.org/ligands/view/' + code + '_model.sdf')
          .then(response => response.text())
          .then(data => {
            var structure = biopv.io.sdf(data)
            view.renderAs('drug', structure.select(), 'ballsAndSticks')
            view.fitTo(structure)
          })
        break
      default:
        break
    }
  }, [viewer, code, molecule])
  
  return (
    <div ref={viewer}></div>
  )
}

MoleculeViewer.propTypes = {
  code: PropTypes.string.isRequired,
  molecule: PropTypes.string.isRequired
}

export default MoleculeViewer