const form = document.getElementById("form-atividade")
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado" />'
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digita a média para ser aprovado"))

let linhas = ""

form.addEventListener("submit", function(e) {
    e.preventDefault()

    adcionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
})

function adcionaLinha() {
    let inputNomeAtividade = document.getElementById("nome-atividade")
    let inputNotaAtividade = document.getElementById("nota-atividade")

    const nomeAtividade = inputNomeAtividade.value.toLowerCase()

    if (atividades.includes(nomeAtividade)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
    } else {
    atividades.push(nomeAtividade)
    notas.push(parseFloat(inputNotaAtividade.value))

    let linha = "<tr>"
    linha += `<td>${inputNomeAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
    linha += "</tr>"
    linhas += linha
    }
    
    
    inputNomeAtividade.value = ""
    inputNotaAtividade.value = ""
}

function atualizaTabela() {
    const corpoTabela = document.querySelector("tbody")
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal()

    document.getElementById("media-final-valor").innerHTML = mediaFinal.toFixed(2)
    document.getElementById("media-fianl-resultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}

function calculaMediaFinal(){
    let somaDasNotas = 0 

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length
}