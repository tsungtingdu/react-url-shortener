import decode from 'jwt-decode'

const JWT = 'user_token'

const setToken = (token) => {
  localStorage.setItem(JWT, token)
}

const getToken = () => {
  return localStorage.getItem(JWT)
}

const getData = () => {
  const jwtoken = getToken() ? getToken() : null
  if (jwtoken) {
    const data = decode(jwtoken)
    return data
  }
  return null
}

const removeToken = () => {
  localStorage.removeItem(JWT);
}

global.auth = {
  setToken,
  getToken,
  getData,
  removeToken
};