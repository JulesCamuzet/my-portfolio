import { ContactFormData } from '../types'
import { checkEmailFormat } from './checkEmail'

type Output = {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

export const getErrors = (data: ContactFormData): Output => {
  return {
    firstName: data.firstName === '' ? 'This field is required.' : '',
    lastName: data.lastName === '' ? 'This field is required.' : '',
    email: !checkEmailFormat(data.email)
      ? "Wrong email format."
      : '',
    subject: data.subject === '' ? 'This field is required.' : '',
    message: data.message === '' ? 'This field is required.' : '',
  }
}
