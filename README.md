# Manipulate DOM with javascript

## Get input fields content

1. Define global variables.
    ```javascript
    var title, author, link ;
    ```

2. Assign field values to global variables.
    > this content is inside the `fillList()` function.
    ```javascript
    let form = document.forms[0];
    let titleInput = form.querySelector('input[name="titulo"]').value;
    title=titleInput;
    let authorInput = form.querySelector('input[name="autor"]').value;
    author=authorInput;
    let linkInput = form.querySelector('input[name="link"]').value;
    link=linkInput;
    var readInput = form.querySelector('input[name="lido"]');
    ```

3. Check if the checkbox is selected
    > this content is inside the `fillList()` function.
    ```javascript
    if (!readInput.checked) {
        readInput = '0';
    }

    ```

## Fill  the list and print its contents

1. This is the content of the `printList(read)` function, which has the function to insert and print the items in the list.
    > It has read as parameter that defines values of `'1'` or `'0'`, if it gets value `'1'` the background of the corresponding item will have green color.
    ```javascript
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
    })
    let text = document.createTextNode(`${title} - ${author}`);

    div.appendChild(btn_buy);
    div.appendChild(btn_delete);
    if (read == '1') {
    itemList.classList.add("lido");
    }

    itemList.appendChild(text);
    itemList.appendChild(div);

    list.append(itemList);
    
    ```
2. Call the `printList` function inside the `fillList` function.
    ```javascript
    function fillList() {
        ...
        printList(readInput);
    }
    ```
3. List items in the screen when click on `save` button.
    ```javascript
    var buttonSave = document.querySelector(".save");
    buttonSave.addEventListener('click', (e) => { 
        e.preventDefault();
        fillList();
    }, false);
    ```

## Click to buy book
1. define button to go to buy the book.
    ```javascript
    let btn_buy = document.createElement('button');
    btn_buy.innerHTML = `<a href="${link}" target="_blank"><span class="material-icons">shopping_cart</span></a>`;
    btn_buy.className+=" btn-buy";
    ```

## Click to delete item of the list
1. define button to go to delete book.
    ```javascript
    let btn_delete = document.createElement('button');
    btn_delete.innerHTML = '<span class="material-icons">delete</span>';
    btn_delete.className+=" delete";
    btn_delete.addEventListener('click', function(){
        let confirm = window.confirm("Deseja realmente apagar este livro?");
        if (confirm) {
        itemList.parentNode.removeChild(itemList);
        }
    });
    ```
