var idade = 67
console.log(`Voce tem ${idade} anos`)
if (idade < 16) {
    console.log('Nao vota')
} else if (idade < 18 || idade > 65) {
        console.log('Voto opcional')
    } else {
        console.log('Voto obrigatorio')
}


var agora = new Date()
var hora = agora.getHours()
console.log(`Agora sao exatamemte ${hora} horas.`)
if (hora <= 4) {
    console.log('Boa Madrugada!')
} else if (hora <= 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa Noite!')
}