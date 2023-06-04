
function Aparecer () {
    let barras = document.getElementById('figurinhas');
    barras.addEventListener('click', function (){
        let abrir = document.getElementById('drag');
        abrir.style.display = 'flex';
    })
}

function Desaparecer () {
    let xis = document.getElementById('close');
    xis.addEventListener('click', function () {
        let fechar = document.getElementById('drag');
        fechar.style.display = 'none';
    })
}

window.onload = function() {
    Aparecer();
    Desaparecer();
}