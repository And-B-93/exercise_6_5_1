import '../scss/style.scss'

console.log('Works!')

// меню

let popup = document.querySelector('.menu-wrapper')
let transparentClickMenu = popup.querySelector('.transparent')

let openPopupButton = document.querySelector('.btn-menu')
let closePopupButton = popup.querySelector('.button--burger-close')

let menu = document.querySelector('.menu')
let body = document.querySelector('body')

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault()
  transparentClickMenu.classList.remove('transparent--none')
  popup.classList.add('menu-wrapper--modal-show')
  closePopupButton.classList.remove('visually-hidden')
  menu.classList.add('menu--modal-menu')
  body.style.overflow = 'hidden'
})

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('menu-wrapper--modal-show')
  transparentClickMenu.classList.add('transparent--none')
  closePopupButton.classList.add('visually-hidden')
  menu.classList.remove('menu--modal-menu')
  body.style.overflow = 'auto'
})

transparentClickMenu.addEventListener('click', function () {
  popup.classList.remove('menu-wrapper--modal-show')
  transparentClickMenu.classList.add('transparent--none')
  closePopupButton.classList.add('visually-hidden')
  menu.classList.remove('menu--modal-menu')
  body.style.overflow = 'auto'
})

//модальные окна

let popupFeedback = document.querySelector('.feedback')
let popupCallback = document.querySelector('.callback')

let openPopupButtonFeedback = document.querySelectorAll('.button--chat')
let openPopupButtonCallback = document.querySelectorAll('.button--call')

let closePopupButtonFeedback = popupFeedback.querySelector(
  '.button--burger-close-feedback'
)
let closePopupButtonCallback = popupCallback.querySelector(
  '.button--burger-close-callback'
)

let transparentClickFeedback = popupFeedback.querySelector('.transparent')
let transparentClickCallback = popupCallback.querySelector('.transparent')

for (let i = 0; i < openPopupButtonFeedback.length; i++) {
  openPopupButtonFeedback[i].addEventListener('click', function (evt) {
    evt.preventDefault()
    popupFeedback.classList.add('feedback--modal-show')
    popupFeedback.classList.remove('visually-hidden')
    popup.classList.remove('menu-wrapper--modal-show')
    menu.classList.remove('menu--modal-menu')
    closePopupButton.classList.add('visually-hidden')
    const scrollY = window.scrollY || window.pageYOffset
    popupFeedback.style.top = scrollY + 0 + 'px'
    body.style.overflow = 'hidden'
  })

  closePopupButtonFeedback.addEventListener('click', function () {
    popupFeedback.classList.remove('feedback--modal-show')
    popupFeedback.classList.add('visually-hidden')
    body.style.overflow = 'auto'
  })

  transparentClickFeedback.addEventListener('click', function () {
    popupFeedback.classList.remove('feedback--modal-show')
    popupFeedback.classList.add('visually-hidden')
    body.style.overflow = 'auto'
  })
}

for (let i = 0; i < openPopupButtonCallback.length; i++) {
  openPopupButtonCallback[i].addEventListener('click', function (evt) {
    evt.preventDefault()
    popupCallback.classList.add('callback--modal-show')
    popupCallback.classList.remove('visually-hidden')
    popup.classList.remove('menu-wrapper--modal-show')
    menu.classList.remove('menu--modal-menu')
    closePopupButton.classList.add('visually-hidden')
    const scrollY = window.scrollY || window.pageYOffset
    popupCallback.style.top = scrollY + 0 + 'px'
    body.style.overflow = 'hidden'
  })

  closePopupButtonCallback.addEventListener('click', function () {
    popupCallback.classList.remove('callback--modal-show')
    popupCallback.classList.add('visually-hidden')
    body.style.overflow = 'auto'
  })

  transparentClickCallback.addEventListener('click', function () {
    popupCallback.classList.remove('callback--modal-show')
    popupCallback.classList.add('visually-hidden')
    body.style.overflow = 'auto'
  })
}

//свайпер
new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

//покажи мне ВСЁ

let desktop = document.querySelectorAll('.blocks-desktop')
let isShow = false

for (let i = 0; i < desktop.length; i++) {
  let btn = desktop[i].querySelector('.button-show-more')
  let text = btn.querySelector('.text-btn')
  let img = btn.querySelector('.icon-btn')
  let changeScreen = desktop[i].querySelector('.block-desktop')

  btn.addEventListener('click', function () {
    if (isShow) {
      changeScreen.classList.remove('block-desktop--show')
      btn.classList.remove('button-show-more--reverse')
      text.innerHTML = 'Показать всё'
      img.classList.remove('icon-btn--reverse')
    } else {
      changeScreen.classList.add('block-desktop--show')
      btn.classList.add('button-show-more--reverse')
      text.innerHTML = 'Скрыть'
      img.classList.add('icon-btn--reverse')
    }
    isShow = !isShow
  })
}

let mainInfoText = document.querySelector('.main-info__text')
let btnReedMore = mainInfoText.querySelector('.button-reed-more')
let img = btnReedMore.querySelector('.icon-btn')
let textBtnReedMore = btnReedMore.querySelector('.text-btn-reed-more')
let screenShowMore = mainInfoText.querySelector('.text')

btnReedMore.addEventListener('click', function () {
  if (isShow) {
    screenShowMore.classList.remove('text--show')
    btnReedMore.classList.remove('button-reed-more--reverse')
    img.classList.remove('icon-btn--reverse')
    textBtnReedMore.innerHTML = 'Читать далее'
  } else {
    screenShowMore.classList.add('text--show')
    btnReedMore.classList.add('button-reed-more--reverse')
    img.classList.add('icon-btn--reverse')
    textBtnReedMore.innerHTML = 'Скрыть'
  }
  isShow = !isShow
})
