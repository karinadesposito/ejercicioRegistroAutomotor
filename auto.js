"use strict";
exports.__esModule = true;
exports.RegistroAutomotor = exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, motor, origen, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        this.origen = origen;
        this.anio = anio;
    }
    return Auto;
}());
exports.Auto = Auto;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
    }
    RegistroAutomotor.prototype.todo = function (array) {
        console.log('auto:', array);
    };
    RegistroAutomotor.prototype.consultar = function (auto, array) {
        var autoEncontrado = array.find(function (auto) { return auto === auto; });
        if (autoEncontrado) {
            console.log(auto, 'Existe en el Reg', autoEncontrado);
            return Auto;
        }
        else {
            console.log(auto, 'No existe en el Reg');
        }
    };
    RegistroAutomotor.prototype.actualizar = function (marca, array, dato) {
        var autoActualizar = this.consultar(marca, array);
        if (autoActualizar) {
            marca = dato;
            console.log('El auto', marca, 'fue actualizado y su modelo es', dato);
        }
        else {
            console.log('El auto no se ha podido actualizar');
        }
    };
    RegistroAutomotor.prototype.nuevoIngreso = function () {
        var fs = require('fs');
        var dato = fs.readFileSync('./nuevosAutos.json', "utf8");
        var Auto = JSON.parse(dato);
        console.log(Auto, registro);
    };
    RegistroAutomotor.prototype.eliminarAuto = function (marca, array) {
        var autoEncontrado = array.findIndex(function (auto) { return marca == marca; });
        if (autoEncontrado >= 0) {
            array.splice(autoEncontrado, 1);
            console.log('Auto eliminado ', marca);
            console.log(array);
            return array;
        }
        else {
            console.log("No se encontrò el auto para eliminar");
        }
    };
    RegistroAutomotor.prototype.altaAuto = function (auto, array) {
        if (array.push(auto)) {
            console.log("Se ha dado de alta a: ", auto, array);
        }
        else {
            console.log("El auto", auto, " No se ha podido agregar");
        }
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
var Auto1 = new Auto("Ford", "Fiesta", 1600, "Nacional", 1996);
var Auto2 = new Auto("Honda", "Fit", 1500, "Importado", 2013);
var Auto3 = new Auto("Mercedes Benz", "C200", 2000, "Importado", 2022);
var registro = [Auto1, Auto2];
var Gestor = new RegistroAutomotor;
// console.log(registro)
// Gestor.todo(registro)
// Gestor.consultar('Ford', registro)
// const Auto3 = new Auto ("Ford", "Focus", 1600, "Nacional", 1996);
// Gestor.actualizar( 'Ford', registro, 'Chevrolet')
// Gestor.nuevoIngreso();
// Gestor.eliminarAuto("Chevrolet", registro)
// Gestor.consultar("Ford", registro)
// Gestor.consultar("BMW", registro )
// Gestor.altaAuto(Auto3, registro)
// Gestor.eliminarAuto ("Ford", registro)
// Gestor.consultar("Fiesta", registro)
// console.log(registro);
Gestor.eliminarAuto("Fiat", registro);
