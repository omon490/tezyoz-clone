import React from 'react'

import useSound from 'use-sound'

import tada from './assets/sounds/victory.mp3'

const BeepButton = () => {
  const [play] = useSound(tada)

  return <button className="btn btn-success" onClick={play}>Baraban</button>
}

export default BeepButton