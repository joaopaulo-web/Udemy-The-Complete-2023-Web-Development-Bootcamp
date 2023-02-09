var randomNumber1 = Math.floor(Math.random() * 6) + 1 
// Variavel randomNumber1 vai ser igual ao numero aleatório de 1 a 6.

var randomDiceImage = "dice" + randomNumber1 + ".png" 
// A variavel randomDiceImage vai ser quem vai gerar o caminho das novas imagens. Ela vai ser igual a concatenação da string dice com a variavel de numero aleatorio mais .png. Resultando em "dice1.png ate dice6.png"

var randomImageSource = "images/" + randomDiceImage 
//É a variavel que vai ser necessaria para alterar o caminho COMPLETO das imagens. Ela é o resultado da concatenação de images + randomDiceImage. Que é a minha outra variável que gera novos arquivos de imgs.

var image1 = document.querySelectorAll("img")[0] 
// Essa variável é oq eu atribuo ao meu dado 1. Usando o querySelectorAll eu pego todas as tags IMG do código, e por ter mais de uma, me retorna uma string. O [0] diz que eu quero mudar APENAS o primeiro elemento img. Que nesse caso, é a minha imagem do player 1

image1.setAttribute("src", randomImageSource)
// Aqui eu digo que minha variável image1, que é a minha tag img do player1, vai mudar para a variável randomImageSource, substituindo o caminha da imagem por uma aleatoria, de acordo com a variavel randomDiceImage. O src, é o atributo que eu quero mudar. Ou seja, digo que o que esta em src, vai mudar para a variavel randomDiceSource, que é meu novo caminho. 

var randomNumber2 = Math.floor(Math.random() * 6) + 1
// Variável randomNumber2, vai ser um numero aleatorio entre 1 e 6

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"
// Variável randomImageSource2 vai ser o resultado da concatenação de images/dice + a variavel randomNumber2 + .png. Gerando assim meus novos caminhos para novas imagens. 

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)
// Nessa linha, digo que a minha img, que esta na posição 1, ou seja, a segunda posição, ou seja, a posição do meu player dois, a src dele ira mudar para a variável randomImageSource2



if (randomNumber1 > randomNumber2){
    document.querySelector(".container h1").innerHTML = "Player 1 Wins!"
}else if (randomNumber2 > randomNumber1){
    document.querySelector(".container h1").innerHTML = "Player 2 Wins!"
}else{
    document.querySelector(".container h1").innerHTML = "It's a Draw!"
    // Seleciono o meu h1, que esta dento da classe container, e digo que o html dentro dele, ira mudar de acordo com o resultado das variaveis randomNumber1 e randomNumber 2
}

//Aqui são as condicionais para mudar a texto principal do site. 
