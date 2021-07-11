var title, author, link ;
var count = 0;

function printList(read) {
  //checkEmptyList();
  let list = document.querySelector('ul');
  let itemList = document.createElement('li');
  let div = document.createElement('div');
  let btn_buy = document.createElement('a');
  let span_buy = document.createElement('span');
  span_buy.className+=" material_icons";
  span_buy.textContent = "shopping_cart";
  btn_buy.appendChild(span_buy);
  btn_buy.className+=" btn_buy";
  btn_buy.href=link;
  /*for (let i = 0; i < title.length; i++) {
    
    
  }*/
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
  let readInput = form.querySelector('input[name="lido"]:checked').value;

  printList(readInput);
 

  
  
  console.log(title, author, link, readInput);
}

checkEmptyList()