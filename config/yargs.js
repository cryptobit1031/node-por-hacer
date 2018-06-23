'use strict'

const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de una tarea por hacer'

    },        
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado la tarea'
    }      
}

const argv = require('yargs')
    .command('crear','Crea un elemento por hacer',opts)
    .command('actualizar','Actualizar el estado de una tarea',opts)
    .command('borrar','Borra una tarea por Hacer',opts)            
    .help()
    .argv;


module.exports = {
    argv
}