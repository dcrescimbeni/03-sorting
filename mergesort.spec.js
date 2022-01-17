describe('Split Array function', function () {
  it('es capaz de dividir el arreglo en dos partes', function () {
    expect(split([1, 2, 3, 4])).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
});

describe('Merge', function () {
  it('es capaz de combinar dos Arreglos ordenados en uno solo ordenado', function () {
    expect(merge([2], [1])).toEqual([1, 2]);
  });
  it('es capaz de combinar dos Arreglos ordenados en uno solo ordenado', function () {
    expect(merge([2, 5], [1, 7])).toEqual([1, 2, 5, 7]);
  });

  it('combina los arreglos cuando uno es mas largo que el otro', function () {
    expect(merge([2, 5, 11], [1, 7])).toEqual([1, 2, 5, 7, 11]);
  });
});

describe('Merge Sort', function () {
  it('handles an empty array', function () {
    expect(mergeSort([])).toEqual([]);
  });

  it('ordena array desordenado', function () {
    expect(mergeSort([5, 4])).toEqual([4, 5]);
  });
  it('ordena array desordenado', function () {
    expect(mergeSort([5, 4, 2, 1, 3])).toEqual([1, 2, 3, 4, 5]);
  });

  it('ordena array desordenado', function () {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('ordena array desordenado', function () {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it('ordena dos objetos ', function () {
    expect(
      mergeSort([{ age: 4 }, { age: 8 }], function comparator(a, b) {
        if (a.age < b.age) return -1; // Devolver `-1` significa "a va antes que b".
        if (a.age > b.age) return 1; // Devolver `1` significa que "b va antes que a".
        return 0; // Devolver 0 significa "a y b son equivalentes".
      })
    ).toEqual([{ age: 4 }, { age: 8 }]);
  });

  it('ordena cuatro objetos ', function () {
    expect(
      mergeSort(
        [{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }],
        function comparator(a, b) {
          if (a.age < b.age) return -1; // Devolver `-1` significa "a va antes que b".
          if (a.age > b.age) return 1; // Devolver `1` significa que "b va antes que a".
          return 0; // Devolver 0 significa "a y b son equivalentes".
        }
      )
    ).toEqual([{ age: 2 }, { age: 4 }, { age: 8 }, { age: 9 }]);
  });

  it('ordena seis objetos ', function () {
    expect(
      mergeSort(
        [
          { age: 4 },
          { age: 8 },
          { age: 2 },
          { age: 9 },
          { age: 11 },
          { age: 13 },
        ],
        function comparator(a, b) {
          if (a.age < b.age) return -1; // Devolver `-1` significa "a va antes que b".
          if (a.age > b.age) return 1; // Devolver `1` significa que "b va antes que a".
          return 0; // Devolver 0 significa "a y b son equivalentes".
        }
      )
    ).toEqual([
      { age: 2 },
      { age: 4 },
      { age: 8 },
      { age: 9 },
      { age: 11 },
      { age: 13 },
    ]);
  });
});
