function split(array) {
  let largoArray = array.length;
  let middle = Math.floor((largoArray - 1) / 2);

  let primeraParte = array.slice(0, middle + 1);
  let segundaParte = array.slice(middle + 1, array.length);

  return [primeraParte, segundaParte];
}

function merge(array1, array2, funcionAEjecutar) {
  if (funcionAEjecutar) {
    console.log('no vacio');
  }

  let resultArray = [];

  let punteroA = 0;
  let punteroB = 0;

  while (punteroA < array1.length && punteroB < array2.length) {
    // implementacion funcion
    if (funcionAEjecutar) {
      let resultado = funcionAEjecutar(array1[punteroA], array2[punteroB]);
      if (resultado === -1) {
        resultArray.push(array1[punteroA]);
        punteroA++;
      } else {
        resultArray.push(array2[punteroB]);
        punteroB++;
      }
    }

    // implementacion normal
    else {
      if (array1[punteroA] < array2[punteroB]) {
        resultArray.push(array1[punteroA]);
        punteroA++;
      } else {
        resultArray.push(array2[punteroB]);
        punteroB++;
      }
    }
  }

  let auxiliarA = array1.slice(punteroA, array1.length);
  let auxiliarB = array2.slice(punteroB, array2.length);

  resultArray = resultArray.concat(auxiliarA, auxiliarB);

  return resultArray;
}

function mergeSort(array, funcionAEjecutar) {
  if (array.length === 0) return [];
  if (array.length === 1) return array;

  let arrayDivididos = split(array);

  let primerArray = arrayDivididos[0];
  let segundoArray = arrayDivididos[1];
  if (array.length === 2) {
    return merge(primerArray, segundoArray, funcionAEjecutar);
  }
  if (array.length > 2) {
    let arrayOrdenado1 = mergeSort(primerArray, funcionAEjecutar);
    let arrayOrdenado2 = mergeSort(segundoArray, funcionAEjecutar);

    return merge(arrayOrdenado1, arrayOrdenado2, funcionAEjecutar);
  }
}
