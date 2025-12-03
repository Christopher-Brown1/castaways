export const generateRoomCode = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const digits = "0123456789"

  let code = ""

  // Generate 3 random letters
  for (let i = 0; i < 3; i++) {
    code += letters.charAt(Math.floor(Math.random() * letters.length))
  }

  // Generate 3 random digits
  for (let i = 0; i < 3; i++) {
    code += digits.charAt(Math.floor(Math.random() * digits.length))
  }

  return code
}

export const randomiseArray = (arr) => {
  const buffer = []

  for (let i = arr.length; i >= arr.length && i > 0; i--) {
    const start = Math.floor(Math.random() * arr.length)
    buffer.push(arr.splice(start, 1)[0])
  }
  
  return buffer
}
