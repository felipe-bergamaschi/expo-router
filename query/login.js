import { api } from "../api/axios";
import axios from 'axios';

export async function useLogin({ username, password }) {
  let myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

  let urlencoded = new URLSearchParams()
  urlencoded.append('grantType', 'password')
  urlencoded.append('clientId', 'reccopraiatrn')
  urlencoded.append('clientSecret', 'j9ybSu7bRqOQ')
  urlencoded.append('branch', 1)
  urlencoded.append('terminal', 1)

  urlencoded.append('username', username)
  urlencoded.append('password', password)

  return await api.post('/access/v1/genere', urlencoded, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

export async function useLoginExemple() {
  return await axios.get('https://jsonplaceholder.typicode.com/users')
}