const botton = document.querySelector('.botao-principal')
const seletorDemoeda = document.querySelector('.seletor-de-moeda')

function conversor() {
    const valor = document.querySelector('.valor-digitado').value
    const valorAconverter = document.querySelector('.moeda-para-converter')
    const valorConvertido = document.querySelector('.moeda-convertida')

    console.log(seletorDemoeda.value)

    const dolar = 6.15
    const euro = 6.37
     

    if(seletorDemoeda.value == 'dolar'){
        valorConvertido.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
            valor / dolar,
        )
    }

    if(seletorDemoeda.value == 'euro'){
        valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
            valor / euro,
        )
    }

    valorAconverter.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
        valor,
    )
    

}


botton.addEventListener('click', conversor)

