'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Icon } from '@tremor/react'
import { SunIcon, MoonIcon } from '@heroicons/react/solid'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <div>
      {
        theme === 'dark'
          ? (
            <button
              aria-label='Toggle Dark Mode'
              type='button'
              onClick={() => setTheme('light')}
              className='w-10 h-10 flex justify-center items-center'
            >
              <Icon icon={SunIcon} />
            </button>
            )
          : (
            <button
              aria-label='Toggle Light Mode'
              type='button'
              onClick={() => setTheme('dark')}
              className='w-10 h-10 flex justify-center items-center'
            >
              <Icon icon={MoonIcon} />
            </button>
            )
      }
    </div>
  )
}

export default ThemeSwitcher
