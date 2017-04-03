post /jotform/submissionform/ Создание формы
payload: {
  "formData":{"3":"3"},
  "name": "From name"
}

get /jotform/submissionform/ Запрос всех форм

delete /jotform/submissionform/:id Удаление формы

put /jotform/submissionform/:id Обновление формы
payload: {
  "formData":{"3":"3"},
  "name": "From name"
}
