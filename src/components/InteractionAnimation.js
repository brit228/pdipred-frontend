import React from 'react'
import PropTypes from 'prop-types'

const ParticleSVG = ({ color, size, x, y }) => {
  return (
      <circle cx={x} cy={y} r={size} fill={color} />
  )
}

const InteractionAnimation = ({ particles, moveParticles }) => {
  const startTime = Date.now()
  return (
    <svg style={{width: "100%", marginTop:'-30px'}} viewBox="0 2 100 16">
      {
        particles.map((particle, index) => (
          <ParticleSVG key={index} color={particle.color} size={particle.size} x={particle.x} y={particle.y} />
        ))
      }
      {
        setTimeout(
          () => {moveParticles(Date.now() - startTime)},
          10
        )
      }
    </svg>
  )
}

InteractionAnimation.propTypes = {
  particles: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  moveParticles: PropTypes.func.isRequired
}

export default InteractionAnimation