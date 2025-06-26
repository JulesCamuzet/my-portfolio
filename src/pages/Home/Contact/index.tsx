import React from 'react'

import Title from '../../../components/Title'
import BaseSection from '../../parts/BaseSection'
import Form from './Form'
import Map from './Map'
import { StyledContent } from './styles'

const Contact = () => {
  const enableMap = process.env.ENABLE_MAP === '1'

  return (
    <BaseSection tall>
      <Title type="h2">Get in touch</Title>
      <StyledContent>
        <Form />
        {enableMap && <Map />}
      </StyledContent>
    </BaseSection>
  )
}

export default Contact
