const pageList = document.getElementById('page-list');
const pageTitle = document.getElementById('page-title');
const pageContent = document.getElementById('page-content');

for (let i = 0; i < localStorage.length; i++) {
    const pageName = localStorage.key(i);
    const li = document.createElement('li');
    li.innerHTML = `
        <a href="#" onclick="showPage('${pageName}')">${pageName}</a>
        <a href="edit.html?name=${pageName}">(E)</a>
        <a href="#" onclick="deletePage('${pageName}')">(X)</a>
    `;
    pageList.appendChild(li);
}

function showPage(name) {
    const content = localStorage.getItem(name);
    pageTitle.textContent = name;
    pageContent.textContent = content;
}

function deletePage(name) {
    localStorage.removeItem(name);
    window.location.reload();
}
