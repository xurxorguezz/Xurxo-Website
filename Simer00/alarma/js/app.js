// variable para el alarma
let alarm = {
    active: false,
    time: ""
}

// los datos 
const namesDays = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"]
const namesMonths = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio",
    "agosto", "septiembre", "octubre", "noviembre", "diciembre"
]

// fecha de hoy
function getToday() {
    let date = new Date()
    let myDate = namesDays[date.getDay()] + " " + date.getDate() + " de " +
        namesMonths[date.getMonth()] + " de " + date.getFullYear()

    $("#date").html(myDate)
}

/*creamos una instancia del objeto Date() y
mediante los correspondientes metodos obtenemos: hour, minutes y seconds*
para actualizar la hora debemos hacer una funcion que sirva de temporizador*/
function updateTime() {
    let date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    if (hour === 0 && minutes === 0) getToday()

    if (hour < 10)
        hour = "0" + hour
    if (minutes < 10)
        minutes = "0" + minutes
    if (seconds < 10)
        seconds = "0" + seconds

    let time = hour + ":" + minutes
    $("#hour").html(time)
    $("#seconds").html(seconds)
    awake(time)

}

// función despertador
function awake(time) {
    if (alarm.active && alarm.time === time) {
        $(".content-clock").addClass("sound")
        $("#btnStop").css("display", "inline-block")
        satrtAlarm()
    }
}

// programar despertador
function programar() {
    alarm.active = true
    alarm.time = $("#inputTime").val()
    $("#show-alarma").text("Alarma: " + alarm.time)
    $("#btnAlarm").click()
}

// click btn stop
$("#btnStop").click(function() {
    $(this).css("display", "none")
    $(".content-clock").removeClass("sound")
    stopAlarm()
})

// audio
let sound = document.getElementById("audioTag")


// inicia alarma
function satrtAlarm() {
    sound.play()
    if (alarm.active && sound.paused) sound.play()
}


// detiene alarma
function stopAlarm() {
    sound.pause()
    $("#show-alarma").text("Sin alarma")
    alarm.active = false
}