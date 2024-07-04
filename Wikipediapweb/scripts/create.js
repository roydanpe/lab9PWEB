//Este script se utiliza para crear y guardar nuevas páginas en el almacenamiento local del navegador.
//Evento 'submit': Se añade un evento que escucha el envío del formulario.
//e.preventDefault(): Previene el comportamiento por defecto del formulario (refrescar la página).
//Obtener valores: Se obtienen los valores de los campos de título y contenido.
//localStorage.setItem(): Guarda la página en el almacenamiento local con el título como clave y el contenido como valor.
//Redirección: Después de guardar, redirige a list.html para ver la lista de páginas.



document.getElementById('create-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('page-name').value;
    const content = document.getElementById('page-content').value;

    localStorage.setItem(name, content);
    window.location.href = 'view.html?name=' + encodeURIComponent(name);
});