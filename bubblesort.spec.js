describe('Bubble Sort', function () {
  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([]);
  });

  it('ordena array desordenado}', function () {
    spyOn(window, 'swap').and.callThrough();
    expect(bubbleSort([5, 4, 2, 1, 3])).toEqual([1, 2, 3, 4, 5]);
    expect(window.swap.calls.count()).toEqual(8);
  });

  it('ordena array desordenado', function () {
    spyOn(window, 'swap').and.callThrough();
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('ordena array desordenado', function () {
    spyOn(window, 'swap').and.callThrough();
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(window.swap.calls.count()).toEqual(10);
  });

  it('ordena dos objetos ', function () {
    expect(
      bubbleSort([{ age: 8 }, { age: 4 }], function comparator(a, b) {
        if (a.age < b.age) return -1; // Devolver -1 significa "a va antes que b".
        if (a.age > b.age) return 1; // Devolver 1 significa que "b va antes que a".
        return 0; // Devolver 0 significa "a y b son equivalentes".
      })
    ).toEqual([{ age: 4 }, { age: 8 }]);
  });
  it('ordena cuatro objetos ', function () {
    expect(
      bubbleSort(
        [{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }],
        function comparator(a, b) {
          if (a.age < b.age) return -1; // Devolver -1 significa "a va antes que b".
          if (a.age > b.age) return 1; // Devolver 1 significa que "b va antes que a".
          return 0; // Devolver 0 significa "a y b son equivalentes".
        }
      )
    ).toEqual([{ age: 2 }, { age: 4 }, { age: 8 }, { age: 9 }]);
  });
  it('ordena seis objetos ', function () {
    expect(
      bubbleSort(
        [
          { age: 4 },
          { age: 8 },
          { age: 2 },
          { age: 9 },
          { age: 11 },
          { age: 13 },
        ],
        function comparator(a, b) {
          if (a.age < b.age) return -1; // Devolver -1 significa "a va antes que b".
          if (a.age > b.age) return 1; // Devolver 1 significa que "b va antes que a".
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
