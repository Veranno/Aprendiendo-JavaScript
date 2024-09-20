function puedeVotar(edad){
    if (edad >= 18) {
    return  "puede votar"
     } else {
       return "no puede votar"
    }
}
console.log (puedeVotar(25));
console.log (puedeVotar(7));