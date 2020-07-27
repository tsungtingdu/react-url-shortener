import decode from 'jwt-decode'

const JWT = 'user_token'

const setToken = (token) => {
  localStorage.setItem(JWT, token)
}

const getToken = () => {
  return localStorage.getItem(JWT)
}

const getData = () => {
  const jwtoken = getToken()
  const data = decode(jwtoken)
  return data
}

global.auth = {
  setToken,
  getToken,
  getData
};