// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const inputAmigos = document.querySelector(".input-name");
const listaAmigos = document.querySelector(".name-list");
const resultado = document.querySelector(".result-list");

let arrayAmigos = [];

let numberRandom = Math.floor(Math.random()*arrayAmigos);




const agregarAmigo = () =>{
    if(inputAmigos.value == ``){
        alert (`Por favor, inserte un nombre`)
    }else{
        console.log(inputAmigos.value);
        arrayAmigos.push(inputAmigos.value);
        console.log(arrayAmigos);
        inputAmigos.value = ``;
        const mostrarAmigos = () =>{
            listaAmigos.innerHTML = ``;
            listaAmigos.innerHTML = arrayAmigos;
        }
        mostrarAmigos();
    }

}


const sortearAmigo = () =>{
    resultado.innerHTML = `El amigo sorteado es : ${arrayAmigos[numberRandom]}`;
}

