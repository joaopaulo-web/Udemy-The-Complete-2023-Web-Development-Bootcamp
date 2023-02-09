var randomNumber1 = Math.floor(Math.random() * 6) + 1

var randomDiceImage = "dice" + randomNumber1 + ".png"

var randomImageSource = "images/" + randomDiceImage

var image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src", randomImageSource)

// Imagem 1 Ok

var randomNumber2 = Math.floor(Math.random() * 6) + 1

var randomDiceImage2 = "dice" + randomNumber2 + ".png"

var randomDiceSource2 = "images/" + randomDiceImage2

var image2 = document.querySelectorAll("img")[1]

image2.setAttribute("src", randomDiceSource2)

//Imagem 2 Ok

if (randomNumber1 > randomNumber2){
    document.querySelector(".container h1").innerHTML = "🎉Player 1 Wins!"
} else if (randomNumber1 < randomNumber2){
    document.querySelector(".container h1").innerHTML = "🎉Player 2 Wins!"
}else{
    document.querySelector(".container h1").innerHTML = "Oh! It's a Draw!"
}

//Condicionais ok
