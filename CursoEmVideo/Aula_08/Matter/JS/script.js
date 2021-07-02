function Verificar(){
    var idade = parseInt(document.getElementById('idade').value);
    var resultado;

    if(idade < 16){
        resultado = 'Menor de idade!';
    }
    else if(idade >= 16 && idade  < 18){
        resultado = 'Voto facultativo!';
    }
    else if(idade <= 65){
        resultado = 'Votação obrigatoria!';
    }
    else{
        resultado = 'Votação opcional!';
    }

    document.getElementById('resultado').value = resultado;
}

function horario(){
    var agora = new Date();
    var hora = agora.getHours;
    var resposta = agora;

    document.getElementById('resposta').value = resposta;

}

function diaSem(){
    var semana = new Date();
    var dia = semana.getDay();
    
    switch(dia){
        case 0:
            dia = 'Domingo'

            break
        case 1:
            dia = 'Segunda-feira'

            break
        case 2:
            dia = 'Terça-feira'

            break
        case 2:
            dia = 'Quarta-feira'

            break
        case 4:
            dia = 'Quinta-feira'

            break
        case 5:
            dia = 'Sexta-feira'

            break
        case 6:
            dia = 'Sabado'
            break
        default:
            dia = '[Error] Dia Inválido!'
            break
    }

    document.getElementById('dia').value = dia;
}