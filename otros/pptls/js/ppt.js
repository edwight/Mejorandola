
function aleatorio(minimo, maximo)
{
	var random = Math.floor(Math.random()*(maximo - minimo + 1)+ minimo);
	return random;
}




function pedir(x)

{
var opcionUsuario=x;
var opcionSistema = aleatorio(0,4);
var pptls = [15,8,16,14,20];
var opcionMaquina = pptls[opcionSistema];
var resultado = (opcionUsuario-opcionMaquina);
var posibilidades = [1,4,6,-2,5,-12,8,-7,-1,-4,-6,2,-5,12,-8,7];
var numero = posibilidades.indexOf(resultado);
    document.getElementById("a15").className = "usuario"
	document.getElementById("a8").className = "usuario"
	document.getElementById("a16").className = "usuario"
	document.getElementById("a14").className = "usuario"
		document.getElementById("a20").className = "usuario"

if (resultado == 0)
{
	document.getElementById('empate').style.display="block"
	document.getElementById('ganaste').style.display="none"
	document.getElementById('perdiste').style.display="none"
}
else if (numero<=7)
{
document.getElementById('empate').style.display="none"	
document.getElementById('ganaste').style.display="block"
document.getElementById('perdiste').style.display="none"

}
else if (numero>7)
{
document.getElementById('empate').style.display="none"	
document.getElementById('ganaste').style.display="none"
document.getElementById('perdiste').style.display="block"
}
var arma1 = ("a"+opcionUsuario);
var arma2 = ("a"+opcionMaquina);

	document.getElementById(arma1).className = "seleccionusuario"
	document.getElementById(arma2).className = "seleccionmaquina"
}


