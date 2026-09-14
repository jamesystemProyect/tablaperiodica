// Contenido de script.js
const elementos = document.querySelectorAll('.element');

elementos.forEach(item => {
  item.addEventListener('click', () => {
    const tagName = item.querySelector('.name').innerText;
    alert(`Has seleccionado la etiqueta HTML5: <${tagName}>`);
  });
});