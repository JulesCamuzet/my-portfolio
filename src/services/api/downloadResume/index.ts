export const downloadResumeApi = async () => {
  try {
    const response = await fetch(`${process.env.API_URL}/resume`, {
      method: 'GET'
    })

    if (!response.ok) {
      return null
    }

    return await response.blob()
  } catch (error) {
    return null
  }
}
