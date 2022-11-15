const button= document.querySelector('button');
const social= document.querySelector(".activesocial")

function show() {
 social.classList.toggle('social')
 
 
}

button.addEventListener('click', show)

