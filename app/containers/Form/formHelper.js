/**
 * Created by sergeyzubov on 14/04/2017.
 */
export const getFormObject = (t) => {
  let obj = {}
  Object.keys(t).forEach(key => {
    if (key.startsWith('area')) {
      let tempKey = key.split(';')
      if (obj[tempKey[0]]) {
        obj[tempKey[0]] += ', ' + tempKey[1]
      } else {
        obj[tempKey[0]] = tempKey[1]
      }
    } else if (key.startsWith('motionintheclip')) {
      let tempKey = key.split(';')
      if (obj[tempKey[0]]) {
        obj[tempKey[0]] += ', ' + tempKey[1]
      } else {
        obj[tempKey[0]] = tempKey[1]
      }
    } else if (key.startsWith('cameradirection')) {
      let tempKey = key.split(';')
      if (obj[tempKey[0]]) {
        obj[tempKey[0]] += ', ' + tempKey[1]
      } else {
        obj[tempKey[0]] = tempKey[1]
      }
    } else if (key.startsWith('weather')) {
      let tempKey = key.split(';')
      if (obj[tempKey[0]]) {
        obj[tempKey[0]] += ', ' + tempKey[1]
      } else {
        obj[tempKey[0]] = tempKey[1]
      }
    } else if (key.startsWith('additionalfiles')) {
      let tempKey = key.split(';')
      if (obj[tempKey[0]]) {
        obj[tempKey[0]] += ', ' + tempKey[1]
      } else {
        obj[tempKey[0]] = tempKey[1]
      }
    } else {
      obj[key] = t[key]
    }
  })
  return obj
}

export const validateFields = (obj) => {
  if (
    obj.firstName &&
    obj.lastName &&
    obj.email &&
    obj.yourgiven11 &&
    obj.renderoremotion &&
    obj.recordingframerate &&
    obj.focallength &&
    obj.chipsize &&
    obj.recordingcodec &&
    obj.masteredto &&
    obj.resolution &&
    obj.audio &&
    obj.motionintheclip &&
    obj.cameradirection &&
    obj.timeofday &&
    obj.weather &&
    obj.contry &&
    obj.cityregion &&
    obj.area &&
    obj.specificinfo &&
    obj.generaldiscription
  ) {
    return false
  } else {
    return true
  }
}
