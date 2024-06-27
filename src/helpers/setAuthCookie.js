export default function setAuthCookie(token) {
  const minutes = 15
  const expirationTime = new Date(Date.now() + minutes * 60 * 1000)
  document.cookie = `auth=${token}; expires=${expirationTime.toUTCString()}; path=/`
}
