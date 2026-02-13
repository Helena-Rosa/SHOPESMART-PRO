function calcularTotal () {

    const verificaV1 = document.getElementById('valor01')
    console.log(verificaV1);

    const verificaV2 = document.getElementById('valor02')
    console.log(verificaV2);


    if (verificaV1 === '' || verificaV2 == '') {
        alert ("Valor 01 ou Valor 02 em branco, digite um numero");

    } else {
        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
        document.getElementById('resultado').style.disply = 'flex';

        const resultado = document.getElementById('resultado');
        resultado.innerHTML = 

        `<ul>
        
        <li>Preco: <span> ${v1} </span> </li>
        <li>Quantidade: <span>${v2}</span> </li> 
        <li>O valor total é: ${v1} * ${v2} = <span>${v1 * v2}</span> </li>
        
        </ul>
        `
   
    };
        

}



function desconto () {
    const verificaV1 = document.getElementById('valor01')
    console.log(verificaV1);

    const verificaV2 = document.getElementById('valor02')
    console.log(verificaV2);


    if (verificaV1 === '' || verificaV2 == '') {
        alert ("Valor 01 ou Valor 02 em branco, digite um numero");

    } else {
        let v1 = parseFloat(document.getElementById('valor01').value);
        let v2 = parseFloat(document.getElementById('valor02').value);
        document.getElementById('resultado').style.disply = 'flex';

        const resultado = document.getElementById('resultado');
        resultado.innerHTML = 

        `<ul>
        
        <li> Volor: <span> ${v1} </span> </li>
        <li> Desconto: <span>${v2}</span> </li>     
        <li>O resultado da operação é = <span> ${ v1- ((v1 * v2) / 100)}</span> </li>
        </ul>
        `
   
    };

}















function limpar () {
    //esconder o container de resultado
    document.getElementById ('resultado').style.display = 'none'
    // limpar os valors digitados nos campos 
    document.getElementById('valor01').value = '';
    document.getElementById('valor02').value = '';


};