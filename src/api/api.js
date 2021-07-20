import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '319b1897-eca7-4c53-ba56-6b7781c673d6'
  }
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`, { withCredentials: true })
      .then(response => response.data)
  }
}


export const getUsers2 = (currentPage, pageSize) => {
  return instance.get(`follow?page=${currentPage}&count=${pageSize}`, { withCredentials: true })
    .then(response => response.data)
}