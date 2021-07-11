/* 
Descricao :
	Este arquivo é responsável por receber o conteúdo dos campos html e adicioná-los a uma lista
Aluno :
	Fabiano Amaral Alves
Data :
	11 / 07 / 2021
*/

var title, author, link ;

var buttonSave = document.querySelector(".save");
buttonSave.addEventListener('click', (e) => { 
  e.preventDefault();
  fillList(); 
}, false);
//console.log(buttonSave);

function printList(read) {
  //checkEmptyList();
  let list = document.querySelector('ul');
  let itemList = document.createElement('li');
  let div = document.createElement('div');
  let btn_buy = document.createElement('button');
  btn_buy.innerHTML = `<a href="${link}" target="_blank"><span class="material-icons">shopping_cart</span></a>`;
  btn_buy.className+=" btn-buy";
  let btn_delete = document.createElement('button');
  btn_delete.innerHTML = '<span class="material-icons">delete</span>';
  btn_delete.className+=" delete";
  btn_delete.addEventListener('click', function(){
    let confirm = window.confirm("Deseja realmente apagar este livro?");
    if (confirm) {
      itemList.parentNode.removeChild(itemList);
    }
  });
  let text = document.createTextNode(`${title} - ${author}`);

  div.appendChild(btn_buy);
  div.appendChild(btn_delete);
  if (read == '1') {
    itemList.classList.add("lido");
  }
 
  itemList.appendChild(text);
  itemList.appendChild(div);
  
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
  
  //console.log(title, author, link, readInput);
}

checkEmptyList()