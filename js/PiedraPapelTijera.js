
var piedra = 0;
var papel = 1; 
var tijera = 2;
var opciones = ["piedra","papel","tijera"];
var opcionUsuario;
var opcionMaquina;
var nuevoIntento;
//funcion que crea un numero aleatorio entre un rango minimo y un maximo
function aleatorio(minimo, maximo){
	var Numero= Math.floor(Math.random() * (maximo - minimo + 1) + minimo );
	return Numero;
}
//bucle infinito mientra la condicion sea diferente de Cero
while (nuevoIntento!=0){

	opcionMaquina = aleatorio(0, 2);
	opcionUsuario=prompt("escoje una opcion " + "\n" + "0 piedra" + "\n" + "1 papel" + "\n" + "2 tijera",0);

	//si el jugador escoje piedra
	if (opciones[opcionUsuario]==opciones[piedra]){ 
		if(opciones[opcionMaquina]==opciones[piedra]){
			alert("Empate: tu: "+ opciones[opcionUsuario]+ " empata con "+ "js: "+ opciones[opcionMaquina]);
		}
		else if(opciones[opcionMaquina]==opciones[papel]){
			alert("Perdistes: tu: "+ opciones[opcionUsuario]+ " mata a "+ "js: "+ opciones[opcionMaquina]);
		}
		else if(opciones[opcionMaquina]==opciones[tijera]){
		 	alert("Ganastes: tu: "+ opciones[opcionUsuario]+ " mata a "+ "js: "+ opciones[opcionMaquina]);
		 }
	}
	//si el jugador escoje papel 
	else if (opciones[opcionUsuario]==opciones[papel]){ 
		if(opciones[opcionMaquina]==opciones[piedra]){
			alert("Ganastes: tu: "+ opciones[opcionUsuario]+ " mata a "+ "js: "+ opciones[opcionMaquina]);
		}
		else if(opciones[opcionMaquina]==opciones[papel]){
			alert("Empate: tu: "+ opciones[opcionUsuario]+ " empata con "+ "js: "+ opciones[opcionMaquina]);
		}
		else if(opciones[opcionMaquina]==opciones[tijera]){
		 	alert("Perdistes: tu "+ opciones[opcionUsuario]+ " mata a "+ "js: "+ opciones[opcionMaquina]);
		 }
	}
	//si el jugador escoje tijera
	else if (opciones[opcionUsuario]==opciones[tijera]){ 
		if(opciones[opcionMaquina]==opciones[piedra]){
			alert("Perdistes: tu: "+ opciones[opcionUsuario]+ " mata a "+ "js: "+ opciones[opcionMaquina]);
		}
		else if(opciones[opcionMaquina]==opciones[papel]){
			alert("Ganastes: tu: "+ opciones[opcionUsuario]+ " mata a "+ "js: "+ opciones[opcionMaquina]);
		}
		else if(opciones[opcionMaquina]==opciones[tijera]){
		 	alert("Empate: tu: "+ opciones[opcionUsuario]+ " empata con " + " js: "+ opciones[opcionMaquina]);
		 }
	}
		 
	else if (opcionUsuario>2){
		alert("opcion invalida");
	}

	nuevoIntento =prompt("Desea Salir: \n 0-Si  \n No",1);
}