import { useState, useEffect } from 'react'

// eslint-disable-next-line react/prop-types
const Progress = ({ done }) => {
  const [style, setStyle] = useState({})

  useEffect(() => {
    const timer = setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`,
      }
      setStyle(newStyle)
    }, 50)

    return () => clearTimeout(timer)
  }, [done])

  return (
    <div className='progress bg-gray-300'>
      <div
        className='h-6 animate-pulse bg-gray-800 transition-all duration-500 ease-out'
        style={style}>
        <div className='h-full transform bg-gradient-to-r from-purple-400 to-pink-500 text-white dark:text-white dark:from-purple-500 dark:to-pink-400'>
          {done}%
        </div>
      </div>
    </div>
  )
}

export default Progress
