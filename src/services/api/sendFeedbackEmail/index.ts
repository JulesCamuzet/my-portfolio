type InputProps = {
  message: string
}

export const sendFeedbackEmailApi = async ({ message }: InputProps) => {
  try {
    const response = await fetch(`${process.env.API_URL}/feedback`, {
      method: 'POST',
      body: JSON.stringify({
        message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      return null
    }

    return true
  } catch (error) {
    return null
  }
}
