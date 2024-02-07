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

        console.log('Error:', error.toFixed(1));

        if (error.toFixed(1) == 0.0)
            witch_index = outputs.indexOf(sum);

        if (error.toFixed(1) > 0.0 && error.toFixed(1) <= 0.5)
            witch_index_uncertainty = outputs.indexOf(sum);

    }

    if (data[witch_index] != undefined) {

        magic_sound.play();
        witch = data[witch_index].Nome;
        
        if (data[witch_index].Classe == 'Bruxo')
            dialog.textContent = 'Acho que o Bruxo que você viu é o ' + witch; 
        if (data[witch_index].Classe == 'Bruxa')
            dialog.textContent = 'Acho que o Bruxo que você viu é a ' + witch;

    } 

    else if (data[witch_index_uncertainty] != undefined) {

        magic_sound.play();
        witch = data[witch_index_uncertainty].Nome;
        
        if (data[witch_index_uncertainty].Classe == 'Bruxo')
            dialog.textContent = 'Acho que o Bruxo que você viu é o ' + witch; 
        if (data[witch_index_uncertainty].Classe == 'Bruxa')
            dialog.textContent = 'Acho que a Bruxa que você viu é a ' + witch;

    }

    else 
        dialog.textContent = 'Eu infelizmente não sei quem era.';

}
