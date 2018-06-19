
// Uso de Let y Const
let nombre = "Ricardo Tapia";
const edad = 23;

let PERSONAJE = {
  nombre: nombre,
  edad: edad
};



// Cree una interfaz que sirva para validar el siguiente objeto

interface bat {
    nombre:string,
    artesMarciales:any
}

let batman:bat = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

// Convertir esta funcion a una funcion de flecha
function resultadoDoble( a, b ){
  return (a + b) * 2
}

let r = (a,b) => (a+b)*2;

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma="Arco" ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
};
