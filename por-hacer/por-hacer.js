'use strict'

const fs = require('fs');

let listadoPorHacer = [];
let obj = [];



const guardarDB = () =>{

    // Se pasa informacion del arreglo al json
    let data = JSON.stringify(listadoPorHacer);
    
    // con la funcion writefile copiamos lo que contiene data" en el archivo json
    fs.writeFile('db/data.json', data, (err)=>{
        if (err) throw Error('No se pudo grabar',err);
    })

}


// Con esta funcion creamos un arreglo , luego pasamos con la funcion guardarDB()
const crear = (descripcion) => {

    cargarDB();

    let porHacer  ={
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

// el metodo require serelializa el archivo json.
const cargarDB = () =>{

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
   
    
}


const getListado = () => {
   
    cargarDB();
    return listadoPorHacer;


}


const actualizar = (descripcion, completado = true) =>{
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }

}

const borrar = (descripcion) =>{
    cargarDB();
    // filter nos filtra un elemento de objeto para manipularlo o borrarlo
    // The filter() method creates an array filled with all array elements that pass a test (provided as a function).
    // Note: filter() does not execute the function for array elements without values.
    // Note: filter() does not change the original array.
    
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if(listadoPorHacer.length === nuevoListado.length){
          return false;
    }else{
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar

}
