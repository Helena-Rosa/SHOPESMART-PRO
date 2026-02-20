const verificaV1 = document.getElementById('valor01')
const verificaV2 = document.getElementById('valor02')
const resultado = document.getElementById('resultado');


function calcularTotal () {
    const v1 = parseFloat(verificaV1.value);
    const v2 = parseFloat(verificaV2.value);


    if (isNaN(v1) ||isNaN(v2)) {
        resultado.style.display = 'flex';

        
        resultado.innerHTML = 

        `<ul>
        
        <li>Erro na Validação </li>
        <li>Por favor, informe valores numericos validos nos dois campos</li> 
        
        </ul>
        `
    } else {
        
        resultado.style.display = 'flex';

        
        resultado.innerHTML = 

        `<ul>
        
        <li>Preço: R$ <span> ${v1.toFixed(2)} </span> </li>
        <li>Quantidade: R$ <span>${v2.toFixed(2)}</span> </li> 
        <li>O valor total é: R$ <span>${(v1 * v2).toFixed(2)}</span> </li>
        
        </ul>
        `
   
    };
        

}

function desconto () {
    const v1 = parseFloat(verificaV1.value);
    const v2 = parseFloat(verificaV2.value);


    if (isNaN(v1) ||isNaN(v2)) {
        resultado.style.display = 'flex';

        
        resultado.innerHTML = 

        `<ul>
        
        <li>Erro na Validação </li>
        <li>Por favor, informe valores numericos validos nos dois campos</li> 
        
        </ul>
        `

    } else {
        
        resultado.style.display = 'flex';

        
        resultado.innerHTML = 

        `<ul>
        
        <li>Preço: R$ <span> ${v1.toFixed(2)} </span> </li>
        <li>Porcentagem de Desconto: <span>${v2}</span>% </li> 
        <li>O valor total é: R$ <span> ${ v1- ((v1 * v2) / 100).toFixed(2)}</span> </li>
        
        </ul>
        `
   
    };
        

}

function juros () {
    const v1 = parseFloat(verificaV1.value);
    const v2 = parseFloat(verificaV2.value);


    if (isNaN(v1) ||isNaN(v2)) {
        resultado.style.display = 'flex';

        
        resultado.innerHTML = 

        `<ul>
        
        <li>Erro na Validação </li>
        <li>Por favor, informe valores numericos validos nos dois campos</li> 
        
        </ul>
        `

    } else {
        
        resultado.style.display = 'flex';
        

        
        resultado.innerHTML = 

        `<ul>
        
        <li>Preço: R$ <span> ${v1.toFixed(2)} </span> </li>
        <li>Porcentagem de Juros: <span>${v2}</span>% </li> 
        <li>O valor total é: R$ <span>${ (v1+ (v1 * v2) / 100).toFixed(2)}</span> </li>
        
        </ul>
        `
   
    };
        
}


function comissao () {
    const v1 = parseFloat(verificaV1.value);
    const v2 = parseFloat(verificaV2.value);


    if (isNaN(v1) ||isNaN(v2)) {
        resultado.style.display = 'flex';

        
        resultado.innerHTML = 

        `<ul>
        
        <li>Erro na Validação </li>
        <li>Por favor, informe valores numericos validos nos dois campos</li> 
        
        </ul>
        `

    } else {
        
        resultado.style.display = 'flex';

        
        resultado.innerHTML = 

        `<ul>
        
        <li>Preço: R$ <span> ${v1.toFixed(2)} </span> </li>
        <li>Porcentagem de comissão: <span>${v2}</span>% </li> 
        <li>A comissao recebida foi de: R$ <span>${(v1*v2/100).toFixed(2)}</span> </li>
        
        </ul>
        `
   
    };
}

function lucro () {
    const v1 = parseFloat(verificaV1.value);
    const v2 = parseFloat(verificaV2.value);


    if (isNaN(v1) ||isNaN(v2)) {
        resultado.style.display = 'flex';

        
        resultado.innerHTML = 

        `<ul>
        
        <li>Erro na Validação </li>
        <li>Por favor, informe valores numericos validos nos dois campos</li> 
        
        </ul>
        `

    } else {
        
        resultado.style.display = 'flex';

        
        resultado.innerHTML = 

        `<ul>
        
        <li>Preço: R$ <span> ${v1.toFixed(2)} </span> </li>
        <li>Custo de aquisição: R$ <span>${v2.toFixed(2)}</span> </li> 
        <li>Luro: R$ <span>${(v1-v2).toFixed(2)}</span> </li>
        
        </ul>
        `
   
    };
        

}





function limpar () {
    //esconder o container de resultado
    resultado.style.display = 'none';
    // limpar os valors digitados nos campos 
    verificaV1.value = '';
    verificaV2.value = '';
    verificaV1.focus();
};