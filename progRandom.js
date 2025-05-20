let res = document.getElementById('res')
console.log(res)

function fazerSorteio(min, max) {
    return (Math.ceil(Math.random() * (max - min) + min))
}

function gerarNum() {
    let qtde = Number(document.getElementById('qtde').value)
    console.log(qtde)
    let max = Number(document.getElementById('max').value)
    console.log(max)
    let min = Number(document.getElementById('min').value)
    console.log(min)

    let valor = 0
    res.innerHTML = ``
    let soma = 0
    let media = 0.0

    if ((min < 0 || max >= 100) && (qtde < 0 || qtde > 10)) {
        res.innerHTML = ` Valores inválidos! Digite os valores novamente <br> `
        res.innerHTML = ` O maior valor é 1, e o menor é 100 <br> `
    } else {
        for (let i = 0; i < qtde; i++) {
            valor = fazerSorteio(min, max)
            soma += valor
            res.innerHTML += ` O número gerado foi ➡ ${valor} <br>`
        }
        media = soma / qtde
        res.innerHTML += ` A soma dos números gerados foi ➡ ${soma} <br>`
        res.innerHTML += ` A media dos números gerados foi ➡ ${media} <br>`
    }
}