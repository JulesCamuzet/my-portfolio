import React, { CSSProperties } from 'react'

type PropsType = {
  topColor: string
  bottomColor: string
  style?: CSSProperties
}

const Wave = ({ topColor, bottomColor, style }: PropsType) => {
  return (
    <svg
      id="visual"
      viewBox="0 0 900 100"
      width="100%"
      height="100"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      style={{ position: 'relative', ...style }}
      preserveAspectRatio="none"
    >
      <rect x="0" y="0" width="900" height="100" fill={topColor} />
      <path
        d="M0 53L12.5 50.5C25 48 50 43 75 40.2C100 37.3 125 36.7 150 42.7C175 48.7 200 61.3 225 62.7C250 64 275 54 300 45.5C325 37 350 30 375 24.5C400 19 425 15 450 15.3C475 15.7 500 20.3 525 33.7C550 47 575 69 600 72.3C625 75.7 650 60.3 675 48.3C700 36.3 725 27.7 750 31C775 34.3 800 49.7 825 62C850 74.3 875 83.7 887.5 88.3L900 93L900 101L887.5 101C875 101 850 101 825 101C800 101 775 101 750 101C725 101 700 101 675 101C650 101 625 101 600 101C575 101 550 101 525 101C500 101 475 101 450 101C425 101 400 101 375 101C350 101 325 101 300 101C275 101 250 101 225 101C200 101 175 101 150 101C125 101 100 101 75 101C50 101 25 101 12.5 101L0 101Z"
        fill={bottomColor}
        strokeLinecap="round"
        strokeLinejoin="miter"
        style={{
          transition: 'fill 0.4s ease'
        }}
      />
    </svg>
  )
}

export default Wave
