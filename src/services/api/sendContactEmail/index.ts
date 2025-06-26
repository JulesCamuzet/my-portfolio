type InputProps = {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

export const sendContactEmailApi = async ({
  firstName,
  lastName,
  email,
  subject,
  message,
}: InputProps) => {
  try {
    const response = await fetch(`${process.env.API_URL}/contact`, {
      method: 'POST',
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        subject,
        message,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  
    if (!response.ok) {
      return null
    }
  
    return true
  } catch (error) {
    return null
  }
}
