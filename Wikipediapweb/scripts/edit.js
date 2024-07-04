//Este script se utiliza para editar una página existente.
//Obtener nombre y contenido de página: Igual que en view.js.
//Rellenar formulario: Establece los valores del formulario con el nombre y contenido actuales de la página.
//Evento 'submit': Se añade un evento para manejar el envío del formulario.
//Guardar cambios: Elimina la entrada antigua del localStorage y guarda la nueva.
//Redirección: Redirige a list.html después de guardar los cambios.
const pageName = new URLSearchParams(window.location.search).get('name');
const content = localStorage.getItem(pageName);
document.getElementById('page-content').value = content;

document.getElementById('edit-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newContent = document.getElementById('page-content').value;

    localStorage.setItem(pageName, newContent);
    window.location.href = 'list.html';
});