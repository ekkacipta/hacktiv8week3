function groupAnimals(animals){
    var kelompok = []
    var hurufpertama = []
    for(var i = 0; i < animals.length; i++){
        hurufpertama.push(animals[i][0])
    } 
    
    var uniq = hurufpertama.reduce(function(a,b){
        if (a.indexOf(b) < 0 ) a.push(b);
        return a;
      },[]);

    var emptyArray = []
    for(var i = 0 ; i < uniq.length ; i ++){
        for(var j = 0 ; j < animals.length ; j++ ){
            if(uniq[i] === animals[j][0]){
                emptyArray.push(animals[j])
            }
        }
        kelompok.push(emptyArray)
        emptyArray = []
    }

    return kelompok.sort()
}



console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]