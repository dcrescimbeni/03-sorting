function split(array) {
  let largoArray = array.length;
  let middle = Math.floor((largoArray - 1) / 2);

  let primeraParte = array.slice(0, middle + 1);
  let segundaParte = array.slice(middle + 1, array.length);

  return [primeraParte, segundaParte];
}

function merge(array1, array2) {
  let resultArray = [];

  let punteroA = 0;
  let punteroB = 0;

  while (punteroA < array1.length && punteroB < array2.length) {
    if (array1[punteroA] < array2[punteroB]) {
      resultArray.push(array1[punteroA]);
      punteroA++;
    } else {
      resultArray.push(array2[punteroB]);
      punteroB++;
    }
  }

  let auxiliarA = array1.slice(punteroA, array1.length);
  let auxiliarB = array2.slice(punteroB, array2.length);

  resultArray = resultArray.concat(auxiliarA, auxiliarB);

  return resultArray;
}

function mergeSort(array) {
  if (array.length === 0) return [];
  if (array.length === 1) return array;

  let arrayDivididos = split(array);

  let primerArray = arrayDivididos[0];
  let segundoArray = arrayDivididos[1];
  if (array.length === 2) {
    console.log(primerArray);
    console.log(segundoArray);

    return merge(primerArray, segundoArray);
  }
  if (array.length > 2) {
    let arrayOrdenado1 = mergeSort(primerArray);
    let arrayOrdenado2 = mergeSort(segundoArray);

    return merge(arrayOrdenado1, arrayOrdenado2);
  }
  // console.log(array);
}

/*

5   |  2   |  1   |  11   |


2     5   |   1       11    |

                       ^ 

[ 1   2     5     11    ]


*/
