export default function getAuthTokenFromCookie() {
  const cookieString = document.cookie
  const cookieArray = cookieString.split('; ')

  for (const cookie of cookieArray) {
    const [name, value] = cookie.split('=')
    if (name === 'auth') {
      return value
    }
  }

  return null
}
