import React, { useContext, useState } from 'react'

import { themeContext } from '../../../../contexts/theme'
import TextInput from '../../../../components/TextInput'
import { StyledRow, StyledWrapper } from './styles'
import { ContactFormData } from './types'
import Textarea from '../../../../components/Textarea'
import CallToAction from '../../../../components/CallToAction'

const Form = () => {
  const [data, setData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  })

  const { theme } = useContext(themeContext)

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

  return (
    <StyledWrapper $theme={theme}>
      <StyledRow>
        <TextInput
          id="first-name"
          name="first-name"
          label="First name"
          error=""
          handleChange={handleFirstNameChange}
          placeholder="Antoine"
          value={data.firstName}
          theme={theme}
        />
        <TextInput
          id="last-name"
          name="last-name"
          label="Last name"
          error=""
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
        error=""
        handleChange={handleEmailChange}
        placeholder="antoine.dupont@tlse.com"
        value={data.email}
        theme={theme}
      />
      <TextInput
        id="subject"
        name="subject"
        label="Subject"
        error=""
        handleChange={handleSubjectChange}
        placeholder="Our collaboration"
        value={data.subject}
        theme={theme}
      />
      <Textarea
        id="message"
        name="message"
        label="Message"
        error=""
        handleChange={handleMessageChange}
        placeholder="Hello..."
        value={data.message}
        theme={theme}
      />
      <CallToAction onClick={() => {}}>Envoyer</CallToAction>
    </StyledWrapper>
  )
}

export default Form
