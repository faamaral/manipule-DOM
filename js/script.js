function checkEmptyList () {
  if (!document.querySelector('ul').childNodes.length) {
    document.querySelector('ul').innerHTML = 'Adicione um livro abaixo!';
  }
}

const fillList = () => {
  let list = document.querySelector('ul');
  let form = document.forms[0];
  let titleInput = form.querySelector('input[name="titulo"]');
  let title = titleInput.value;
  let authorInput = form.querySelector('input[name="autor"]');
  let author = authorInput.value;
  let linkInput = form.querySelector('input[name="link"]');
  let link = linkInput.value;
  let lidoInput = form.querySelector('input[name="lido"]:checked');
  let lido = lidoInput.value;

  let itemList = document.createElement('li');
  itemList.appendChild(document.createTextNode(title));
  list.insertBefore(itemList);
  
  //console.log(title, author, link, lido);
}

checkEmptyList()