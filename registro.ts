import Auto from "./auto";


class RegistroAutomotor{
    todo(array):any{
        console.log('auto:', array)
    }
    consultar(auto:any, array:Auto[]){
        let autoEncontrado= array.find (auto=> auto === auto);
        if(autoEncontrado){
            console.log(auto,'Existe en el Reg', autoEncontrado); 
            return Auto          
        }else{
            console.log(auto,'No existe en el Reg' );
           }
    }
    actualizar(marca:string, array:Auto[], dato:string){
        let autoActualizar = this.consultar (marca, array)
        if (autoActualizar){
          marca = dato;
            console.log('El auto', marca, 'fue actualizado y su modelo es',  dato );            
        }else{
            console.log('El auto no se ha podido actualizar');            
        }
    }
    nuevoIngreso (){
        const fs = require ('fs');
        const dato = fs.readFileSync ('./nuevosAutos.json', "utf8");
        const Auto = JSON.parse(dato);     
        console.log(Auto);       
    }
    eliminarAuto(marca: string, array: Auto[]): any{
        let autoEncontrado = array.findIndex(auto => auto == auto);
        if(autoEncontrado  >=0){
            array.splice(autoEncontrado, 1)
            console.log('Auto eliminado ', marca);
            console.log(array);
            return array;         
        }else{
            console.log( "No se encontrò el auto para eliminar");
        }
       }
       altaAuto(auto: Auto, array: Auto[]){
        if (array.push(auto)){
            console.log("Se ha dado de alta a: ", auto ,array );            
        }else{
            console.log("El auto" , auto, " No se ha podido agregar");         
        }
       }
    }
     export default RegistroAutomotor  

