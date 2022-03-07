
function calcular() {
    var altura = document.getElementById('altura1')
    var peso = document.querySelector('input#peso1')
    var res_imc = document.getElementById('res_imc')
    var peso2 = Number(peso.value)
    var altura2 = Number(altura.value)
    var imc = peso2 / (altura2*altura2)
  
    
    if(pesovaz = peso2 == 0 && peso2 == '' ){
       alert(`
       Vamos Recomeçar! 
       Insira um numero válido`)
    }else if (alturavaz = altura2 == 0 && peso2 == ''){
        alert(`
        Vamos Recomeçar! 
        Insira um numero válido`)
    }
    
    
if (imc<18.5){
   res_imc.innerHTML = (`Você está abaixo do peso ideal`)
   acomp.innerHTML = `Não gostou do resultado? Podemos ajudar. Deixe seu e-mail abaixo que lhe encaminharemos para nossos profissionais.`
}else if (imc>=18.5 && imc<=24.9){
    res_imc.innerHTML =(`Você está no peso ideal`)
}else if (imc>=25 && imc<29.9){
    res_imc.innerHTML =(`Você está no Sobrepeso! Pratique Exercícios`)
}else if (imc>=30 && imc<34.9){
    res_imc.innerHTML =(`Atenção! Você está na Obesidade Grau I, consulte um médico!`)
    acomp.innerHTML = `Não gostou do resultado? Podemos ajudar. Deixe seu e-mail abaixo que lhe encaminharemos para nossos profissionais.`
}else if (imc>=35 && imc<=40){
    res_imc.innerHTML =(`Cuidado! Você está na Obesidade Grau II, isso é muito perigoso para sua saúde. Procure um médico`)
    acomp.innerHTML = `Não gostou do resultado? Podemos ajudar. Deixe seu e-mail abaixo que lhe encaminharemos para nossos profissionais.`
}else if (imc>40){
    res_imc.innerHTML =(`Cuidado! Você já está na Obesidade Mórbida! Procure um Médico urgentemente!`)
    acomp.innerHTML = `Não gostou do resultado? Podemos ajudar. Deixe seu e-mail abaixo que lhe encaminharemos para nossos profissionais.`
}}

res_imc.innerHTML=`Seu imc é igual á: ${imc.toFixed(2)}`
let email = document.getElementById("receba")

function queronews(email){
    if (email == ''){ 
    return alert('Insira um email válido')
    } else {
        return alert('Obrigado')
    }
    
}



        
    /*    
       window.confirm ('Você gostaria de descobrir seu IMC? Se sim clique em OK')
       var nome = window.prompt ('Olá, como você se chama?')
       var peso =  window.prompt('Quanto voce pesa?')
       var altura = window.prompt('Qual sua altura?')
       var imc = peso / (altura*altura)
       document.write(`Seu imc é : ${imc.toFixed(2)} <br/>` )
    */
       
 /* CONFIRMAR A FUNCAO IF DO JAVASCRIP
       document.write (imc<=18.5 ? 'Você está abaixo do peso' : ' Você esta saudavel')  TENTAR TIRAR A FUNCAO TERNARIO E POR O IF*/ 
    