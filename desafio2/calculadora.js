const readline = require("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite um numero", (answer1) => {
    rl.question("Digite outro número", (answer2) => {
        console.log(`O número que você digitou foi ${answer2}`)
    })
    
    console.log(`O número que você digitou foi ${answer1}`)
    rl.close()
    
    
    
    
    
    
})
