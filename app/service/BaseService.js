/* eslint-disable camelcase,no-undef */
import _ from 'lodash'
import RestApiClient from './RestApiClient'
import uuid from 'uuid'
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
    this.entryUrl = window.location.origin
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
    debugger
    setCookie('username', login)
    return new Promise((resolve, reject) => {
      this.apiClient
        .post(`hw/oauth/token?grant_type=password&client_id=acme&client_secret=acmesecret&username${login}&password=${password}`)
        .end((error, response) => {
          this.processLoginResponse(error, response).then(resolve, reject)
        })
    })
  }

  singup (username, email, password) {
    return new Promise((resolve, reject) => {
      this.apiClient
        .post('hw/services/user', {
          email,
          password,
          username
        }, {})
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject)
        })
    })
  }

  getSVG () {
    return new Promise((resolve, reject) => {
      let request = this.apiClient
        .get('hw/services/files/svg')
      this.storeRequest(request)
      request
        .on('abort', reject)
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject)
        })
    })

  }

  getSVGByTagValue (tags, predicate) {
    if (tags === '' && predicate === '') {
      return new Promise((resolve, reject) => {
        let request = this.apiClient
          .get('hw/services/files/svg')
        this.storeRequest(request)
        request
          .on('abort', reject)
          .end((error, response) => {
            this.processResponse(error, response).then(resolve, reject)
          })
      })
    } else if (tags === '' && predicate !== '') {
      return new Promise((resolve, reject) => {
        let request = this.apiClient
          .get('hw/services/files/svg?text=' + predicate)
        this.storeRequest(request)
        request
          .on('abort', reject)
          .end((error, response) => {
            this.processResponse(error, response).then(resolve, reject)
          })
      })
    } else {
      return new Promise((resolve, reject) => {
        let request = this.apiClient
          .get('hw/services/files/svg?hashTagValues=' + tags + '&text=' + predicate)
        this.storeRequest(request)
        request
          .on('abort', reject)
          .end((error, response) => {
            this.processResponse(error, response).then(resolve, reject)
          })
      })
    }
  }

  getTags (tags) {
    if (tags === '') {
      return new Promise((resolve, reject) => {
        this.apiClient
          .get('hw/services/hashTag')
          .end((error, response) => {
            this.processResponse(error, response).then(resolve, reject)
          })
      })
    } else {
      return new Promise((resolve, reject) => {
        this.apiClient
          .get('hw/services/hashTag?relatedTagValues=' + tags)
          .end((error, response) => {
            this.processResponse(error, response).then(resolve, reject)
          })
      })
    }
  }

  getSVGbyId (id) {
    return new Promise((resolve, reject) => {
      this.apiClient
        .get('hw/services/files/svg/' + id)
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject)
        })
    })
  }

  saveTag (obj, id) {
    return new Promise((resolve, reject) => {
      this.apiClient
        .put('hw/services/hashTag/' + id, obj)
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

  createTag (obj) {
    return new Promise((resolve, reject) => {
      this.apiClient
        .post('hw/services/hashTag', obj)
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject)
        })
    })
  }

  uploadSVG (file) {
    return new Promise((resolve, reject) => {
      this.apiClient
        .post('hw/services/files/svg', file)
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject)
        })
    })
  }

  checkToken () {
    return !!getCookie('access-token')
  }

  logout () {
    deleteCookie('access-token')
    deleteCookie('username')
  }
}

export default BaseService
