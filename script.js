const botton = document.querySelector('.botao-principal')
function conversor() {
    const valor = document.querySelector('.valor-digitado').value
    const valorAconverter = document.querySelector('.moeda-para-converter')
    const valorConvertido = document.querySelector('.moeda-convertida')
    const dolar = 6.15
    const conversao = valor / dolar

    valorAconverter.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
        valor,
    )
    valorConvertido.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
        conversao,
    )

}


botton.addEventListener('click', conversor)

