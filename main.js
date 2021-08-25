let numero = 0 



for (i = 1; i <= 100; i++){  
    numero++
    if((numero %5 == 0) && (numero %3 == 0)) {
        console.log(numero + " FizzBuzz"); 
    } else if (numero %3 == 0){
        console.log(numero + " Fizz");
    } else if (numero %5 == 0){
        console.log(numero + " Buzz");
    } else {
        console.log(numero);
    }
}