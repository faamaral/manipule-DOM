var title, author, link ;
var count = 0;

var buttonSave = document.querySelector(".save");
buttonSave.addEventListener('click', (e) => { 
  e.preventDefault();
  fillList();
  
},false);
console.log(buttonSave);

function printList(read) {
  //checkEmptyList();
  let list = document.querySelector('ul');
  let itemList = document.createElement('li');
  let div = document.createElement('div');
  let btn_buy = document.createElement('button');
  btn_buy.innerHTML = '<span class="material-icons">shopping_cart</span>';
  btn_buy.className+=" btn-buy";
  let text = document.createTextNode(`${title} - ${author}`);
  if (read == '1') {
    itemList.classList.add("lido");
  }
 
  itemList.appendChild(text);
  itemList.appendChild(btn_buy);
  
  list.append(itemList);
  
  

}


function checkEmptyList () {
  if (!document.querySelector('ul').childNodes.length) {
    document.querySelector('ul').innerHTML = 'Adicione um livro abaixo!';
  }
}

function fillList() {
  
  let form = document.forms[0];
  let titleInput = form.querySelector('input[name="titulo"]').value;
  title=titleInput;
  let authorInput = form.querySelector('input[name="autor"]').value;
  author=authorInput;
  let linkInput = form.querySelector('input[name="link"]').value;
  link=linkInput;
  var readInput = form.querySelector('input[name="lido"]');
  if (!readInput.checked) {
    readInput = '0';
  }

  printList(readInput.value);
 

  
  
  console.log(title, author, link, readInput);
}

checkEmptyList()