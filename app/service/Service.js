/**
 * Created by sergeyzubov on 26/02/2017.
 */
import BaseService from './BaseService'

const service = new BaseService()

//singleton
export const getService = () => {
  return service
}
