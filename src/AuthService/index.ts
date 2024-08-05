import { setCookie, getCookie } from '@/CookieService/index'

export default class AuthService {
  constructor() {}

  static async initialize() {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)

    const sessionToken = getCookie('session_token')

    const clientToken = urlParams.get('client_token')

    if (!clientToken || !sessionToken) return (window.location.href = 'https://github.com')

    const domain = window.location.origin

    const body = new URLSearchParams({
      grant_type: 'storefront',
      client_secret: clientToken,
      scope: 'storefront',
      client_id: domain
    }).toString()

    const headers = new Headers()
    headers.append('content-type', 'application/x-www-form-urlencoded')

    const options = {
      method: 'POST',
      body: body,
      headers: headers
    }

    const response = await fetch('https://api.mytiki.com/auth', options)

    if (!response.ok) return (window.location.href = 'https://github.com')

    setCookie('session_token', 'cookie value', 1)
  }
}
