export function formatDate (dateTime) {
  // Create a Date object from the date string
  const date = new Date(dateTime)

  // Get the date components
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  // Get the time components
  const hour = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')

  // Format the date and time separately
  const formattedDate = `${year}-${month}-${day}`
  const formattedTime = `${hour}:${minutes}:${seconds}`

  // Return an object with the date and time properties
  return {
    date: formattedDate,
    time: formattedTime
  }
}
