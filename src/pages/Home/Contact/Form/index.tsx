import React, { useContext, useEffect, useState } from 'react'

import { themeContext } from '../../../../contexts/theme'
import TextInput from '../../../../components/TextInput'
import Textarea from '../../../../components/Textarea'
import CallToAction from '../../../../components/CallToAction'
import { sendContactEmailApi } from '../../../../services/api/sendContactEmail'
import { ContactFormData } from './types'
import { getErrors } from './helpers/getErrors'
import {
  StyledErrorMessage,
  StyledRow,
  StyledSuccessMessage,
  StyledWrapper,
} from './styles'

const Form = () => {
  const [data, setData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [sucess, setSuccess] = useState('')
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

  const { theme } = useContext(themeContext)

  useEffect(() => {
    if (isLoading) {
      sendMail()
    }
  }, [isLoading])

  const sendMail = async () => {
    if (!hasErrors) {
      const result = await sendContactEmailApi(data)

      if (result === null) {
        setError('Une erreur est survenue, veuillez réessayer plus tard.')
        setSuccess('')
        setHasBeenSubmitted(true)
      } else {
        setError('')
        setHasBeenSubmitted(false)
        setSuccess('Votre message a été envoyé avec succès !')
        setData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
        })
      }
    } else {
      setHasBeenSubmitted(true)
    }

    setIsLoading(false)
  }

  const handleFirstNameChange = (newVal: string) => {
    setData((prev) => ({ ...prev, firstName: newVal }))
  }

  const handleLastNameChange = (newVal: string) => {
    setData((prev) => ({ ...prev, lastName: newVal }))
  }

  const handleEmailChange = (newVal: string) => {
    setData((prev) => ({ ...prev, email: newVal }))
  }

  const handleSubjectChange = (newVal: string) => {
    setData((prev) => ({ ...prev, subject: newVal }))
  }

  const handleMessageChange = (newVal: string) => {
    setData((prev) => ({ ...prev, message: newVal }))
  }

  const handleClickSend = () => {
    setIsLoading(true)
  }

  const errors = getErrors(data)
  const hasErrors = !!Object.values(errors).find((val) => val)

  return (
    <StyledWrapper $theme={theme} onSubmit={(e) => e.preventDefault()}>
      <StyledRow>
        <TextInput
          id="first-name"
          name="first-name"
          label="First name"
          error={hasBeenSubmitted ? errors.firstName : ''}
          handleChange={handleFirstNameChange}
          placeholder="Antoine"
          value={data.firstName}
          theme={theme}
        />
        <TextInput
          id="last-name"
          name="last-name"
          label="Last name"
          error={hasBeenSubmitted ? errors.lastName : ''}
          handleChange={handleLastNameChange}
          placeholder="Dupont"
          value={data.lastName}
          theme={theme}
        />
      </StyledRow>
      <TextInput
        id="email"
        name="email"
        label="Email"
        error={hasBeenSubmitted ? errors.email : ''}
        handleChange={handleEmailChange}
        placeholder="antoine.dupont@tlse.com"
        value={data.email}
        theme={theme}
      />
      <TextInput
        id="subject"
        name="subject"
        label="Subject"
        error={hasBeenSubmitted ? errors.subject : ''}
        handleChange={handleSubjectChange}
        placeholder="Our collaboration"
        value={data.subject}
        theme={theme}
      />
      <Textarea
        id="message"
        name="message"
        label="Message"
        error={hasBeenSubmitted ? errors.message : ''}
        handleChange={handleMessageChange}
        placeholder="Hello..."
        value={data.message}
        theme={theme}
      />
      <CallToAction
        disabled={hasBeenSubmitted && hasErrors}
        onClick={handleClickSend}
      >
        Send message
      </CallToAction>
      {error && <StyledErrorMessage $theme={theme}>{error}</StyledErrorMessage>}
      {sucess && (
        <StyledSuccessMessage $theme={theme}>{sucess}</StyledSuccessMessage>
      )}
    </StyledWrapper>
  )
}

export default Form
