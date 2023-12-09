// convert kebab case to 'normal' case
export const convertString = (str: string) => {
  let temp = str.split('-')
  let newStringArray = temp.map((s) => s[0].toUpperCase() + s.substring(1).toLowerCase()).join(' ')
  return newStringArray
}

// convert date to locale date string
export const parseDate = (str: string) => {
  const date = new Date(str)

  return date.toLocaleDateString();
}