// first class functiom

function abcd(a) {
    a();
}

abcd(function(){console.log("hello")})