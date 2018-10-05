function targetTerdekat(arr){
    var nol = arr.indexOf('o')
    var jarak1 = 0
    var jarak2 = arr.length
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === 'x'){
            jarak1 = Math.abs(nol-i) 
        if(jarak1 < jarak2){
            jarak2 = jarak1
            }
            
        }
    }
        if(arr.indexOf('x') === -1){
            return 0
    } 
        return jarak2
}






console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2 