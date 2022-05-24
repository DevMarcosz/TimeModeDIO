
const btnDark = document.getElementById('mode-selector');
const img = document.getElementById('img');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];


btnDark.addEventListener('click', changeMode);

function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses() {
    btnDark.classList.toggle('dark-mode');
    img.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    
}

function changeText(){
    const nightMode = "Night Mode";
    const dayMode = "Day Mode";
    const fotos = []
    if(btnDark.classList.contains('dark-mode')){
        btnDark.innerHTML = dayMode;
        img.src = "assets/imgs/moon.png";
        return;
    }

    btnDark.innerHTML = nightMode;
    img.src = "assets/imgs/sun.png";
}
