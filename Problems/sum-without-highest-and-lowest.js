/*
    Sum all the numbers of a given array ( cq. list ),
    except the highest and the lowest element ( by value, not by index! ).
*/

function sumArray(array) {
  if (array == null) return 0;
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, current) => acc + current, 0);
  //   let minValue = Math.min(...array);
  //   let maxValue = Math.max(...array);
  //   let filterArray = array
  //     .filter((m) => m !== minValue && m !== maxValue)
  //     .reduce((acc, current) => acc + current);
  //   return filterArray;
}

console.log(sumArray([1, 1, 3, 6, 5]));
