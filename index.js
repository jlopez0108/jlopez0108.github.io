var treasureLoc = Math.floor(Math.random() * 9)


var bombLoc = Math.floor(Math.random() * 9)


if(treasureLoc===bombLoc){
    bombLoc= Math.floor(Math.random() * 9)
}
console.log(treasureLoc, bombLoc)

var counter = 9

function treasure(location){
    counter = counter - 1
    document.getElementById("counter").innerHTML = `counter ${counter}`

    if(treasureLoc === location){
        document.getElementById("outcome").innerHTML = "YOU WIN &#x1f308"
    }
    else if(bombLoc === location){
        document.getElementById("outcome").innerHTML = "YOU LOSE &#x2620"
    }
    else{
        document.getElementById(location).innerHTML = "☠️"
    }
}
