const encriptador = document.getElementById("encriptar");

encriptador.addEventListener('click', (e)=>{
    e.preventDefault();
    encriptar();
});

const desencriptador = document.getElementById("desencriptar");

desencriptador.addEventListener('click', (e)=>{
    e.preventDefault();
    desencriptar();
});

const respuesta = document.getElementById("respuesta");
const persona = document.getElementById("persona");

const copiar = document.getElementById("copiar");

function encriptar(){
    let textoAEncriptar = document.getElementById("texto").value;
    if(textoAEncriptar.length == 0){
        alert("ingrese texto para encriptar");
        return;
    }

    if(!validarTexto(textoAEncriptar)){
        alert("ingrese letras minusculas y sin tildes");
        return;
    }
    let textoEncriptado = "";
    for (let i = 0; i < textoAEncriptar.length; i++) {
        const letra = textoAEncriptar.charAt(i);

        switch (letra) {
            case "a":
                textoEncriptado += "ai";
                break;
            case "e":
                textoEncriptado += "enter";
                break;
            case "i":
                textoEncriptado += "imes";
                break;
            case "o":
                textoEncriptado += "ober";
                break;
            case "u":
                textoEncriptado += "ufat"
                break;
            default:
                textoEncriptado += letra;
        }
    }

    persona.style.display = "none";
    respuesta.innerText = textoEncriptado;
    respuesta.style.fontSize = "35px"
    respuesta.style.opacity = "90%";
}

copiar.addEventListener("click", (e)=>{
    e.preventDefault();
    navigator.clipboard.writeText(respuesta.innerText);
})

function desencriptar(){
    let textoADesencriptar = document.getElementById("texto").value;
    if(textoADesencriptar.length == 0){
        alert("ingrese texto para encriptar");
        return;
    }
    if(!validarTexto(textoADesencriptar)){
        alert("ingrese letras minusculas y sin tildes")
        return;
    }

    textoADesencriptar = textoADesencriptar.split("ai").join("a");
    textoADesencriptar = textoADesencriptar.split("enter").join("e");
    textoADesencriptar = textoADesencriptar.split("imes").join("i");
    textoADesencriptar = textoADesencriptar.split("ober").join("o");
    textoADesencriptar = textoADesencriptar.split("ufat").join("u");

    persona.style.display = "none";
    respuesta.innerText = textoADesencriptar;
    respuesta.style.fontSize = "35px"
    respuesta.style.opacity = "90%";
};

function validarTexto(texto) {
    const regex = /^[a-z]+$/;
    return regex.test(texto);
}