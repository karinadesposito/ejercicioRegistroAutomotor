export class Auto{
   private marca: string;
   private modelo: string;
   private motor: number;
   private origen: string;
   private anio: number;

constructor (marca: string, modelo:string, motor: number, origen: string, anio:number){
this.marca = marca;
this.modelo = modelo;
this.motor = motor;
this.origen = origen;
this.anio = anio;
}
}
export class RegistroAutomotor{
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
        console.log(Auto,registro);        
    }
    eliminarAuto(marca: string, array: Auto[]): any{
        let autoEncontrado = array.findIndex(auto => marca == marca);
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

const Auto1 = new Auto ("Ford", "Fiesta", 1600, "Nacional", 1996);
const Auto2 = new Auto ("Honda","Fit", 1500, "Importado", 2013);
const Auto3 = new Auto ("Mercedes Benz", "C200", 2000, "Importado", 2022)
let registro = [Auto1, Auto2];
let Gestor = new RegistroAutomotor;
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
Gestor.eliminarAuto("Fiat", registro)






