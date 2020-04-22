
// estratégia: cancelo o timeout anterior e insiro o novo no lugar
function debounceEvent(){

  //Estratégia Clousure
  let time = null;
  return function(value){
    clearTimeout(time); // se for digitado n vezes seguida vou cancelando o timeout anterior 
  
    //após digitar a sequencia desejada, e se eu aguar o milisegundo definido(1000). 
      //O timeout não será limpo e ira executar a função de dentro do timeout
    time = setTimeout(() => { 
      filterUsers(value)
      .then(users => console.log(users.map(user => user.name)));// retorna apenas os nomes
      //.then(users => console.log(users));
    }, 1000);

  }

}

const debounce = debounceEvent();

function handleKeyUp(event){
  debounce(event.target.value)
  
}

const filterUsers = (name) => 
  fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`)
    .then(res => res.json());

document.querySelector("input")
  .addEventListener("keyup", handleKeyUp);




  //Api usada para teste, deve ser executada no console do navegador:
  // https://jsonplaceholder.typicode.com/users/
  
  // comando usado no console -> fetch("https://jsonplaceholder.typicode.com/users")
  //OBS: A resposta do fecth já é um promise

  // Transforma valores em json e retorna no console.log -> fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => console.log(data))


  // name_like: FILTRA POR NOME -> fetch("https://jsonplaceholder.typicode.com/users?name_like=nni").then(res => res.json()).then(data => console.log(data))