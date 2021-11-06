let nota = parseInt(prompt("Ingresar una nota: "));

while(nota !=0){
    alert("El usuario ingreso: " + nota);

    nota = prompt("Ingresar otra nota: ");

    console.log("Las notas ingresadas son: " + nota)

    break;
    
}