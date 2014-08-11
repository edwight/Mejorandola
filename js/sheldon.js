
var piedra = 0;
var papel = 1; 
var tijera = 2;
var lagarto = 3;
var spock = 4;
var opciones = ["piedra","papel","tijera", "lagarto", "spock"];
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

	opcionMaquina = aleatorio(0, 4);
	opcionUsuario=prompt("escoje una opcion " + "\n" + "0 piedra" + "\n" + "1 papel" + "\n" + "2 tijera"+ "\n" + "3 lagarto" + "\n" + "4 spock",0);

	//si el jugador escoje piedra
	if (opciones[opcionUsuario]==opciones[piedra]){ 
		if(opciones[opcionMaquina]==opciones[piedra]){
			alert("Empate: tu: "+ opciones[opcionUsuario]+ " empata con "+ "js: "+ opciones[opcionMaquina]);
		}
		else if(opciones[opcionMaquina]==opciones[papel]){
			alert("Perdistes: tu: "+ opciones[opcionUsuario]+ " mata a "+ "js: "+ opciones[opcionMaquina]);
		}
		else if(opciones[opcionMaquina]==opciones[tijera]){
		 	alert("Ganastes: tu: "+ opciones[opcionUsuario]+ " aplasta a "+ "js: "+ opciones[opcionMaquina]);
		 }
		 else if(opciones[opcionMaquina]==opciones[lagarto]){
		 	alert("Ganastes: tu: "+ opciones[opcionUsuario]+ " aplasta a "+  opciones[opcionMaquina]);
		 }
		 else if(opciones[opcionMaquina]==opciones[spock]){
		 	alert("Prediste: tu: "+ opciones[opcionUsuario]+ " es vaporizada por  "+ opciones[opcionMaquina]);
		 }
	}
	//si el jugador escoje papel 
	else if (opciones[opcionUsuario]==opciones[papel]){ 
		if(opciones[opcionMaquina]==opciones[piedra]){
			alert("Ganastes: tu: "+ opciones[opcionUsuario]+ " cubra a "+  opciones[opcionMaquina]);
		}
		else if(opciones[opcionMaquina]==opciones[papel]){
			alert("Empate: tu: "+ opciones[opcionUsuario]+ " empata con "+  opciones[opcionMaquina]);
		}
		else if(opciones[opcionMaquina]==opciones[tijera]){
		 	alert("Perdistes: tu "+ opciones[opcionUsuario]+ " es cortado por "+ opciones[opcionMaquina]);
		 }
		else if(opciones[opcionMaquina]==opciones[lagarto]){
		 	alert("Perdistes: tu "+ opciones[opcionUsuario]+ " es comido por el "+  opciones[opcionMaquina]);
		 }
		else if(opciones[opcionMaquina]==opciones[spock]){
		 	alert("Ganastes: tu "+ opciones[opcionUsuario]+ " refuta a "+ opciones[opcionMaquina]);
		 }
	}
	//si el jugador escoje tijera
	else if (opciones[opcionUsuario]==opciones[tijera]){ 
		if(opciones[opcionMaquina]==opciones[piedra]){
			alert("Perdistes: tu: "+ opciones[opcionUsuario]+ " aplasta a "+  opciones[opcionMaquina]);
		}
		else if(opciones[opcionMaquina]==opciones[papel]){
			alert("Ganastes: tu: "+ opciones[opcionUsuario]+ " corta al "+  opciones[opcionMaquina]);
		}
		else if(opciones[opcionMaquina]==opciones[tijera]){
		 	alert("Empate: tu: "+ opciones[opcionUsuario]+ " empata con " + opciones[opcionMaquina]);
		 }
		 else if(opciones[opcionMaquina]==opciones[lagarto]){
		 	alert("Ganastes: tu: "+ opciones[opcionUsuario]+ " decapitan a " + opciones[opcionMaquina]);
		 }
		 else if(opciones[opcionMaquina]==opciones[spock]){
		 	alert("Perdistes: tu: "+ opciones[opcionUsuario]+ " destroza a la " + opciones[opcionMaquina]);
		 }
	}
	//si el jugador escoje lagarto
	else if (opciones[opcionUsuario]==opciones[lagarto]){ 
		if(opciones[opcionMaquina]==opciones[piedra]){
			alert("Perdistes: tu: "+ opciones[opcionUsuario]+ " es aplastado por "+  opciones[opcionMaquina]);
		}
		else if(opciones[opcionMaquina]==opciones[papel]){
			alert("Ganastes: tu: "+ opciones[opcionUsuario]+ " se come al "+ opciones[opcionMaquina]);
		}
		else if(opciones[opcionMaquina]==opciones[tijera]){
		 	alert("Perdistes: tu: "+ opciones[opcionUsuario]+ " es cortado por " + opciones[opcionMaquina]);
		 }
		 else if(opciones[opcionMaquina]==opciones[lagarto]){
		 	alert("Empate: tu: "+ opciones[opcionUsuario]+ " empata con " + opciones[opcionMaquina]);
		 }
		 else if(opciones[opcionMaquina]==opciones[spock]){
		 	alert("Empate: tu: "+ opciones[opcionUsuario]+ " envenena a " + opciones[opcionMaquina]);
		 }
	}
		//si el jugador escoje spock
	else if (opciones[opcionUsuario]==opciones[spock]){ 
		if(opciones[opcionMaquina]==opciones[piedra]){
			alert("Ganastes: tu: "+ opciones[opcionUsuario]+ " vaporiza a la "+  opciones[opcionMaquina]);
		}
		else if(opciones[opcionMaquina]==opciones[papel]){
			alert("Perdistes: tu: "+ opciones[opcionUsuario]+ " es refutado por "+ opciones[opcionMaquina]);
		}
		else if(opciones[opcionMaquina]==opciones[tijera]){
		 	alert("Ganastes: tu: "+ opciones[opcionUsuario]+ " destroza " + opciones[opcionMaquina]);
		 }
		 else if(opciones[opcionMaquina]==opciones[lagarto]){
		 	alert("Perdistes: tu: "+ opciones[opcionUsuario]+ " es envenenado por " + opciones[opcionMaquina]);
		 }
		 else if(opciones[opcionMaquina]==opciones[spock]){
		 	alert("Empate: tu: "+ opciones[opcionUsuario]+ " empata com " + opciones[opcionMaquina]);
		 }
	}
		 
	else if (opcionUsuario>2){
		alert("opcion invalida");
	}

	nuevoIntento =prompt("Desea Salir: \n 0-Si  \n No",1);
}