/** REFATORAÇÃO DO SCRIPT_V2 */

function debounceEvent(fn, wait = 1000 , time){ 
  // console.log('run debouce')

  return function(){
    clearTimeout(time);
  
    time = setTimeout(() => { 
      //aqui é a função handleKeyUp que será executada depois de 500 mi
      fn.apply(this, arguments);//Implicidamente exist arguments 
      //ATENÇÃO: apply aplica no contexto (this) os argumentos passados por (arguments)
    }, wait);

  }

}

// const debounce = debounceEvent();

function handleKeyUp(event){
    //console.log(event); //Meu event esta como undefined / Seu eu passo o arguments dentro da fn do debounceEvent será retornado valores
    filterUsers(event.target.value)
    .then(users => console.log(users.map(user => user.name)))
}

const filterUsers = (name) => 
  fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`)
    .then(res => res.json());

document.querySelector("input")
  .addEventListener("keyup", debounceEvent(handleKeyUp, 500)); //passounção handleKeyup, cpm porâmetro de 500 mi para dentro da função debounceEvent
