document.addEventListener("scroll", function () {
    let header = document.getElementById("headerNormal")
    let scrollPosition = window.scrollY
    let button = document.querySelector('header button')

    if (scrollPosition > 200) {
        header.classList.add("headerScrolled")
        button.classList.add("buttonScrolled")
    } else {
        header.classList.remove("headerScrolled")
        button.classList.remove("buttonScrolled")
    }
    })

    document.addEventListener("DOMContentLoaded", function () {
                const starContainer = document.getElementById("starContainer")
                const stars = starContainer.querySelectorAll("img")

                function getRandomInt(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min
                }

                function toggleRandomStars() {
                    stars.forEach((star) => {
                        star.style.visibility = "hidden"
                    })

                    const numStarsToShow = getRandomInt(1, stars.length)

                    const indexesToShow = []
                    while (indexesToShow.length < numStarsToShow) {
                        const randomIndex = getRandomInt(0, stars.length - 1)
                        if (!indexesToShow.includes(randomIndex)) {
                            indexesToShow.push(randomIndex)
                        }
                    }

                    indexesToShow.forEach((index) => {
                        stars[index].style.visibility = "visible"
                    })
                }

                setInterval(toggleRandomStars, 1000)
            })