const form = document.querySelector('#formulario');

form.addEventListener('submit' , function(e){
    e.preventDefault();
    const peso = document.getElementById('peso');
    const altura= document.getElementById('altura')
    let PegaValorPeso= peso.value
    let PegaValorAltura= altura.value
    const valorPeso = PegaValorPeso.replace("," , ".")
    const valorAltura = PegaValorAltura.replace("," , ".")
    let valorIMC= valorPeso /valorAltura**2;

    if(valorIMC<18.5){
        abaixo(valorIMC.toFixed(2))
    }
    if(valorIMC >=18.5){
        normal(valorIMC.toFixed(2))
    }
    if(valorIMC>=25){
        sobrepeso(valorIMC.toFixed(2))
    }

    if(valorIMC>=30){
        obesidade1(valorIMC.toFixed(2))
    }

    if(valorIMC>=35){
        obesidade2(valorIMC.toFixed(2))
    }

    if(valorIMC>=40){
        obesidade3(valorIMC.toFixed(2))
    }
    if(!valorIMC || valorAltura == 0 || valorPeso == 0 ){
        invalido()
    }
    if( valorAltura == 0 ){
        faltaAltura()
    }
    if(valorPeso == 0 ){
        faltaPeso()
    }
  
});
    

function abaixo(msg){
    const abaixo = document.querySelector('#resultado');
    const p = document.querySelector('#escrito')
    abaixo.innerHTML=`<p class="bad">Procure um nutricionista , você se encontra abaixo do peso ideal , seu IMC é o seguinte : ${msg}</p>`;
}

function normal(msg){
    const normal = document.querySelector('#resultado');
    normal.innerHTML=`<p class="good">Tudo ok ! você se encontra no peso ideal , seu IMC é o seguinte :${msg}</p>`;
}

function sobrepeso(msg){
    const sobrepeso = document.querySelector('#resultado');
    sobrepeso.innerHTML=`<p class="bad">Você se encontra acima do peso ideal , procure um nutricionista , seu IMC é o seguinte : ${msg}</p>`;
}

function obesidade1(msg){
    const obesidade1 = document.querySelector('#resultado');
    obesidade1.innerHTML=`<p class="bad">Procure um nutricionista , você se encontra com obesidade de nivel 1 , seu IMC :${msg}</p>`;
}

function obesidade2(msg){
    const obesidade2 = document.querySelector('#resultado');
    obesidade2.innerHTML=`<p class="bad">Procure um nutricionista , você se encontra com obesidade de nivel 2 , seu IMC :${msg}</p>`;
}

function obesidade3(msg){
    const obesidade3 = document.querySelector('#resultado');
    obesidade3.innerHTML=`<p class="bad">Procure um nutricionista , você se encontra com obesidade de nivel 3 , seu IMC : ${msg}</p>`;
}

function invalido(){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML=`<p class="bad">O valor digitado é invalido</p>`;
}

function faltaPeso(){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML=`<p class="bad">Você se esqueceu de digitar seu peso !! </p>`;
}

function faltaAltura(){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML=`<p class="bad">Você se esqueceu de digitar sua altura !!</p>`;
}



