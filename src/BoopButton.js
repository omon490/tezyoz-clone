import React from 'react'

import useSound from 'use-sound'

import boopSfx from './assets/sounds/boop.mp3'

const BoopButton = () => {
  const [play] = useSound(boopSfx)

  return <button className="btn btn-danger" onClick={play}>Sound</button>
}

export default BoopButton