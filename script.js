//alert("hola mama jejjeje");
//var nombre ="edwar";
//var peso = prompt("cual es tu peso", "60");
//peso = parseInt(peso);
//peso_marte = (peso / 9.81)* 3.71;
//alert("tu peso en marte es " + peso_marte + "kg");
//alert(nombre + " "+"\n" + " "+ 28 + " años");
//var funcion = function(){
//	alert("hola "+ nombre + " "+ peso +" kl");
//}


//funcion()
var piedra = 0;
var papel = 1; 
var tijera = 2;
var opciones = ["piedra","papel","tijera"];
var opcionUsuario;
var opcionMaquina;
var nuevoIntento;
function aleatorio(minimo, maximo){
	var Numero= Math.floor(Math.random() * (maximo - minimo + 1) + minimo );
	return Numero;
}
while (nuevoIntento!=0){

	opcionMaquina = aleatorio(0, 2);
	opcionUsuario=prompt("escoje una opcion " + "\n" + "0 piedra" + "\n" + "1 papel" + "\n" + "2 tijera",0);
	opcionUsuario = parseInt(opcionUsuario);
	if (opciones[opcionUsuario]==opciones[opcionMaquina]){
		alert("empate: "+ opciones[opcionUsuario]+" vs "+opciones[opcionMaquina]);
	}
	else if ((opciones[opcionUsuario]==opciones[piedra] && opciones[opcionMaquina]==opciones[papel]) || (opciones[opcionUsuario]==opciones[papel] && opciones[opcionMaquina]== opciones[tijera])||(opciones[opcionUsuario]==opciones[tijera] && opciones[opcionMaquina]==opciones[piedra])){
		alert("perdistes: tu "+ opciones[opcionUsuario] +" maquina: "+ opciones[opcionMaquina]);
	}
	else if ((opciones[opcionUsuario]==opciones[piedra] && opciones[opcionMaquina]==opciones[tijera]) || (opciones[opcionUsuario]==opciones[papel] && opciones[opcionMaquina]==opciones[piedra])||(opciones[opcionUsuario]==opciones[tijera] && opciones[opcionMaquina]==opciones[papel])){
		alert("ganastes: tu "+ opciones[opcionUsuario]+ " maquina: "+ opciones[opcionMaquina]);
	}
	else if (opcionUsuario>2){
		alert("opcion invalida");
	}

	nuevoIntento =prompt("Desea Salir: \n 0-Si  \n No",1);
}