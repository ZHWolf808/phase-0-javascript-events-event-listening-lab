 const input = document.getElementById('button');
 console.log("input",input)

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);