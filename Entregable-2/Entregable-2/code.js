
/* constante de edad */    
const edadmayor = 18;
/* ingreso de edad mediante consola */ 
var edad = parseInt(prompt("que edad tiene?"));
/* condicional si edad ingresada es mayor a la constante */ 
if (edad >= edadmayor){
    alert ("sos mayor de edad, podes ingresar");
/* condicional si edad ingresada es menor a la constante */ 
}else if (edad < edadmayor){
    alert ("Sos menor de edad, no podes ingresar!");
/* condicional si edad ingresada es valida con respecto a la constante */ 
}else{
    alert ("Tiene que ingresar una edad valida");
}
