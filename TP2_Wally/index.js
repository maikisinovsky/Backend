import { generarEspacio } from "./busqueda.js";


var lugar = "Hola Lu :)";


    let espacio = generarEspacio(100);  

    console.log(espacio)

    //manija 1
    for (let i =  0; i < espacio.length; i++) {

        if (espacio[i].startsWith('W')) {
            console.log(`${espacio[i]} en la posición ${i} comienza con W`)
        } 
    }

    //manija 2
    for(let i= 0; i<espacio.length; i++){
        if (espacio[i].includes('ll') || espacio[i].includes('Ll')) {
            console.log(`${espacio[i]} en la posición ${i} tiene "ll"`)
        }
    }

    //consigna base
    for (let i = 0; i < espacio.length; i++)  {
        if (espacio[i] === "Wally") {
            lugar = i;
            console.log("Wally está en la posición " + lugar);
            break; 
        }
    
    }



