const fs = require('fs');

require("colors");

const creaArchivo  = async (base, listar, hasta) => {
    try {
        
        let salida = '', consolola = '';

        salida = salida + '==========================\n';
        salida = salida + `        Tabla del ${base}\n`;
        salida = salida + '==========================\n';

        consolola = consolola + '==========================\n'.underline;
        consolola = consolola + `        Tabla del ${base}\n`.bgMagenta;
        consolola = consolola + '==========================\n'.underline;

        for (let inc = 1; inc <= hasta; inc++) {
            salida += `${base} X ${inc} = ${base * inc}\n`;
            consolola += `${base} X ${inc} = ${base * inc}\n`.bgCyan;
        }

        (listar == true)
            ?console.log(consolola)
            :'';

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        return (`tabla-${base}.txt`);
    } catch (error) {
        throw `Error al crear un archivo`;
    }


    //if (err) throw err;
    //console.log(`tabla-${base}.txt creada`);
};

module.exports = {
    creaArchivo
}