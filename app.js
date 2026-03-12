
let tamanhoFonte = 100; // tamanho inicial
const minimo = 70;      // limite mínimo
const maximo = 150;     // limite máximo

function aumentarFonte() {
    if (tamanhoFonte < maximo) {
        tamanhoFonte += 10;
        document.body.style.fontSize = tamanhoFonte + "%";
    }
}

function diminuirFonte() {
    if (tamanhoFonte > minimo) {
        tamanhoFonte -= 10;
        document.body.style.fontSize = tamanhoFonte + "%";
    }
}
const btn = document.getElementById('toggleContrast');
const body = document.body;

btn.addEventListener('click', () => {
    body.classList.toggle('high-contrast');
    // Opcional: Salvar preferência no localStorage
});
