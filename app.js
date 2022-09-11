const { creaArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");
console.clear();

//console.log(process.argv);
//console.log(argv);

creaArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.bgRed, 'creado'.bgGreen))
    .catch(err => console.log(err));

//const [,,arg3 = 'base=5'] = process.argv;
//const [,base=5] = arg3.split('=');
//console.log(base);

//const base = 1;