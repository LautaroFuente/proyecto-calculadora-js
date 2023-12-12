
const botones = document.querySelectorAll('.btn-js');

const display = document.getElementById('display');

const botonBorrar = document.getElementById('delete');

const botonIgual = document.getElementById('equal');

let expresion = '';

botones.forEach(botón => {
    botón.addEventListener('click', function() {

        const textoBotón = this.innerText;

        display.innerText += textoBotón;

        expresion += textoBotón;
    });
});

botonBorrar.addEventListener('click', function(){
    display.innerText = '';
    expresion = '';
})

function calcularExpresion() {
    try {
        const resultado = eval(expresion);
        display.innerText = resultado;
    } catch (error) {
        display.innerText = 'Error';
    }
    finally{
        expresion = '';
    }
}

botonIgual.addEventListener('click', () =>{
    calcularExpresion();
});