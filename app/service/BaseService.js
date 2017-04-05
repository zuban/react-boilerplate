/* eslint-disable camelcase,no-undef */
import _ from 'lodash'
import RestApiClient from './RestApiClient'
import uuid from 'uuid'
import { browserHistory } from 'react-router'
import { getCookie, setCookie, deleteCookie } from './cookieHelper'

class BaseService {
  constructor () {
    this.requestHeaders = {
      'Content-Type': 'application/json'
    }
    this.token = null
    if (getCookie('access-token')) {
      this.token = getCookie('access-token')
    }
    this.entryUrl = window.location.origin + '/'
    this.apiClient = new RestApiClient({
      entryUrl: this.entryUrl,
      requestHeaders: this.requestHeaders,
      token: this.token
    })
    this.pendingRequests = {}
  }

  abortRequests (namespace = 'default') {
    Object.keys(this.pendingRequests).forEach((id) => {
      if (namespace === false || namespace === this.pendingRequests[id].namespace) {
        this.pendingRequests[id].request.abort()
        delete this.pendingRequests[id]
      }
    })
  }

  storeRequest (request, namespace = 'default') {
    let id = uuid.v4()
    this.pendingRequests[id] = {namespace, request}
    request
      .on('response', () => delete this.pendingRequests[id])
      .on('error', () => delete this.pendingRequests[id])
  }

  /**
   * Обрабатывает ошибки выполнения запроса
   * @param error
   * @param response
   * @returns {Promise}
   */
  processLoginResponse (error, response) {
    let _this = this
    let token_type = response.body.token_type
    let access_token = response.body.access_token
    return new Promise((resolve, reject) => {
      if (!error) {
        console.log(response)
// eslint-disable-next-line camelcase
        _this.token = token_type + ' ' + access_token
        setCookie('access-token', _this.token)
        _this.apiClient = new RestApiClient({
          entryUrl: _this.entryUrl,
          requestHeaders: _this.requestHeaders,
          token: _this.token
        })
        resolve(response.body)
      } else {
        reject({
          status: error && error.status,
          message: _.get(error, 'response.body.error_description') ||
          _.get(error, 'response.message') ||
          _.get(error, 'response.body.message') ||
          'Unexpected error'
        })
      }
    })
  }

  /**
   * Обрабатывает ошибки выполнения запроса
   * @param error
   * @param response
   * @returns {Promise}
   */
  processResponse (error, response) {
    return new Promise((resolve, reject) => {
      if (!error) {
        resolve(response.body)
      } else {
        if (error.status === 401 || error.status === 403) {
          this.logout()
          browserHistory.push('/jotform/login/')
        }
        reject({
          status: error && error.status,
          message: _.get(error, 'response.body.error_description') ||
          _.get(error, 'response.message') ||
          _.get(error, 'response.body.message') ||
          'Unexpected error'
        })
      }
    })
  }

  login (login, password) {
    setCookie('username', login)
    return new Promise((resolve, reject) => {
      this.apiClient
        .post(`oauth/uaa/oauth/token?grant_type=password&client_id=jodform&client_secret=jodform_password&username=${login}&password=${password}`)
        .end((error, response) => {
          this.processLoginResponse(error, response).then(resolve, reject)
        })
    })
  }

  singup (fields) {
    return new Promise((resolve, reject) => {
      this.apiClient
        .post('oauth/uaa/user', fields, {})
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject)
        })
    })
  }

  rememberPassword (login) {
    return new Promise((resolve, reject) => {
      this.apiClient
        .post('oauth/uaa/user/password/restore', {login}, {})
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject)
        })
    })
  }

  getForms () {
    return new Promise((resolve, reject) => {
      let request = this.apiClient
        .get('jotform/submissionform/')
      this.storeRequest(request)
      request
        .on('abort', reject)
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject)
        })
    })
  }

  getFormById (id) {
    return new Promise((resolve, reject) => {
      let request = this.apiClient
        .get(`jotform/submissionform/${id}`)
      this.storeRequest(request)
      request
        .on('abort', reject)
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject)
        })
    })
  }

  saveFormById (data) {
    return new Promise((resolve, reject) => {
      this.apiClient
        .put(`jotform/submissionform/${data.id}`, data)
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject)
        })
    })
  }

  createPdf (data) {
    let formData = new FormData()

    Object.keys(data).forEach(item => {
      formData.append(item, data[item])
    })
    return new Promise((resolve, reject) => {
      this.apiClient
        .postForm(`jotform/hook/`, formData)
        .end((error, response) => {
          resolve(response.text)
        })
    })
  }

  createNewRecord (formObj) {
    return new Promise((resolve, reject) => {
      this.apiClient
        .post('jotform/submissionform/ ', formObj)
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject)
        })
    })
  }

  getUserByEmail (email) {
    return new Promise((resolve, reject) => {
      this.apiClient
        .get('hw/services/user?email=' + email)
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject)
        })
    })
  }

  getUser () {
    return new Promise((resolve, reject) => {
      this.apiClient
        .get('hw/services/user?email=' + getCookie('username'))
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject)
        })
    })
  }

  checkToken () {
    return getCookie('access-token')
  }

  getCurrentUser () {
    return getCookie('username')
  }

  logout () {
    deleteCookie('access-token')
    deleteCookie('username')
  }
}

export default BaseService
