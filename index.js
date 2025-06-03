let arrr = [5, 3, 8, 1]
let filtered = function filterRange(arrr, a, b){
    return arrr.filter(item=>item >a&& item<b);
}
console.log(filtered(arrr,1,4));

let johnn = { name: "John", age: 25 };
let petee = { name: "Pete", age: 30 };
let maryy = { name: "Mary", age: 28 };
let users = [ johnn, petee, maryy ]
let names = users.map(x => x.name) ;
console.log(names);

let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 29 }
let arr = [ john, pete, mary ]
function getAverageAge(arr){
    let search = arr.reduce((a, x) => a += x.age, 0);
    let sum = search/(arr.length); 
    console.log(sum);
}


getAverageAge(arr) ; 
