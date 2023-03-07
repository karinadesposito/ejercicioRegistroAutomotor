"use strict";
exports.__esModule = true;
var auto_1 = require("./auto");
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
            return auto_1["default"];
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
        console.log(Auto);
    };
    RegistroAutomotor.prototype.eliminarAuto = function (marca, array) {
        var autoEncontrado = array.findIndex(function (auto) { return auto == auto; });
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
exports["default"] = RegistroAutomotor;
