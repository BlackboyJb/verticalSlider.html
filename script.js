const sliderEl = document.querySelector('.container-slider')
const rightslideEl = document.querySelector('.right-slide')
const leftslideEl = document.querySelector('.left-slide')
const downbtnEl = document.querySelector('.down-button')
const upbtnEl = document.querySelector('.up-button')
const slidesLength = rightslideEl.querySelectorAll('div').length

let activeslideIndex = 0

leftslideEl.style.top = `-${(slidesLength - 1) * 100}vh`


upbtnEl.addEventListener("click", () => {
    changeSlide('up')
})



downbtnEl.addEventListener("click", () => {
    changeSlide('down')
})

const changeSlide = (direction) => {
    const sliderHeight = sliderEl.clientHeight

    if (direction === 'up') {
        activeslideIndex++
        if (activeslideIndex > slidesLength - 1) {
            activeslideIndex = 0
        }
    } else if (direction === 'down') {
        activeslideIndex--
        if (activeslideIndex < 0) {
            activeslideIndex = slidesLength - 1
        }
    }





    rightslideEl.style.transform = `translateY(-${activeslideIndex * sliderHeight}px)`
    leftslideEl.style.transform = `translateY(${activeslideIndex * sliderHeight}px)`

}

