document.getElementById('addTodo').addEventListener('click', function() {
    var newTodoText = document.getElementById('newTodo').value;
    //text box value
    
    if (newTodoText.trim() !== '') {
      // Create a new list item
      var newListItem = document.createElement('li');
      newListItem.id = 'lists'
      // <li></li>

     var newDeleteButton = document.createElement('button');
      newDeleteButton.id = 'delete';
      newDeleteButton.onclick = deleteToDo;
      newDeleteButton.appendChild(document.createTextNode('X'));
      //<button id="delete" onclick = "deleteToDo(event)">'X'</button>

      // Create a new label
      var newLabel = document.createElement('label');
      newLabel.id = 'store'
      // <label></label>
  
      // Create a new checkbox
      var newCheckbox = document.createElement('input');
      newCheckbox.type = 'checkbox';
      newCheckbox.name = 'To-Do';
      newCheckbox.onclick = changeOnChecked;
      //newCheckbox = <input type="checkbox" name="To-Do">
  
      // Append the checkbox and text to the label
      newLabel.appendChild(newCheckbox);
      //<label><input type="checkbox" name="To-Do"></label>
      newLabel.appendChild(document.createTextNode(' ' + newTodoText));
      //newLabel = <label><input type="checkbox" name="To-Do">'example'</label>

      newListItem.appendChild(newDeleteButton);
      //<li><button id="delete" onclick = "deleteToDo(event)">'X'</button></li>
    
      // Append the label to the list item
      newListItem.appendChild(newLabel);
      // <li><label><input type="checkbox" name="To-Do">'example'</label><li><button id="delete" onclick = "deleteToDo(event)">'X'</button></li></li>
  
      // Append the list item to the to-do list
      document.getElementById('todoList').appendChild(newListItem);
    //  <ul id="todoList">
    //<li><label id="store"><input type="checkbox" id="store" name="To-Do" value="store" />Go to store</label></li>
    //<li><label id="store"><input type="checkbox" id="cookware" name="To-Do" value="cookware" onclick='changeOnChecked()'>Gather mixing bowls, measuring cups, and measuring spoons</label></li>
    //<li><label><input type="checkbox" name="To-Do">'example'</label></li>
    //  </ul>


      // Clear the input field
      document.getElementById('newTodo').value = '';

    }
  });

  function changeOnChecked(event) {
    const isChecked = event.target.checked;
 isChecked ? event.target.closest('li').style.textDecoration = 'line-through' : event.target.closest('li').style.textDecoration = 'none';
  };
  //creates a line through the list element when checkbox is checked and reverts it when unchecked


 function deleteToDo(event) {
 const element = event.target.closest('li');
 element.remove(); // Removes the 'li' element next to the button
 };