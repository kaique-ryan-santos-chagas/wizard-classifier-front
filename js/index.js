var menu_container = document.getElementById('menu');
var library_audio = document.getElementById('royal_library');
var start_button = document.getElementById('start');

start_button.onclick = () => {
    library_audio.play();
    menu_container.style.display = 'none';

}

