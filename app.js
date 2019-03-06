//requireds
//required de node.js
//const fs = require('fs');
//required externs expancions externs de tercers
///const fs = require('express');
//required propis creats en el projecte
///const fs = require('./fs');

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');


// //const argv = require('yargs')
// //     .command('listar', 'Imprime en consola la tabla de multiplicar', {
// //         base: {
// //             demand: true,
// //             alias: 'b'
// //         },
// //         limite: {
// //             alias: 'l',
// //             default: 10
// //         }
// //     })
// //     .command('crear', 'Grava en fixerola tabla de multiplicar', {
// //         base: {
// //             demand: true,
// //             alias: 'b'
// //         },
// //         limite: {
// //             alias: 'l',
// //             default: 10
// //         }
// //     })
// //     .help()
// //     .argv;


const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');


//console.log(argv);

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(data => console.log(`${data}`))
            .catch(e => console.log(e));
        console.log('listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado :`, colors.green(archivo)))
            .catch(e => console.log(e));
        console.log('crear');
        break;

    default:
        console.log('comando no reconocido');



}
//let base = '5';

//console.log(process.argv);
// let argv = process.argv;


//console.log(`limite ${argv.limite}`);

// let parametro = argv[2];
// let base = parametro.split('=')[1];

//console.log(base);
//console.log(multiplicar);

// let data = '';

// // 2 * 1 = 2
// // 2 * 2 = 4
// // 2 * 3 = 6
// // ...
// for (let i = 1; i <= 10; i++) {
//     data += `${base} * ${i} = ${base * i}\n`;
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El fitxer tabla-${base}.txt ha sigut creat!`);
// });

// fs.readFile(`tablas/tabla-${base}.txt`, 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));