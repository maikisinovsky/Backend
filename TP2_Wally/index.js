import { generarEspacio } from "./busqueda";

var encontrado = false;
var lugar = -1;

do {
    let gen = generarEspacio(100);  

    console.log(gen)

    for (let i = 0; i < gen.length; i++) 
        if (gen[i] === "Wally") {
            lugar = i;
            console.log("Wally está en la posición " + lugar);
            encontrado = true; 
        }
    

} while (encontrado == false);
