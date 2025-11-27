# 📘 Tutorial Interactivo del DOM — Versión PRO

![HTML Badge](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=flat-square)
![CSS Badge](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=flat-square)
![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat-square)
![Bootstrap Badge](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white&style=flat-square)
![Educativo Badge](https://img.shields.io/badge/Prop%C3%B3sito-Educativo-blue?style=flat-square)

## 📚 Descripción

Proyecto educativo para practicar **manipulación del DOM** con HTML, CSS, JavaScript y Bootstrap.

Incluye ejemplos desde lo básico hasta técnicas modernas:

- Selección de elementos
- innerHTML vs textContent
- classList y estilos dinámicos
- createElement + DocumentFragment
- Templates HTML
- Delegación de eventos
- Fetch API
- Dark Mode
- Animaciones CSS

Ideal para estudiantes en formación de desarrollo web.

## 🎯 Objetivos de Aprendizaje

- Comprender y manipular el DOM de forma segura.
- Crear elementos dinámicamente.
- Aplicar eventos modernos (`addEventListener`, delegación).
- Consumir APIs reales con `fetch()`.
- Diseñar interfaces con Bootstrap.
- Implementar funciones útiles como modo oscuro y validaciones.
- Practicar buenas prácticas modernas de JavaScript vanilla.

## 🚀 Tecnologías

- **HTML5**
- **CSS3 + Animaciones**
- **JavaScript Vanilla**
- **Bootstrap 5.3**
- **Fetch API**
- **Template HTML**
- **DocumentFragment**

## 📂 Estructura

```
📦 tutorial-dom
├── index.html
├── styles.css
├── app.js
└── README.md
```

## 🛠️ Instalación

No requiere dependencias ni servidor.

1. Clona o descarga:
   ```bash
   git clone https://github.com/gperza/tutorial-dom.git
   ```
2. Abre:
   ```
   index.html
   ```
3. Listo. Todo corre en el navegador.

## 🧪 Funcionalidades Principales

### ✔️ Selección de elementos

```js
document.getElementById();
document.querySelector();
document.querySelectorAll();
```

### ✔️ Manipulación del contenido

```js
element.innerHTML;
element.textContent;
```

### ✔️ Manejo de clases

```js
element.classList.toggle();
```

### ✔️ Creación dinámica

```js
const li = document.createElement("li");
lista.appendChild(li);
```

### ✔️ Plantillas `<template>`

Permite crear componentes complejos de forma limpia.

### ✔️ Delegación de eventos

```js
contenedor.addEventListener("click", e => {...})
```

### ✔️ Fetch API

```js
const res = await fetch("https://jsonplaceholder.typicode.com/users");
```

### ✔️ Modo oscuro

```js
document.body.classList.toggle("dark-mode");
```

## 👨‍🏫 Actividades Sugeridas

- Crear un contador dinámico.
- Crear nuevas cartas usando `<template>`.
- Consumir una API distinta (Pokémon, Rick and Morty).
- Extender el modo oscuro a componentes nuevos.
- Agregar animaciones personalizadas.
