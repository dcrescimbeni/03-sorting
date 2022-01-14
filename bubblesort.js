function bubbleSort(array) {
  let flag = true;

  while (flag) {
    flag = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        flag = true;
        swap(array, i);
      }
    }
  }

  console.log(array);
  return array;
}

function swap(arreglo, indice) {
  let prevValue = arreglo[indice + 1];
  arreglo[indice + 1] = arreglo[indice];
  arreglo[indice] = prevValue;
}
