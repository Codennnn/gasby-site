import React from 'react'

import { ThemeContext } from './ThemeContext'

import SunIcon from '@/assets/sun.svg'
import MoonIcon from '@/assets/moon.svg'
import './Toggle.scss'

export default function DarkModeToggle() {
  const { colorMode, setColorMode } = React.useContext(ThemeContext)

  if (!colorMode) {
    return null
  }

  return (
    <label>
      <input
        className="toggle-checkbox"
        type="checkbox"
        checked={colorMode === 'dark'}
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
