function bubbleSort(array, funcionAEjecutar) {
  let flag = true;

  while (flag) {
    flag = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (funcionAEjecutar) {
        let resultado = funcionAEjecutar(array[i], array[i + 1]);
        if (resultado === 1) {
          flag = true;
          swap(array, i);
        }
      } else if (array[i] > array[i + 1]) {
        flag = true;
        swap(array, i);
      }
    }
  }

  return array;
}

function swap(arreglo, indice) {
  let prevValue = arreglo[indice + 1];
  arreglo[indice + 1] = arreglo[indice];
  arreglo[indice] = prevValue;
}
