//required
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`El valor limite introducido --> ${base} -- ${limite} <-- no es un numero`);
            return;
        }
        console.log('=================='.green);
        console.log(`====tabla de ${base}====`.green);
        console.log('=================='.green);
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
            //console.log(data);

        }
        resolve(data);
        // fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        //     if (err) reject(err)
        //     else
        //         resolve(`tabla-${base}.txt`)
        // });
        // fs.readFile(`tablas/tabla-${base}.txt`, 'utf8', (err, data) => {
        //     if (err) throw err;
        //     console.log(data);
        // });

    });

}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido -->  ${base} -- ${limite} <-- no es un numero`);
            return;
        }
        let data = '';
        // 2 * 1 = 2
        // 2 * 2 = 4
        // 2 * 3 = 6
        // ...

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)

        });

        fs.readFile(`tablas/tabla-${base}-al-${limite}.txt`, 'utf8', (err, data) => {
            if (err) throw err;
            console.log(data);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}