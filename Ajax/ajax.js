//var a = new XMLHttpRequest();
//
//a.addEventListener('readystatechange', function(r) {
//    if (r.target.status === 200){
//        console.log(r.target.response);
//    } 
//});
//
//a.open('GET', 'https://api.github.com/users/erictraaaan', true);
//a.send();

fetch('https://api.github.com/users/erictraaaan')
    .then(function(r) {
    return r.json();
})
    .then(function(j) {
    console.log(j);
})