fetch('https://api.github.com/users/erictraaaan')
  .then(function(r) {
    return r.json();
  })
  .then(function(j) {
    console.log(j);
    var temp = document.getElementById('username').innerText;
    document.getElementById('username').innerText = temp + j.login;
    
    document.getElementById('bio').innerText = document.getElementById('bio').innerText + j.bio;
    
    document.getElementById('location').innerText = document.getElementById('location').innerText + j.location;
    
    document.getElementById('name').innerText = document.getElementById('name').innerText + j.name;
    
    var att = document.createAttribute('src');
    att.value = j.avatar_url;
    document.getElementById('image').setAttributeNode(att);
  })
