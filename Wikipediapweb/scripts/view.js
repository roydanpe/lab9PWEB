//Este script se utiliza para visualizar el contenido de una página seleccionada.
//Obtener nombre de página: Utiliza URLSearchParams para obtener el nombre de la página de la URL.
//Obtener contenido: Recupera el contenido de la página desde localStorage usando el nombre de la página.
//Mostrar título: Establece el título de la página en el elemento con el ID page-title.
//Mostrar contenido: Convierte el contenido Markdown a HTML utilizando marked y lo establece en el elemento con el ID page-content.
function convertMarkdownToHtml(markdown) {
    let html = markdown;

    // Convertir encabezados
    html = html.replace(/^# (.*?)$/gm, '<h1>$1</h1>');
    html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
    html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>');

    // Convertir negritas
    html = html.replace(/\*\*(.*?)\*\*/gm, '<strong>$1</strong>');

    // Convertir itálicas
    html = html.replace(/\*(.*?)\*/gm, '<em>$1</em>');

    // Convertir enlaces
    html = html.replace(/\[(.*?)\]\((.*?)\)/gm, '<a href="$2">$1</a>');

    // Convertir listas no ordenadas
    html = html.replace(/^\s*\n\*/gm, '<ul>\n*');
    html = html.replace(/^(\*.+)\s*\n([^\*])/gm, '$1\n</ul>\n\n$2');
    html = html.replace(/^\*(.+)/gm, '<li>$1</li>');

    // Convertir listas ordenadas
    html = html.replace(/^\s*\n\d\./gm, '<ol>\n1.');
    html = html.replace(/^(\d\..+)\s*\n([^\d\.])/gm, '$1\n</ol>\n\n$2');
    html = html.replace(/^\d\.(.+)/gm, '<li>$1</li>');

    // Convertir saltos de línea dobles en párrafos
    html = html.replace(/\n\n/g, '</p><p>');

    // Convertir saltos de línea
    html = html.replace(/\n/g, '<br>');

    // Envolver en párrafos
    html = '<p>' + html + '</p>';

    return html;
}


document.addEventListener('DOMContentLoaded', function() {
    const pageName = new URLSearchParams(window.location.search).get('name');
    const content = localStorage.getItem(pageName);

    if (pageName && content) {
        document.getElementById('page-title').textContent = pageName;
        document.getElementById('page-content').innerHTML = convertMarkdownToHtml(content);
    } else {
        document.getElementById('page-title').textContent = "Página no encontrada";
        document.getElementById('page-content').textContent = "El contenido de la página no existe.";
    }
});
