import { connect } from 'react-redux'
import InteractionAnimation from '../components/InteractionAnimation'
import { moveParticles } from '../actions/index'

const mapStateToProps = state => {
  return {
    particles: state.particles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    moveParticles: (time) => {dispatch(moveParticles(time))}
  }
}

const ParticlesAnimation = connect(
  mapStateToProps,
  mapDispatchToProps
)(InteractionAnimation)

export default ParticlesAnimation
