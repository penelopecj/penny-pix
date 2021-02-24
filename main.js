let body = document.querySelector("body")
let citySelect = document.querySelector("#city-type")
let cityArr = document.querySelectorAll("option")

citySelect.addEventListener("change", function (event) {
    event.preventDefault()
    body.classList = []
    for (let i = 0; i < cityArr.length; i++) {
        if (citySelect.selectedIndex === i) {
            let background = cityArr[i].id
            body.classList.add(background)
        }
    }
})