/** REFATORAÇÃO DO SCRIPT_V3  MÉTODO debounceEvent*/

const filterUsers = (name) => 
  fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`)
    .then(res => res.json());

/*
  VERSÃO ANTERIOR
  function debounceEvent(fn, wait = 1000 , time){ 

  return function(){
    clearTimeout(time);
  
    time = setTimeout(() => { 
      fn.apply(this, arguments);//Implicidamente exist arguments 
    }, wait);

  }

} */

/* Com arrow function não existe arguments e sim (..args)
  const debounceEvent = (fn, wait = 1000, time) => (...args) => {
  clearTimeout(time)
  time = setTimeout(() => fn(...args), wait);
} */

const debounceEvent = (fn, wait = 1000, time) => (...args) => 
  clearTimeout(time, time = setTimeout(() => fn(...args), wait));
  


function handleKeyUp(event){
    filterUsers(event.target.value)
    .then(users => console.log(users.map(user => user.name)))
}


document.querySelector("input")
  .addEventListener("keyup", debounceEvent(handleKeyUp, 500)); 