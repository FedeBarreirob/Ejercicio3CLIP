





function adivinanza(){


var numero = document.getElementById("respuesta");
var intentos = 0;
var correcto = 300000

for(intentos=4;intentos >0 ;intentos--){


    if(intentos==4 ){
        numero = parseInt(prompt("¿A que velocidad en km/s viaja aproximadamente la luz en el espacio?, Intentos restantes : " +intentos))
    }
    if(intentos==3 ){
        numero = parseInt(prompt("¿A que velocidad en km/s viaja aproximadamente la luz en el espacio?, Intentos restantes : " +intentos))
    }
     if(intentos==2){
        numero = parseInt(prompt("¿A que velocidad en km/s viaja aproximadamente la luz en el espacio? Pista: Es un numero de seis cifras. Intentos restantes : " +intentos))
    }
    if(intentos==1){
        numero = parseInt(prompt("¿A que velocidad en km/s viaja aproximadamente la luz en el espacio? Pista: El numero se encuentra entre 200000 y 400000. Intentos restantes : " +intentos))
    }

    if(numero!=correcto){
        
        alert("Es incorrecto")
    }
    if(numero==correcto){
        alert("Es correcto, ganaste!")
        break;
    }
}

}









