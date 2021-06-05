import './DarkModeToggle.scss'

import React from 'react'

import MoonIcon from '@/assets/moon.svg'
import SunIcon from '@/assets/sun.svg'

import { ThemeContext } from '../ThemeContext'

export default function DarkModeToggle() {
  const { colorMode, setColorMode } = React.useContext(ThemeContext)

  if (!colorMode) {
    return null
  }

  return (
    <label className={`toggler toggler-${colorMode}`}>
      <input
        checked={colorMode === 'dark'}
        className="toggle-checkbox"
        type="checkbox"
        onChange={ev => {
          setColorMode(ev.target.checked ? 'dark' : 'light')
        }}
      ></input>
      <div className="toggle-slot">
        <div className="sun-icon-wrapper">
          <SunIcon className="sun-icon" />
        </div>
        <div className="toggle-button"></div>
        <div className="moon-icon-wrapper">
          <MoonIcon className="moon-icon" />
        </div>
      </div>
    </label>
  )
}
