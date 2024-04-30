window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout( () => {
            preloader.style.display = 'none';
        },200)
    }, 800);
});
window.addEventListener('scroll', () => {
    const goto = document.querySelector('#goto');
    var topvalue = window.scrollY;
    // 
    if (topvalue > 100) {
        goto.classList.add("anime");
    } else {
        goto.classList.remove("anime");
    }
});
const goTop = document.querySelector('#goto');
goTop.addEventListener('click', () =>{
    const tops = window.scrollY;
   setTimeout(() =>{
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    });
   },200)
});