var start_questions_button = document.getElementById('start_questions_button');
var dialog = document.getElementById('dialog');
var player_answers_content = document.getElementById('player_answers');

var questions = [

    'Ele era habilidoso?', 
    'Esse bruxo era velho?', 
    'Ele era bom com poções?', 
    'Era Astúto?', 
    'Era alguém leal?',
    'Era uma mulher?',
    'Ele podia se transformar em animais?',
    'Ele tinha um Patrono?'

];

var answers = [];

start_questions_button.onclick = () => {

    paper_audio.play();

    dialog_sequence = [];
    dialog.textContent = questions[0];
    start_questions_button.remove();

    createAnswersButtons();

}

function createAnswersButtons() {

    var buttonYes = document.createElement('button');

    buttonYes.setAttribute('class', 'answer_button');
    buttonYes.setAttribute('id', 'button_yes');
    buttonYes.setAttribute('value', 1);
    buttonYes.setAttribute('onclick', 'getAnswer("yes")');
    buttonYes.textContent = 'Sim';
    
    player_answers_content.append(buttonYes);

    var buttonNo = document.createElement('button');
    
    buttonNo.setAttribute('class', 'answer_button');
    buttonNo.setAttribute('id', 'button_no');
    buttonNo.setAttribute('value', 0);
    buttonNo.setAttribute('onclick', 'getAnswer("no")');
    buttonNo.textContent = 'Não';

    player_answers_content.append(buttonNo);

}

function getAnswer(button) {

    var buttonYes = document.getElementById('button_yes');
    var buttonNo = document.getElementById('button_no');
    
    var dialog = document.getElementById('dialog');
    var question = dialog.textContent;
    var question_index = questions.indexOf(question);

    if (button == 'yes'){
        paper_audio.play();
        answers.push(buttonYes.value);
    }
    
    if (button == 'no'){
        paper_audio.play();
        answers.push(buttonNo.value);

    }


    buttonYes.remove();
    buttonNo.remove();
    createAnswersButtons();

    if (questions[question_index + 1] != undefined)
        dialog.textContent = questions[question_index + 1];
    
    else {

        var bias_input = 1;
        answers.push(bias_input);

        dialog.textContent = 'Deixe-me pensar...';
        player_answers.style.opacity = 0;
        
        getOutput();

    }
    

}