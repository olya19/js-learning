
function AddTodo() {
  var self = this;
  var row = markup.create({
    className: 'row',
    parent: '#todo_add'
  });

  var cell = markup.create({
    className: 'col-lg-12',
    parent: row
  });
  
  var form = markup.create({
    tag: 'form',
    attrs: [
      { action: 'javascript:void(0)' },
      { method: 'POST' }
    ],
    parent: cell
  });
  
  var inputGroup = markup.create({
    className: 'input-group',
    parent: form
  });

  var addField = markup.create({
    tag: 'input',
    attrs: [
      { type: 'text' },
      { placeholder: 'Todo text...' }
    ],
    className: 'form-control',
    parent: inputGroup
  });

  var buttonGroup = markup.create({
    tag: 'span',
    className: 'input-group-btn',
    parent: inputGroup
  });

  var addButton = markup.create({
    tag: 'button',
    attrs: [
      { type: 'submit' }
    ],
    content: 'Add',
    className: 'btn btn-primary',
    parent: buttonGroup
  });

  events.on(form, 'submit', function(event) {
    event.preventDefault();
    self.add(form, addField);
  });
}

AddTodo.prototype.add = function(form, addField) {
  var todos = data.read('todos');
  if (!todos) {
    todos = [];
    data.create('todos', JSON.stringify([]));
  } else {
    todos = JSON.parse(todos);
  }

  todos.push({
    text: addField.value,
    checked: false
  });
  data.update('todos', JSON.stringify(todos));

  form.reset();

  events.send('get-todos-list');
};

var addTodo = new AddTodo();
