let chooseBodyBtn = document.querySelector('#chooseBody');
let chooseBrandBtn = document.querySelector('#chooseBrand');
let chooseParentBtn = document.querySelector('.choose__btns');
let chooseLine = document.querySelector('.choose__line');
let chooseBox = document.querySelectorAll('.choose__box')

chooseBodyBtn.addEventListener('click', () => {
    chooseBodyBtn.classList.add('choose__btn_active');
    chooseBrandBtn.classList.remove('choose__btn_active');
    chooseParentBtn.classList.remove('decor_right');
    chooseLine.classList.remove('line_left')
});

chooseBrandBtn.addEventListener('click', () => {
    chooseBrandBtn.classList.add('choose__btn_active');
    chooseBodyBtn.classList.remove('choose__btn_active');
    chooseParentBtn.classList.add('decor_right')
    chooseLine.classList.add('line_left')
})

chooseBox.forEach(box => {
    let btnAll = box.querySelector('.choose__all');
    let items = box.querySelectorAll('.choose__item');
    btnAll.addEventListener('click', () => {
        btnAll.parentElement.style.filter = 'blur(5px)'
        window.setTimeout(() => {
            btnAll.parentElement.style.filter = 'blur(0px)'
        }, 300);

        items.forEach(item => {
            item.classList.remove('choose__item_dis')
        });
    })
})

const swiper = new Swiper('.photos-slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 20,
    effect: "fade",
    loop: true,
    fadeEffect: {
        crossFade: true
    },
    centeredSlides: true,
    autoplay: 1000,
    speed: 650,

});

let countPurchaseCollection = document.querySelectorAll('.purchase__count');
let countPurchase = ''
for (let i = 0; i < countPurchaseCollection.length; i++) {
    countPurchaseCollection[i].textContent = ((i + 1) < 10) ? '0' + (i + 1) : (i + 1)
}

// gsap
let tl = gsap.timeline();


tl.from('.top', { opacity: 0, duration: .5 })
    .from('.top__title', { opacity: 0, y: 100, duration: .3 })
    .from('.top__subtitle', { opacity: 0, y: 100, duration: .4 })


if(document.querySelector('.header__burger')) {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.nav');
    burger.addEventListener('click', ()=> {
        nav.classList.toggle('open')
        burger.classList.toggle('active')
    });
}
