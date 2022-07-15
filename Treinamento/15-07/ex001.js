function teste(param1,param2){
    let x = param1
    let y = param2
    let z = 0

    z = x % y

    return z
}

var x = input("digite um valor")
var y = input("digite outro valor")

var z = teste(x,y);
console.log(z)