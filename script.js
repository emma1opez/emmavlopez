document.addEventListener("DOMContentLoaded", function () {
    new Typed(".auto-type", {
        strings: ["¡Hola Mundo! I'm Emma. "],
        typeSpeed: 100,
        backSpeed: 50,
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