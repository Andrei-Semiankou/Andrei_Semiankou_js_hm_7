

let inputRef = document.querySelector('input[type="text"]')


inputRef.addEventListener("blur",(event) => {
  if(event.target.value.length == 0){
    inputRef.classList.remove('valid');
    inputRef.classList.remove('invalid');
  } else if(event.target.value.length > 6){
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  } else {
    inputRef.classList.add('valid');
  }
  
})



