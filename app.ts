import Auto from "./auto";
import  RegistroAutomotor from "./registro";

const Auto1 = new Auto ("Ford", "Fiesta", 1600, "Nacional", 1996);
const Auto2 = new Auto ("Honda","Fit", 1500, "Importado", 2013);
const Auto3 = new Auto ("Mercedes Benz", "C200", 2000, "Importado", 2022);
const registro = [Auto1,Auto2]
const [] = [Auto];
const Gestor = new RegistroAutomotor()    
        
Gestor.nuevoIngreso();
console.log(registro);



