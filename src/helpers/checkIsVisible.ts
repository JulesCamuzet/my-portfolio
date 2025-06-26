export const checkIsVisible = (top: number) => {
  const scroll = window.scrollY

  if (scroll + window.innerHeight > top - 200) {
    return true
  } else {
    return false
  }
}
