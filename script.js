let aniversario = new Date('November 5 2021 20:00:00')
let dias, horas, minutos, segundos
setInterval(() => {
  let dataAtual = new Date()
  let totalDeSegundos = (aniversario - dataAtual) / 1000

  dias = parseInt(totalDeSegundos / 86400)
  totalDeSegundos = totalDeSegundos % 86400

  horas = parseInt(totalDeSegundos / 3600)
  totalDeSegundos = totalDeSegundos % 3600

  minutos = parseInt(totalDeSegundos / 60)
  segundos = parseInt(totalDeSegundos % 60)

  document.getElementById('dias').innerHTML = dias
  document.getElementById('horas').innerHTML = horas
  document.getElementById('minutos').innerHTML = minutos
  document.getElementById('segundos').innerHTML = segundos
}, 1000)
