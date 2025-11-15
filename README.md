# teachDOM

Manipulación del DOM – CRUD de Tarjetas

Proyecto que implementa un CRUD completo (Crear, Leer, Actualizar y Eliminar) utilizando HTML, CSS y JavaScript puro, manipulando el DOM sin frameworks.
Incluye persistencia mediante LocalStorage para mantener las tarjetas incluso después de recargar la página.

🚀 Características

Crear tarjetas dinámicamente

Editar tarjetas existentes

Eliminar tarjetas

Formulario dinámico (mostrar/ocultar)

Plantilla oculta utilizada como base para nuevas tarjetas

Persistencia con LocalStorage

Interfaz simple y funcional

📁 Estructura del proyecto
/
├── index.html
├── /css
│   └── styles.css
├── /js
│   └── javascript.js
└── README.md

🏗️ HTML principal
Contenedor de tarjetas:
<ul id="listaComponentes"></ul>

Plantilla oculta:
<div id="plantillaTarjeta">
  <div class="ListaTarjetas">
    <h3></h3>
    <p></p>
    <span>
      <button class="editarComponente">Editar</button>
      <button class="eliminarComponente">Eliminar</button>
    </span>
  </div>
</div>

Formulario:
<div id="formularioComponente">
  <span>Titulo:</span>
  <input type="text" id="tituloInput" />
  <span>Descripcion:</span>
  <input type="text" id="descripcionInput" />
  <span>
    <button id="guardarComponente">Guardar</button>
    <button id="cancelarComponente">Cancelar</button>
  </span>
</div>

🎨 CSS relevante
#formularioComponente {
  display: none;
}

#plantillaTarjeta {
  display: none;
}

.contenidoComponente {
  background-color: palevioletred;
  width: 300px;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

🧠 Lógica principal en JavaScript
Selección de elementos:

Botón Agregar

Formulario (inputs de título y descripción)

Plantilla oculta

Contenedor de tarjetas

Botones de Guardar y Cancelar

Crear una tarjeta:

Clonar la plantilla

Insertar los valores del formulario

Agregar eventos de editar y eliminar

Insertar en #listaComponentes

Editar:

Cargar valores actuales en el formulario

Guardar cambios sobre la tarjeta seleccionada

Eliminar:

Remover la tarjeta del DOM con .remove()

💾 LocalStorage
Guardar:

Cada vez que se agrega, edita o elimina una tarjeta, se ejecuta:

localStorage.setItem("tarjetasCRUD", JSON.stringify(arrayDeTarjetas));

Cargar:

Cuando la página inicia:

cargarDesdeLocalStorage();


Se reconstruyen todas las tarjetas guardadas.

🧪 Cómo usarlo

Abrir index.html

Hacer clic en Agregar Componente

Llenar el formulario

Guardar la tarjeta

Editar o eliminar según necesidad

Refrescar la página → las tarjetas permanecen gracias a LocalStorage

📌 Conclusión

Este proyecto demuestra:

Manipulación del DOM

Creación dinámica de elementos

Clonado de plantillas

Manejo de formularios

Persistencia local

Operaciones CRUD completas

Ideal para aprender JavaScript práctico sin frameworks.