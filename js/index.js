var menu_container = document.getElementById('menu');
var library_audio = document.getElementById('royal_library');
var paper_audio = document.getElementById('paper');
var start_button = document.getElementById('start');
var witch = document.getElementById('witch');

start_button.onclick = () => {    
    
    paper_audio.play();
    menu_container.style.animationName = 'animation-top';
    menu_container.style.animationDuration = '1s';
    
    setTimeout(() => {
        
        library_audio.play();
        document.documentElement.requestFullscreen();
        menu_container.style.display = 'none';
        witch.style.display = 'flex';

    }, 800);
    
}

document.documentElement.onfullscreenchange = () => {
    if(document.fullscreenElement !== null)
        witch.style.marginTop = '20%';
    else
        witch.style.marginTop = '10%';
}

  