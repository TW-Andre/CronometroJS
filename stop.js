let start = document.querySelector('#start')
let pause = document.querySelector('#pause')
let reset = document.querySelector('#reset')

start.addEventListener('click', startCont)
pause.addEventListener('click', pauseCont)
reset.addEventListener('click', resetCont)

let cron
let time = 10
let cont = 1
let mm = 0
let ss = 0
let ms = 0
let times = 0

function startCont() {
    if(times >= 1) {

    } else {
        cron = setInterval(() => {timer() }, time)
        times++
    }
}

function pauseCont() {
    clearInterval(cron)
    times = 0
}

function resetCont() {
    save()
    clearInterval(cron)
    mm = 0
    ss = 0
    ms = 0
    times = 0
}

var format // declarada aqui para reutilizar na outra função

function timer() {

    ms++

    if(ms == 100) {
        ms = 0
        ss++
        if(ss == 60) {
            ss = 0
            mm++
        }
    }

    format = ((mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss) + ':' + (ms < 10 ? '0' + ms : ms))
    document.querySelector('.stopwatch').innerHTML = `${format}`
}

function save() {
    document.querySelector('.show').innerHTML += `<p>${cont}ª marca: ${format}</p>`
    cont++
    document.querySelector('.stopwatch').innerHTML = '00:00:00'
    format = '00:00:00'
}
