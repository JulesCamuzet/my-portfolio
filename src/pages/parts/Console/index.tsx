import React, {
  ChangeEvent,
  FocusEventHandler,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

import { themeContext } from '../../../contexts/theme'
import { getOutputFromInput } from '../../../services/console/output'
import { headline, initialOutput } from './constants'
import OpenButton from './OpenButton'
import {
  StyledConsole,
  StyledContent,
  StyledHiddenInput,
  StyledInputDisplay,
  StyledOutput,
  StyledWrapper,
} from './styles'
import useMediaQuery from '../../../hooks/useMediaQuery'

const Console = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [output, setOutput] = useState(initialOutput)
  const [isFocus, setIsFocus] = useState(false)
  const [cursorIndex, setCursorIndex] = useState(0)

  const isMobile = useMediaQuery('(max-width: 768px)')

  const { theme } = useContext(themeContext)

  const contentRef = useRef<null | HTMLLabelElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        setInput((prevInput) => {
          if (prevInput.trim() === 'clear') {
            setOutput(initialOutput)
          } else if (prevInput.trim() === 'exit') {
            setIsOpen(false)
          } else {
            setOutput((prev) => prev + getOutputFromInput(prevInput) + '<br>')
          }

          return ''
        })
        setCursorIndex(0)
      } else if (e.key === 'ArrowLeft') {
        setInput((prevInput) => {
          setCursorIndex((prev) =>
            prev === -prevInput.length ? prev : prev - 1
          )

          return prevInput
        })
      } else if (e.key === 'ArrowRight') {
        setCursorIndex((prev) => (prev === 0 ? prev : prev + 1))
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    contentRef.current?.scrollTo({
      top: contentRef.current.scrollHeight,
    })
  }, [input, output, contentRef])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value)
  }

  const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    setIsFocus(true)
  }

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    setIsFocus(false)
  }

  if (isMobile) {
    return null
  }

  return (
    <StyledWrapper>
      <OpenButton
        isOpen={isOpen}
        handleClick={() => setIsOpen((prev) => !prev)}
        theme={theme}
      />
      <StyledConsole $isOpen={isOpen}>
        <StyledContent ref={contentRef} htmlFor="hidden-input" $theme={theme}>
          <StyledOutput
            dangerouslySetInnerHTML={{
              __html: output,
            }}
          ></StyledOutput>
          <StyledInputDisplay
            $theme={theme}
            dangerouslySetInnerHTML={{
              __html: `${headline}
          ${input.replaceAll(' ', '&thinsp;')}`,
            }}
            $isCursorVisible={isFocus}
            $cursorIndex={cursorIndex}
          ></StyledInputDisplay>
        </StyledContent>
        <StyledHiddenInput
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={handleInputChange}
          value={input}
          id="hidden-input"
        />
      </StyledConsole>
    </StyledWrapper>
  )
}

export default Console
