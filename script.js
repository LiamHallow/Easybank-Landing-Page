const mobileBtn = document.getElementById('open-btn');
nav = document.querySelector('nav');
mobileBtnExit = document.getElementById('close-btn');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');
    mobileBtn.style.display = "none";
    mobileBtnExit.style.display = "block";
})

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
    mobileBtn.style.display = "block";
    mobileBtnExit.style.display = "none";
})