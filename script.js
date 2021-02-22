const button = document.getElementById('myBtn');
let texto = document.getElementById('myText');

const changeColor = () => {
    document.getElementById('caja').style.background = texto.value;
    texto.text = '';
}

button.addEventListener('click', changeColor);

texto.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        changeColor();
    }
});


