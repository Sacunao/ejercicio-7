var numero;
numero=parseInt(prompt("Ingrese un número"));

if (numero % 2 != 0) {
	window.alert("Odd!");
} else if (numero % 2 == 0 && numero >= 2 && numero <=5){
	window.alert("Good");
} else if (numero % 2 == 0 && numero >= 6 && numero <=20){
	window.alert("Great");
} else if (numero % 2 == 0 && numero > 20 && numero <100){
	window.alert("Perfect");
} 