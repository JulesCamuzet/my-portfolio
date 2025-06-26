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
    firstName: data.firstName === '' ? 'Ce champs est obligatoire.' : '',
    lastName: data.lastName === '' ? 'Ce champs est obligatoire.' : '',
    email: !checkEmailFormat(data.email)
      ? "Le format de l'email est icorrect."
      : '',
    subject: data.subject === '' ? 'Ce champs est obligatoire.' : '',
    message: data.message === '' ? 'Ce champs est obligatoire.' : '',
  }
}
