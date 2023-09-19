const h1 = document.querySelector('h1');
const form = document.querySelector('#formulario')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#resultado')

form.addEventListener('submit', sumarInputValues)

function sumarInputValues (event) {
    console.log({event});
    event.preventDefault();//con esto evitamos que se ejecute el evento predeterminado en el html, en este caso que tenemos? Pues tenemos nuestros inputs dentro de un form el cual le manda como evento (al ultimo boton que contenga), un submit, lo cual cambia la URL a otro sitio, cambiandonos de la pagina donde estamos, entonces, para evitar dicho evento, lo cancelamos cambiando la propiedad del evento por default de true, a false.
    const sumaInputs = input1.value + input2.value

    pResult.innerText = "El resultado de tu suma es " + sumaInputs;
}