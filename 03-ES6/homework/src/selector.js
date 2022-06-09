/**
 *  1. Primero conseguimos cuál será la función con la cual vamos a matchear.
    2. Verificamos que tipo de selector es
    3. Si es un id, una clase, un etiqueta con clase, o solamente un tag.
    4. matchFunction es la función que utilizaremos para ver si cada nodo del html es igual a el selector que nos pasaron.
    5. Segun el tipo de selector que sea, retornamos una función en especifico:
    - si es un id, como solo puede tener uno, solo verificamos si el elemento (el nodo actual) tiene ese id
    - si es una clase guardamos la lista de clases en un array, y lo recorremos para ver si alguna coincide con nuestro selector.
    - si es una etiqueta con una clase, entonces tenemos que verificar si: el tag Y la clase coinciden, es decir, que no nos sirve si solo tiene el mismo tag o si solo tiene la misma clase, debe tener ambos. 
    dividimos en un array el selector, por tag y clase.
    Se aplica recursión para utilizar las funciones de clase previamente hecha, y la de tag, que está a continuación
    - si es una etiqueta (tag), debemos verificar si el tagName es igual a nuestro selector.
    6. Revisamos todo el DOM para verificar si algún elemento cumple con el callback recibido en el punto anterior. 
    7. empieza por el document.body
    si el elemento coincide significa que es uno de los que estabamos buscando y lo agregamos a un array.
    si el elemento tiene hijos, volvemos a llamar esta función hasta que no tenga hijos.
    retornamos todos los nodos encontrados.
    FIN.
 * 
 */

let traverseDomAndCollectElements = function (matchFunc, startEl) {
  let resultSet = [];
  if (typeof startEl === "undefined") { // 7. empieza por el body.
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  // TU CÓDIGO AQUÍ

  if (matchFunc(startEl)) { // si el elemento coincide significa que es uno de los que estabamos buscando y lo agregamos a un array.
    resultSet.push(startEl);
  }

  for (let i = 0; i < startEl.children.length; i++) { // si el elemento tiene hijos, volvemos a llamar esta función hasta que no tenga hijos.
    const childrenResult = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...resultSet, ...childrenResult]; // spread operator
  }

  return resultSet; // retornamos todos los nodos encontrados.
};


// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

let selectorTypeMatcher = function (selector) {
  if (selector[0] === "#") return "id"; // 3. Si es un id,
  else if (selector[0] === ".") return "class"; // una clase
  else if (selector.includes(".")) return "tag.class"; // una etiqueta con una clase
  else return "tag"; // o si es solamente una etiqueta.
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

let matchFunctionMaker = function (selector) { // ".big"
  let selectorType = selectorTypeMatcher(selector); // 2. Verificamos que tipo de selector es
  let matchFunction; // 4. matchFunction es la función que utilizaremos para ver si cada nodo del html es igual a el selector que nos pasaron.
  // 5. Segun el tipo de selector que sea, retornamos una función en especifico.
  if (selectorType === "id") { //si es un id, como solo puede tener uno, solo verificamos si el elemento (el nodo actual) tiene ese id
    matchFunction = function (element) {
      return `#${element.id}` === selector;
    }
  } else if (selectorType === "class") { // si es una clase
    matchFunction = function (element) {
      const list = element.classList; // guardamos la lista de clases en un array, y lo recorremos para ver si alguna coincide con nuestro selector
      for (let i = 0; i < list.length; i++) {
        if (`.${list[i]}` === selector) return true;
      }
      return false;
    }
  } else if (selectorType === "tag.class") { // si es una etiqueta con una clase, entonces tenemos que verificar si: el tag y la clase coinciden, es decir, que no nos sirve si solo tiene el mismo tag o si solo tiene la misma clase, debe tener ambos.

    matchFunction = function (element) {
      const [tag, clas] = selector.split("."); // aplicamos destructuring. dividimos en un array el selector, por tag y clase.
      // Se aplica recursión para utilizar las funciones de clase previamente hecha, y la de tag, que está a continuación de esta.
      const tagFn = matchFunctionMaker(tag)
      const classFn = matchFunctionMaker(`.${clas}`);

      return tagFn(element) && classFn(element);
    }
  } else if (selectorType === "tag") { // si es una etiqueta, debemos verificar si el tagName es igual a nuestro selector.
    matchFunction = function (element) {
      return element.tagName.toLowerCase() === selector;
    }
  }
  return matchFunction;
};

let $ = function (selector) {
  let elements;
  let selectorMatchFunc = matchFunctionMaker(selector); // 1.  
  elements = traverseDomAndCollectElements(selectorMatchFunc); // 6. Revisamos todo el DOM para verificar si algún elemento cumple con el callback recibido en el punto anterior. 
  return elements;
};


let elements;
elements = $('body');
console.log(elements);