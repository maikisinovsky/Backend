const fs = require(`fs`)

let contenido = [71, 1, 2, 116, 3, 84, 4, 5, 81, 74, 6, 7, 8, 93, 68, 9, 104, 10, 65, 11, 136];

var cuento = ""; 

for (let i=0;  i<contenido.length; i++) {
    let parrafo = fs.readFileSync(`Cuento/parte`+contenido[i]+ `.txt`, 'utf8');

    cuento = cuento + parrafo + "\n";
}

fs.writeFileSync("Cuento_completo.txt", cuento); 



