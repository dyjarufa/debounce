/* REFATORANDO O SCRIPT_V1   */

function debounceEvent(time){ //se não for passado nenhum valor recebe null

  return function(fn, wait = 1000){ //ao invés de passar um valor, agpra eu passo um função
    clearTimeout(time);
  
    time = setTimeout(() => { 
      fn(); // agora eu executo uma função
    }, wait);

  }

}

const debounce = debounceEvent();

function handleKeyUp(event){
  debounce(() => { //agora passo uma função ao invés do valor
    filterUsers(event.target.value)  //essa função será recuperada no fn interno do debounceEvent
    .then(users => console.log( users.map(user => user.name)));
  }, 2000) //time dinâmico, é recuperado na var wait do debouceEvent
  
}

const filterUsers = (name) => 
  fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`)
    .then(res => res.json());

document.querySelector("input")
  .addEventListener("keyup", handleKeyUp);
