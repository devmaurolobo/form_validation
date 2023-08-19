// Variaveis

const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const senhaInput = document.querySelector('#password');
const passwordfInput = document.querySelector('#job');
const textInput = document.querySelector('#text');

//Evento
form.addEventListener('submit',(event) => {
    event.preventDefault();

// Validação Name
if(nameInput.value ===""){
    alert("Please enter a name first!");
    return;
}

if(emailInput.value ===""){
    alert("Please enter an email!");
    return;
}

if(passwordfInput.value ===""){ 
    alert("Please enter an password!");
    return;
}

if (condition) {
    
}
})
