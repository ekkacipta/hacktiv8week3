function mengelompokkanAngka(arr){
    var angkaGenap = []
    var angkaGanjil = []
    var angkakelipatanTiga = []
    var tampung = []
    for(var i = 0; i < arr.length; i++){
      if(arr[i] % 2 === 0 && arr[i] % 3 !== 0){
      angkaGenap.push(arr[i])
      }
    else if (arr[i] % 2 !== 0 && arr[i] % 3 !== 0){
      angkaGanjil.push(arr[i])
      }
    else {
      angkakelipatanTiga.push(arr[i])
      }
    }
  tampung[0] = angkaGenap
  tampung[1] = angkaGanjil
  tampung[2] = angkakelipatanTiga
  return tampung
  }

  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]