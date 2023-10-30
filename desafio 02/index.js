let amountWins = 1000
let amountLoss = 2

function main() {
    let winsBalance = getWinsBalance(amountWins, amountLoss)
    let level = getLevel(winsBalance)
    showMessage(winsBalance, level)
}

function getWinsBalance(amountWins, amountLoss) {
    return amountWins - amountLoss
}

function getLevel(winsBalance) {
    let level = ""

    if (winsBalance <= 10) {
        level = "Ferro"
    } else if (winsBalance >= 11 && winsBalance <=20) {
        level = "Bronze"
    } else if (winsBalance >= 21 && winsBalance <=50) {
        level = "Prata"
    } else if (winsBalance >= 51 && winsBalance <=80) {
        level = "Ouro"
    } else if (winsBalance >= 81 && winsBalance <=90) {
        level = "Diamante"
    } else if (winsBalance >= 91 && winsBalance <= 100) {
        level = "Lendário"
    } else {
        level = "Imortal"
    }
    
    return level
}

function showMessage(winsBalance, level) {
    console.log(`O Herói tem saldo de ${winsBalance} e está no nível de ${level}`)
}

main()