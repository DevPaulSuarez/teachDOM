const listaComponentes = document.querySelector("#listaComponentes");
const plantillaTarjeta = document.querySelector("#plantillaTarjeta .ListaTarjetas");
const btnAgregar = document.querySelector("#agregarComponente");
const formulario = document.querySelector("#formularioComponente");
const inputTitulo = document.querySelector("#tituloInput");
const inputDescripcion = document.querySelector("#descripcionInput");
const btnGuardar = document.querySelector("#guardarComponente");
const btnCancelar = document.querySelector("#cancelarComponente");
let tarjetaEditando = null;

btnAgregar.addEventListener("click", () => {
    formulario.style.display = "block";
    limpiarFormulario();
});

btnCancelar.addEventListener("click", () => {
    formulario.style.display = "none";
    limpiarFormulario();
});

btnGuardar.addEventListener("click", () => {
    const titulo = inputTitulo.value.trim();
    const descripcion = inputDescripcion.value.trim();

    if (titulo === "" || descripcion === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // condicional para saber si guardamos o editamos 
    if(tarjetaEditando === null){
        // si no se esta editando se crea tarjeta
        const nuevaTarjeta = plantillaTarjeta.cloneNode(true);

        nuevaTarjeta.querySelector('h3').textContent = titulo;
        nuevaTarjeta.querySelector('p').textContent = descripcion;

        agregarEventosTarjeta(nuevaTarjeta);
        listaComponentes.appendChild(nuevaTarjeta);
    }else{
        //si estamos editando se actuliza tarjeta
        tarjetaEditando.querySelector('h3').textContent = titulo;
        tarjetaEditando.querySelector('p').textContent = descripcion;
        tarjetaEditando = null;
    }

    formulario.style.display = "none";
    limpiarFormulario();
});

//Funcion de limpiar textos 
function limpiarFormulario() {
    inputTitulo.value = "";
    inputDescripcion.value = "";
    tarjetaEditando = null;
}

// funcion de agregarTarjetaNueva
function agregarEventosTarjeta(tarjeta) {  
    
    const btnEditar = tarjeta.querySelector(".editarComponente");
    btnEditar.addEventListener("click", () => {
        tarjetaEditando = tarjeta;
        inputTitulo.value = tarjeta.querySelector('h3').textContent;
        inputDescripcion.value = tarjeta.querySelector('p').textContent;
        formulario.style.display = "block";
    });

    const btnEliminar = tarjeta.querySelector(".eliminarComponente");
    btnEliminar.addEventListener("click", () => {
        tarjeta.remove();
    });
}


// Usando el localStorage para Gaurdar DAtos 


function guardarEnLocalStorage() {
    const tarjeta = [];

    document.querySelectorAll("#listaComponentes .ListaTarjetas").forEach(tarjeta =>{
        tarjeta.push({
            titulo:tarjeta.querySelector('h3').textContent,
            descripcion:tarjeta.querySelector('p').textContent
        });
    });
    localStorage.setItem("tarjetasCRUD", JSON.stringify(tarjeta));
}

function cargarDesdeLocalStorage() {
    const data = localStorage.getItem("tarjetasCRUD");
    if(!data) return;
    const tarjetas = JSON.parse(data);

    tarjetas.forEach(tarjetaData => {
        const nuevaTarjeta = plantillaTarjeta.cloneNode(true);
        nuevaTarjeta.querySelector('h3').textContent = tarjetaData.titulo;
        nuevaTarjeta.querySelector('p').textContent = tarjetaData.descripcion;
        agregarEventosTarjeta(nuevaTarjeta);
        listaComponentes.appendChild(nuevaTarjeta);
    });
}


cargarDesdeLocalStorage();