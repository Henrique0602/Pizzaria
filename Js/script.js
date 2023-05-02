

//Soma das pizzas//

let somaMussarela = 0;
let somaMista=0;
let somaCalabresa=0;
let somaChocolate=0;
let somaFrangoComCatupiry=0

//Venda das pizzas//
let vendaMussarela = 0.00;
let vendaMista=0.00;
let vendaCalabresa=0.00;
let vendaChocolate=0.00;
let vendaFrangoComCatupiry=0.00;

//variavel receber instrução html//

let btnVendas =  document.getElementById('Vendas');
let btnEstorno = document.getElementById ('Estorno');
let btnPlanilha = document.getElementById ('export');

//Eventos

btnVendas.addEventListener('click',venda,false);
btnEstorno.addEventListener('click',estorno,false);
btnPlanilha.addEventListener('click',planilha,false);

//function

function venda(e)
{
    if(document.getElementById('Mussarela').checked)
    {
        somaMussarela = somaMussarela + 1;
        vendaMussarela = vendaMussarela + 25.00;
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML=vendaMussarela.toFixed(2);

    }else if(document.getElementById('Mista').checked)
    {
        somaMista=somaMista + 1
        vendaMista = vendaMista + 25.00
        document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML=vendaMista.toFixed(2);

    } else if(document.getElementById('Calabresa').checked)
    {
        somaCalabresa=somaCalabresa + 1
        vendaCalabresa=vendaCalabresa + 25.00
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML=   vendaCalabresa.toFixed(2);

    } else if(document.getElementById('Chocolate') . checked)
    {
        somaChocolate = somaChocolate + 1
        vendaChocolate = vendaChocolate + 25.00
        document.getElementById('resultadoChocolate').innerHTML = somaChocolate;
        document.getElementById('vendaChocolate').innerHTML=vendaChocolate.toFixed(2);

    } else if(document.getElementById('Frango com catupiry').checked)
    {
        somaFrangoComCatupiry = somaFrangoComCatupiry + 1
        vendaFrangoComCatupiry = vendaFrangoComCatupiry + 25.00
        document.getElementById('resultadoFrango').innerHTML = somaFrangoComCatupiry;
        document.getElementById('vendaFrango').innerHTML=vendaFrangoComCatupiry.toFixed(2);
    }
}



function estorno(e)
{
    if(document.getElementById('Mussarela').checked)
    {
        somaMussarela = somaMussarela - 1;
        vendaMussarela = vendaMussarela - 25.00;
        if(somaMussarela <=0){
            somaMussarela=0
            vendaMussarela=0.00
        }
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML=vendaMussarela.toFixed(2);

    }else if(document.getElementById('Mista').checked)
    {
        somaMista=somaMista - 1
        vendaMista = vendaMista - 25.00
        if(somaMista <=0){
            somaMista=0
            vendaMista=0.00
        }
        document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML=vendaMista.toFixed(2);

    } else if(document.getElementById('Calabresa').checked)
    {
        somaCalabresa=somaCalabresa -1
        vendaCalabresa=vendaCalabresa -25.00
        if(somaCalabresa <=0){
            somaCalabresa=0
            vendaCalabresa=0.00
        }
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML=   vendaCalabresa.toFixed(2);

    } else if(document.getElementById('Chocolate') . checked)


    {
        somaChocolate = somaChocolate - 1
        vendaChocolate = vendaChocolate - 25.00
        if(somaChocolate <=0){
            somaChocolate=0
            vendaChocolate=0.00
        }
        document.getElementById('resultadoChocolate').innerHTML = somaChocolate;
        document.getElementById('vendaChocolate').innerHTML=vendaChocolate.toFixed(2);

    } else if(document.getElementById('Frango com catupiry').checked)
    {
        somaFrangoComCatupiry = somaFrangoComCatupiry - 1
        vendaFrangoComCatupiry = vendaFrangoComCatupiry - 25.00
        if(somaFrangoComCatupiry <=0){
            somaFrangoComCatupiry=0
            vendaFrangoComCatupiry=0.00
        }
        document.getElementById('resultadoFrango').innerHTML = somaFrangoComCatupiry;
        document.getElementById('vendaFrango').innerHTML=vendaFrangoComCatupiry.toFixed(2);
    }
}

function planilha(e)
{
    TableToExcel.convert(document.getElementById('table'));
}