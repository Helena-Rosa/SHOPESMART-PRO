const verificaV1 = document.getElementById('valor01')
const verificaV2 = document.getElementById('valor02')
const resultado = document.getElementById('resultado');


function calcularTotal () {
    let v1 = parseFloat(verificaV1.value);
    let v2 = parseFloat(verificaV2.value);


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
        
        <li>Preco: <span> ${v1} </span> </li>
        <li>Quantidade: <span>${v2}</span> </li> 
        <li>O valor total é: <span>${v1 * v2}</span> </li>
        
        </ul>
        `
   
    };
        

}

function desconto () {
    let v1 = parseFloat(verificaV1.value);
    let v2 = parseFloat(verificaV2.value);


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
        
        <li>Preco: <span> ${v1} </span> </li>
        <li>Porcentagem de Desconto: <span>${v2}</span> </li> 
        <li>O valor total é: <span>${ v1- ((v1 * v2) / 100)}</span> </li>
        
        </ul>
        `
   
    };
        

}

function juros () {
    let v1 = parseFloat(verificaV1.value);
    let v2 = parseFloat(verificaV2.value);


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
        
        <li>Preco: <span> ${v1} </span> </li>
        <li>Porcentagem de Juros: <span>${v2}</span> </li> 
        <li>O valor total é: <span>${ v1+ ((v1 * v2) / 100)}</span> </li>
        
        </ul>
        `
   
    };
        
}


function comissao () {
    let v1 = parseFloat(verificaV1.value);
    let v2 = parseFloat(verificaV2.value);


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
        
         <li>Preco: <span> ${v1} </span> </li>
        <li>Porcentagem de comissão: <span>${v2}</span> </li> 
        <li>A comissao recebida foi de: <span>${(v1*v2/100)}</span> </li>
        
        </ul>
        `
   
    };
}

function lucro () {
    let v1 = parseFloat(verificaV1.value);
    let v2 = parseFloat(verificaV2.value);


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
        
        <li>Preco: <span> ${v1} </span> </li>
        <li>Custo de Produção: <span>${v2}</span> </li> 
        <li>O lucro gerado com essa venda foi de: <span>${v1-v2}</span> </li>
        
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