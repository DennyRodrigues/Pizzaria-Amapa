const next = document.querySelector('#next');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('#prev');


const next_slide =  () =>{
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
    }
    else{
        slides[0].classList.add('current');
    }
}
const prev_slide = () =>{
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current');
    }
    else{
        slides[slides.length - 1].classList.add('current');
    }
}

next.addEventListener('click', next_slide);
prev.addEventListener('click', prev_slide);
timer = setInterval(next_slide, 7000);