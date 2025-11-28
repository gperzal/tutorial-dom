/* ----------------------
   EVENT LISTENERS
---------------------- */
document.addEventListener("DOMContentLoaded", () => {

    // Sección 1
    document.getElementById("btn-texto").addEventListener("click", cambiarTextoById);
    document.getElementById("btn-color").addEventListener("click", cambiarColorById);

    // Sección 2
    document.getElementById("btn-items").addEventListener("click", cambiarTodosLosItems);

    // Sección 3
    document.getElementById("btn-resaltar").addEventListener("click", resaltarPrimero);

    // Sección 4
    document.getElementById("btn-badges").addEventListener("click", cambiarTodosBadges);

    // Sección 5
    document.getElementById("btn-inner").addEventListener("click", cambiarInnerHTML);
    document.getElementById("btn-textcontent").addEventListener("click", cambiarTextContent);

    // Sección 6
    document.getElementById("btn-toggle").addEventListener("click", toggleClase);
    document.getElementById("btn-mostrar").addEventListener("click", mostrarOcultarCaja);

    // Sección 7
    document.getElementById("btn-add").addEventListener("click", agregarItem);
    document.getElementById("btn-add50").addEventListener("click", agregarMuchosItems);
    document.getElementById("btn-remove").addEventListener("click", removerUltimoItem);
    document.getElementById("btn-fetch").addEventListener("click", cargarUsuarios);

    // Sección 8
    document.getElementById("btn-card").addEventListener("click", crearCarta);
    document.getElementById("btn-card-template").addEventListener("click", crearCartaTemplate);
    document.getElementById("btn-card-clear").addEventListener("click", limpiarCartas);

    // Dark Mode
    document.getElementById("btn-darkmode").addEventListener("click", toggleDarkMode);

    // Validación en tiempo real
    document.getElementById("nombreCarta").addEventListener("input", validarTitulo);
});

/* ----------------------------------------------------------
   1. getElementById
-----------------------------------------------------------*/
function cambiarTextoById() {
    const elemento = document.getElementById('texto1');
    elemento.textContent = '¡Texto cambiado con getElementById!';
}

function cambiarColorById() {
    const elemento = document.getElementById('texto1');
    elemento.style.color = 'blue';
    elemento.style.fontWeight = 'bold';
}

/* ----------------------------------------------------------
   2. getElementsByClassName
-----------------------------------------------------------*/
function cambiarTodosLosItems() {
    const elementos = document.getElementsByClassName('item-lista');
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.backgroundColor = '#d4edda';
        elementos[i].style.padding = '10px';
        elementos[i].textContent = `Elemento ${i + 1} modificado`;
    }
}

/* ----------------------------------------------------------
   3. querySelector
-----------------------------------------------------------*/
function resaltarPrimero() {
    const primerElemento = document.querySelector('.parrafo-especial');
    primerElemento.classList.add('highlight');
    primerElemento.style.fontWeight = 'bold';
}

/* ----------------------------------------------------------
   4. querySelectorAll
-----------------------------------------------------------*/
function cambiarTodosBadges() {
    const badges = document.querySelectorAll('.lista-items .badge');
    const colores = ['primary', 'success', 'danger', 'warning', 'info'];
    badges.forEach((badge, index) => {
        badge.className = `badge bg-${colores[index % colores.length]} me-2`;
        badge.textContent = `Badge ${index + 1} cambiado`;
    });
}

/* ----------------------------------------------------------
   5. innerHTML & textContent
-----------------------------------------------------------*/
function cambiarInnerHTML() {
    const contenedor = document.getElementById('contenedor-dinamico');
    contenedor.innerHTML = '<strong>Contenido cambiado</strong> con <em>innerHTML</em> 🎉';
}

function cambiarTextContent() {
    const contenedor = document.getElementById('contenedor-dinamico');
    contenedor.textContent = 'Contenido cambiado con textContent (sin HTML)';
}

/* ----------------------------------------------------------
   6. classList (toggle)
-----------------------------------------------------------*/
function toggleClase() {
    const caja = document.getElementById('caja-animada');
    caja.classList.toggle('alert-success');
    caja.classList.toggle('alert-light');
}

function mostrarOcultarCaja() {
    const caja = document.getElementById("caja-animada");
    caja.classList.toggle("d-none");
}

/* ----------------------------------------------------------
   7. createElement & appendChild
-----------------------------------------------------------*/
let contador = 2;

function agregarItem() {
    const lista = document.getElementById('lista-dinamica');
    const nuevoItem = document.createElement('li');
    nuevoItem.className = 'list-group-item fade-in';
    nuevoItem.textContent = `Item ${contador} (creado dinámicamente)`;
    lista.appendChild(nuevoItem);
    contador++;
}

function removerUltimoItem() {
    const lista = document.getElementById("lista-dinamica");
    lista.lastElementChild?.remove();
}

function agregarMuchosItems() {
    const lista = document.getElementById("lista-dinamica");
    const fragmento = document.createDocumentFragment();

    for (let i = 1; i <= 50; i++) {
        const item = document.createElement("li");
        item.className = "list-group-item fade-in";
        item.textContent = `Item masivo ${i}`;
        fragmento.appendChild(item);
    }

    lista.appendChild(fragmento);
}

/* ---------------------------
   Fetch API
---------------------------*/
async function cargarUsuarios() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const lista = document.getElementById("lista-dinamica");
    lista.innerHTML = "";

    data.forEach(user => {
        const li = document.createElement("li");
        li.className = "list-group-item fade-in";
        li.textContent = `${user.id} - ${user.name}`;
        lista.appendChild(li);
    });
}

/* ----------------------------------------------------------
   8. Crear cartas manualmente
-----------------------------------------------------------*/
let contadorCartas = 1;

function crearCarta() {
    const titulo = document.getElementById("nombreCarta").value || `Carta ${contadorCartas}`;
    const descripcion = document.getElementById("descripcionCarta").value || "Carta generada dinámicamente";

    const col = document.createElement("div");
    col.className = "col-md-4 fade-in";

    const card = document.createElement("div");
    card.className = "card shadow-sm";

    const header = document.createElement("div");
    header.className = "card-header bg-warning text-dark";
    header.textContent = titulo;

    const body = document.createElement("div");
    body.className = "card-body";

    const p = document.createElement("p");
    p.textContent = descripcion;

    const badge = document.createElement("span");
    badge.className = "badge bg-secondary me-2";
    badge.textContent = `Carta #${contadorCartas}`;

    const btn = document.createElement("button");
    btn.className = "btn btn-sm btn-danger mt-2 btn-eliminar-card";
    btn.textContent = "Eliminar";

    body.appendChild(p);
    body.appendChild(badge);
    body.appendChild(btn);
    card.appendChild(header);
    card.appendChild(body);
    col.appendChild(card);

    document.getElementById("contenedor-cartas").appendChild(col);

    contadorCartas++;
}

function limpiarCartas() {
    document.getElementById("contenedor-cartas").innerHTML = "";
    contadorCartas = 1;
}

/* ----------------------------------------------------------
   9. Delegación de eventos (eliminar cartas)
-----------------------------------------------------------*/
document.getElementById("contenedor-cartas").addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-eliminar-card")) {
        e.target.closest(".col-md-4").remove();
    }
});

/* ----------------------------------------------------------
   10. Plantilla <template>
-----------------------------------------------------------*/
let contadorTemplate = 1;

function crearCartaTemplate() {
    const titulo = document.getElementById("nombreCarta").value || `Carta Template ${contadorTemplate}`;
    const descripcion = document.getElementById("descripcionCarta").value || "Descripción generada desde template.";

    const template = document.getElementById("plantilla-carta").content.cloneNode(true);

    template.querySelector(".titulo-card").textContent = titulo;
    template.querySelector(".descripcion-card").textContent = descripcion;
    template.querySelector(".numero-card").textContent = `#${contadorTemplate}`;

    document.getElementById("contenedor-cartas").appendChild(template);

    contadorTemplate++;
}

/* ----------------------------------------------------------
   11. Modo Oscuro
-----------------------------------------------------------*/
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

/* ----------------------------------------------------------
   12. Validación en tiempo real
-----------------------------------------------------------*/
function validarTitulo(e) {
    e.target.style.borderColor = e.target.value.length > 0 ? "green" : "red";
}