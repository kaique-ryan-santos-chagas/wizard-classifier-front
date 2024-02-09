var magic_sound = document.getElementById('magic_sound');


function getOutput(){

    const CORRECT_OUTPUT = 1;

    var model_trained = model;
    var player_answers_input = answers;
    var sum = 0;
    var outputs = [];
    var witch_index;
    var witch_index_uncertainty;
    var witch;

    for (weights of model_trained) {
        
        sum = 0;

        for (weight of weights) {
            var index = weights.indexOf(weight);
            sum = sum + weight * player_answers_input[index];
        }

        outputs.push(sum);
    }

    for (sum of outputs) {

        error = CORRECT_OUTPUT - sum;

        if (error.toFixed(1) == 0.0)
            witch_index = outputs.indexOf(sum);

        if (error.toFixed(1) > 0.0 && error.toFixed(1) <= 0.5)
            witch_index_uncertainty = outputs.indexOf(sum);

    }

    if (data[witch_index] != undefined) {

        magic_sound.play();
        witch = data[witch_index].Nome;
        
        if (data[witch_index].Classe == 'Bruxo'){
            dialog.textContent = 'Acho que o Bruxo que você viu é o ' + witch; 
            getWizardPicture(witch);

        }

        if (data[witch_index].Classe == 'Bruxa'){
            dialog.textContent = 'Acho que a Bruxa que você viu é a ' + witch;
            getWizardPicture(witch);

        }

    } 

    else if (data[witch_index_uncertainty] != undefined) {

        magic_sound.play();
        witch = data[witch_index_uncertainty].Nome;
        
        if (data[witch_index_uncertainty].Classe == 'Bruxo'){
            dialog.textContent = 'Não tenho certeza, mas acho que o Bruxo que você viu era o ' + witch; 
            getWizardPicture(witch);
        }
        
        if (data[witch_index_uncertainty].Classe == 'Bruxa'){
            dialog.textContent = 'Não tenho certeza, mas acho que a Bruxa que você viu era a ' + witch;
            getWizardPicture(witch);
        }

    }

    else 
        dialog.textContent = 'Eu infelizmente não sei quem era.';

}


function getWizardPicture(witch) {

    var buttonYes = document.getElementById('button_yes');
    var buttonNo = document.getElementById('button_no');

    var witch_name = witch.toLowerCase();
    var image_path = 'img/' + witch_name + '.png';
    
    var image = document.createElement('img');
    image.setAttribute('class', 'wizard_picture');
    image.setAttribute('src', image_path);
    
    player_answers_content.style.opacity = 1;
    buttonYes.remove();
    buttonNo.remove();

    player_answers_content.append(image);

    setTimeout(() => window.location.reload(), 10000);
}