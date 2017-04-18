/**
 * Created by sergeyzubov on 17/04/2017.
 */
export const download = (url, obj) => {
  let form = document.createElement('form')
  form.method = 'POST'
  form.setAttribute('style', 'display: none')
  form.action = url;
  Object.keys(obj).forEach(key => {
    let element = document.createElement('input')
    element.value = obj[key]
    element.name = key
    form.appendChild(element)
  })
  document.body.appendChild(form)
  form.submit()


}
