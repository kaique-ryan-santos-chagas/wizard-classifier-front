var start_questions_button = document.getElementById('start_questions_button');
var dialog = document.getElementById('dialog');

var answers = [];

start_questions_button.onclick = () => {

    dialog_sequence = ['Ele era habilidoso?'];
    dialog.textContent = dialog_sequence[0];
    start_questions_button.remove();

}
