
//HAMBURGER MENU
const side_menu = document.querySelector('#side_menu');
const menu_icon = document.querySelector('#menu_icon');
const exit_menu = document.querySelector('#exit_menu');


//function to open menu
const open_menu = () =>{
    console.log('CLICK');
    side_menu.style.display = 'block';
    menu_icon.style.display = 'none';

}
//function to close
const close_menu = () =>{
    side_menu.style.display = 'none';
    menu_icon.style.display= 'inline';
}

//Add the click event to call the functions close and open
menu_icon.addEventListener('click', open_menu);
exit_menu.addEventListener('click', close_menu);

//FOOD_MENU
//define the const Food_Menu
const food_menu_buttons =  document.querySelectorAll(".cardapio");
const food_menu =  document.querySelector("#food_menu");

//Define the Functions
const show_food_menu = () => {
    food_menu.style.display = 'block';
}
const close_food_menu = () => {
    food_menu.style.display = 'none';
}
//Add the click event to all the food_menu_buttons.
food_menu_buttons.forEach(function(element){
    element.addEventListener('click', show_food_menu);
});

//Add the click event to call the functions close 
food_menu.addEventListener('click', close_food_menu);

//IMAGE SLIDER
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

