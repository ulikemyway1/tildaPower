export default function deleteAuthCookie() {
  document.cookie = `auth=''; expires='Thu, 03 June 2024 10:00:00 GMT'; path=/`
}
