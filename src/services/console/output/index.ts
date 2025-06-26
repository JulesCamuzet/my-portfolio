import { outputBio } from './bio'
import { outputCurlResume } from './curlResume'
import { outputEmpty } from './empty'
import { outputFeedback } from './feedback'
import { outputHelp } from './help'
import { outputListProjects } from './listProjects'
import { outputListSkills } from './listSkills'
import { outputUnknown } from './unknown'

export const getOutputFromInput = (input: string) => {
  if (input.trim() === 'help') {
    return outputHelp(input)
  }

  if (input.trim() === 'list-projects') {
    return outputListProjects(input)
  }

  if (input.trim() === 'list-skills') {
    return outputListSkills(input)
  }

  if (input.trim() === 'bio') {
    return outputBio(input)
  }

  if (input.trim() === 'curl-resume') {
    return outputCurlResume(input)
  }

  if (input.trim().startsWith('feedback -m ')) {
    return outputFeedback(input)
  }

  if (input.trim() === '') {
    return outputEmpty()
  }

  return outputUnknown(input)
}
