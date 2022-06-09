let traverseDomAndCollectElements = function (matchFunc, startEl) {
  let resultSet = [];
  if (typeof startEl === "undefined") {
    startEl = document.body;
  }
  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  // TU CÓDIGO AQUÍ

  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }
  for (let i = 0; i < startEl.children.length; i++) {
    const childrenResult = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...resultSet, ...childrenResult]; // spread operator
  }
  console.log(startEl);
  console.log(h);
  h++;
  return resultSet;
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
  if (selectorType === "id") { //si es un id, como solo puede tener uno, solo verificamos si el elemento ()
    matchFunction = function (element) {
      return `#${element.id}` === selector;
    }

  } else if (selectorType === "class") {

    matchFunction = function (element) { 
      const list = element.classList;
      for (let i = 0; i < list.length; i++) {
        if (`.${list[i]}` === selector) return true;
      }
      return false;
    }
  } else if (selectorType === "tag.class") {

    matchFunction = function (element) {
      const [tag, clas] = selector.split("."); // aplicamos destructuring

      const tagFn = matchFunctionMaker(tag)
      const classFn = matchFunctionMaker(`.${clas}`);

      return tagFn(element) && classFn(element);
    }
  } else if (selectorType === "tag") {
    matchFunction = function (element) {
      return element.tagName.toLowerCase() === selector;
    }

  }
  return matchFunction;
};

let $ = function (selector) {
  let elements; 
  let selectorMatchFunc = matchFunctionMaker(selector); // 1.  
  elements = traverseDomAndCollectElements(selectorMatchFunc); // 
  return elements;
};
