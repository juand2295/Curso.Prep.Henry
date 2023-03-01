// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
 var matrizcv = Object.entries(objeto)
 return matrizcv
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var Acaracteres = string.split('');
  var contador = {}
  Acaracteres.forEach(function(elemento, indice){
    if (contador[elemento]=== undefined){contador[elemento]=1} else{contador[elemento]+=1}
  })
  return contador
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí:
nuevas = [];
for (var i =s.length; i>=0; i--){
  if (s.charAt(i)===s.charAt(i).toUpperCase()){
    nuevas.unshift(s.charAt(i));
  }
}
for (var i=0; i<=s.length; i++){
  if (s.charAt(i)===s.charAt(i).toLowerCase()){
    nuevas.push(s.charAt(i))
  }
}
return nuevas.join('')
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  array1 = str.split(' ')

  mirror = ''
  
  for (var i= 0; i<array1.length; i++){
    palabra = array1[i]
    palabraespejo = ''
    for (var j= palabra.length-1; j>=0; j--){
      palabraespejo += palabra[j]
    }
    mirror += palabraespejo +' '
  }
  return mirror.trim()
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numeroP = numero.toString();
  reves = ''
  for (i=numeroP.length-1; i>=0; i--){
    reves += numeroP[i]
  }
if (numeroP === reves){
  return 'Es capicua'
}
else return 'No es capicua'
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let cnueva = '';
  for (i=0;i<cadena.length;i++){
    if (cadena[i]!== 'a' && cadena[i]!== 'b' && cadena[i]!=='c'){
      cnueva += cadena[i]
    }
  }
  return cnueva
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let aux = ''
  for (i=0;i<arr.length-1;i++){
    for(j=i+1;j<arr.length;j++){
      if (arr[i].length>arr[j].length){
        aux = arr[i]
        arr[i]= arr[j]
        arr[j]= aux;
      }
    }
  }
  return arr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  inter = [];
  for (i=0;i<arreglo1.length;i++){
    for (j=0;j<arreglo2.length;j++){
      if (arreglo1[i]===arreglo2[j]){
        inter.push(arreglo1[i])
      }
    }
  }
  return inter
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

