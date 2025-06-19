import React, { RefObject, useEffect, useState } from 'react'

import { checkIsVisible } from './helpers/checkIsVisible'

type PropsType = {
  elementRef: RefObject<HTMLDivElement | null>
}

const useVisible = ({ elementRef }: PropsType) => {
  const [isVisible, setIsVisible] = useState(
    elementRef.current
      ? checkIsVisible(elementRef.current.getBoundingClientRect().top)
      : false
  )

  useEffect(() => {
    if (elementRef.current) {
      const boundingRect = elementRef.current?.getBoundingClientRect()
      
      const onScroll = (e: Event) => {
        if (boundingRect && checkIsVisible(boundingRect.top)) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }

      window.addEventListener('scroll', onScroll)

      return () => {
        window.removeEventListener('scroll', onScroll)
      }
    }
  }, [elementRef])

  return { isVisible }
}

export default useVisible
