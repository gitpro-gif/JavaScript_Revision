var a = [1,2,3,4,5];
var b = [...a];

b.pop();
console.log(b);
console.log(a);

// copy object
var obj = {name: "Vedant"}
var copyobj = {...obj}

obj.name = "Bhushan"
console.log(copyobj);
console.log(obj);


