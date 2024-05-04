const button = document.querySelector('button');
const iconoShare = document.querySelector('.icons');

button.addEventListener('click', () => {
    shareBoton();
    activeShareBoton();
    
})

function shareBoton (){
    iconoShare.style.display = 'none';
}

function activeShareBoton (){
    iconoShare.style.display = 'flex';
}

function clearShare(){
    iconoShare.style.display = 'none';
}