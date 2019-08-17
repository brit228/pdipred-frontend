function generateParticles({num, width, height, timex, timey, dw, dh, dtx, dty}) {
  const particles = new Array(num)
  for (var i = 0; i < num; i++) {
    const xMin = (Math.random() - 0.5) * dw + dw
    const xMax = (Math.random() - 0.5) * dw + width - dw
    const yMin = (Math.random() - 0.5) * dh + dh
    const yMax = (Math.random() - 0.5) * dh + height - dh
    const xTime = (Math.random() - 0.5) * dtx + timex
    const yTime = (Math.random() - 0.5) * dty + timey
    const xPhase = Math.random() * xTime * 6.0
    const yPhase = Math.random() * yTime * 6.0
    particles[i] = {
      color: "rgb(255,"+Math.round(Math.random()*255).toString()+",0.0)",
      size: Math.random() * 0.5 + 0.1,
      x: (xMax - xMin) * Math.sin(xPhase) + (xMin + xMax) / 2.0,
      y: (yMax - yMin) * Math.sin(yPhase) + (yMin + yMax) / 2.0,
      time: 10000.0,
      xAmp: xMax - xMin,
      yAmp: yMax - yMin,
      xPer: xTime,
      yPer: yTime,
      xPha: xPhase,
      yPha: yPhase,
      xInt: (xMin + xMax) / 2.0,
      yInt: (yMin + yMax) / 2.0
    }
  }
  return particles
}

function currPositionX({ particle, time }) {
  return particle.xAmp * Math.sin(particle.xPer * time + particle.xPha) + particle.xInt
}

function currPositionY({ particle, time }) {
  return particle.yAmp * Math.sin(particle.yPer * time + particle.yPha) + particle.yInt
}

const initalState = generateParticles({
  num: 100,
  width: 100.0,
  height: 20.0,
  timex: 0.0001,
  timey: 0.001,
  dw: 50.0,
  dh: 15.0,
  dtx: 0.0003,
  dty: 0.0003
})

const particles = (state = initalState, action) => {
  switch (action.type) {
    case 'MOVE_PARTICLES':
      return Object.assign([], state, state.map((particle, index) => {
        return Object.assign({}, particle, { 
          x: currPositionX({ particle, time: particle.time + action.time }),
          y: currPositionY({ particle, time: particle.time + action.time }),
          time: particle.time + action.time
        })
      }))
    default:
      return state
  }
}

export default particles
