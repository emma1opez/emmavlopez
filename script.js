document.addEventListener("DOMContentLoaded", function () {
    new Typed(".auto-type", {
        strings: [
            "¡Hola Mundo! Soy Emma.",
            "Hello World! I'm Emma."
        ],
        typeSpeed: 100, 
        backSpeed: 50,
        backDelay: 1000,
        smartBackspace: true,
        loop: true
    });
});

const locations = document.querySelectorAll(".time-zone")

const updateTimes = function () {
    locations.forEach(location => {
        const output = location.querySelector("output")
        const timezone = location.getAttribute("data-timezone")
        const now = luxon.DateTime.now().setZone(timezone)
        output.innerHTML = now.toFormat("HH:mm:ss")
    })
}

updateTimes()

setInterval(function () {
    updateTimes()
}, 1000)