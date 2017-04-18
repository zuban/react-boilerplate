/**
 * Created by sergeyzubov on 14/04/2017.
 */

const validate = values => {
  const errors = {}
  if (!values.get('firstName')) {
    errors.firstName = 'Required field'
  }
  if (!values.get('lastName')) {
    errors.lastName = 'Required field'
  }
  if (!values.get('email')) {
    errors.email = 'Required field'
  }
  if (!values.get('yourgiven11')) {
    errors.yourgiven11 = 'Required field'
  }
  if (!values.get('renderoremotion')) {
    errors.renderoremotion = 'Required'
  }

  if (Object.keys(errors) > 0) {
    //You can concatenate each error in a string
    for (key in errors) errors._error += key + ': ' + errors[key]
    //or juste put the errors object in the global error property
    errors._error = {...errors}
  }
  return errors
}

export default validate
