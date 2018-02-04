const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const getDate = () => {
  const today = new Date()
  return {
    year: today.getFullYear(),
    month: months[today.getMonth()],
    date: today.getDate()
  }
}

const getTasks = () => JSON.parse(localStorage.getItem('tasks')) || []

export {
  getDate,
  getTasks
}
