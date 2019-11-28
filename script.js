var button = document.getElementById('myBtn');
var texto = document.getElementById('myText');

button.addEventListener('click', () => {
    document.getElementById('caja').style.background = texto.value;
});

texto.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        document.getElementById('caja').style.background = texto.value;
    }
});


