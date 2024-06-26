export default function generateID() {
  const timeStamp = new Date().getTime()
  return `${timeStamp.toString(8)}-${timeStamp.toString(12)}-${timeStamp.toString(16)}`
}
