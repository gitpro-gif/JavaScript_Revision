// for each loop baas array par chalta hai

var a = [1,2,3,4,5,6,7,8];

a.forEach(function(val){
    // console.log(val);
})

// object par loop karne ke hota hai forin loop
let obj = {
    name: "Rahul",
    age: 25,
    city: "Delhi",
}

for(let key in obj) {
    console.log(key, obj[key]);
}