var dialog = document.getElementById('dialog');

var dialog_index = 0;

dialog_sequence = [
    'Quem és tu? Um aliado em potencial ou um espião da Inquisição, disfarçado com palavras suaves?',
    'Não vou me deixar enganar por sorrisos falsos ou promessas vazias.',
    'Neste covil de livros, eu guardo segredos, e confiança é uma moeda preciosa que não dou de graça.',
    'Me chamo Alice, sou uma bruxa e tenho estudado nestes dias sombrios diferentes tipos de magia.',
    'Você deveria fazer o mesmo, conhecimento é poder e para se defender é o mais adequado a se fazer.',
    'O que você deseja?'
]

function changeDialogMessage(){

    dialog_index = dialog_sequence.indexOf(dialog.textContent);

    if(dialog_index == -1)
        dialog_index = 0
    else 
        dialog_index = dialog_sequence.indexOf(dialog.textContent) + 1;

    if(dialog_sequence[dialog_index] != undefined){
        dialog.textContent = dialog_sequence[dialog_index];
    }
    
}   


    
    

