var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pexels-photo-1298533.jpeg') {
      myImage.setAttribute ('src','images/pexels-photo-2441454.jpeg');
    } else {
      myImage.setAttribute ('src','images/pexels-photo-1298533.jpeg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Good vibe, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Good vibe, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
