const sumar = (num1, num2)=>{
  return parseInt(num1) + parseInt(num2);
}

const restar = (num1, num2)=>{
    return parseInt(num1) - parseInt(num2);
}

const multiplicar = (num1, num2)=>{
    return parseInt(num1) * parseInt(num2);
}
const dividir = (num1, num2)=>{
    return parseInt(num1) / parseInt(num2);
}



alert("que operacion queres hacer?");
let operacion = prompt("1: sumar, 2: restar, 3: multiplicar, 4: dividir" );







if(operacion = 1){
   let numero1 = prompt("ingrese un numero a sumar ");
   let numero2 = prompt("ingrese el numero restante a sumar ");

   resultado = sumar(numero1,numero2);
   alert("el resultado es " + resultado);
}



if(operacion = 1){
    let numero1 = prompt("ingrese un numero a restar ");
    let numero2 = prompt("ingrese el numero restante a restar ");
 
    resultado = restar (numero1,numero2);
    alert("el resultado es " + resultado);
 }

 if(operacion = 1){
    let numero1 = prompt("ingrese un numero a multiplicar");
    let numero2 = prompt("ingrese el numero restante a multiplicar");
 
    resultado = multiplicar (numero1,numero2);
    alert("el resultado es " + resultado);
 }
 

 
 if(operacion = 1){
    let numero1 = prompt("ingrese un numero a dividir");
    let numero2 = prompt("ingrese el numero restante a dividir");
 
    resultado = dividir (numero1,numero2);
    alert("el resultado es " + resultado);
 
}


