describe('Bubble Sort', function () {
  xit('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([]);
  });

  xit('ordena array desordenado', function () {
    expect(bubbleSort([5, 4, 2, 1, 3])).toEqual([1, 2, 3, 4, 5]);
  });

  xit('ordena array desordenado', function () {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  xit('ordena array desordenado', function () {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
});
