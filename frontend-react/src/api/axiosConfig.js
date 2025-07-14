// src/api/axiosConfig.js
import axios from "axios"
import { API_BASE_URL } from "./../config/apiBase"

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})

//Request Interceptor 
  axiosInstance.interceptors.request.use(
    function(config){
      // console.log('request without auth header', config)
      const accessToken = localStorage.getItem('accessToken')
      if(accessToken){
        config.headers['Authorization'] = `Bearer ${accessToken}`
      }
      console.log(config)
      return config
    },function(err){
      return Promise.reject(err)
    }
  )

  //Response Interceptor
  axiosInstance.interceptors.response.use(
    function(response){
      return response;
    },
    //Handle failed responses
    async function(err){
      const originalRequest = err.config;
      if(err.response.status === 401 && !originalRequest.retry){
        originalRequest.retry = true;
        const refreshToken = localStorage.getItem('refreshToken')
        try{
          const response =await axiosInstance.post('/token/refresh/',{refresh: refreshToken})
          console.log('response ===>', response.data)
          localStorage.setItem('accessToken',response.data.access)
          originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`
          return axiosInstance(originalRequest)
          

        }catch(err){
          localStorage.removeItem('accessToken')
          localStorage.removeItem('refreshToken')
          window.location.href = '/signin'
        }

      }
      return Promise.reject(err)
    }
  )


export default axiosInstance
