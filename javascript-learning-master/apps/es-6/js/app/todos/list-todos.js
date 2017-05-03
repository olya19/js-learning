/**
 * Created by titar on 02.05.2017.
 */

class ListTodos{
    constructor(){
        var todos = data.read('todos');
        if (!todos) {
            todos = [];
            data.update('todos', JSON.stringify(todos));
        }

        var self = this;

        events.subscribe('get-todos-list', function() {
            self.getList();
        });
    }

    getList(){
        var self = this;
        var todos = data.read('todos');
        todos = JSON.parse(todos);

        var todosEl = document.getElementById('todo_items');
        todosEl.innerHTML = '';

        var todosBodyEl = markup.create({
            tag: 'tbody',
            parent: todosEl
        });

        if (!todos.length) {
            return false
        }

        todos.forEach(function(todo, index) {
            var todoEl = markup.create({
                tag: 'tr',
                parent: todosBodyEl,
                className: todo.checked ? 'success' : ''
            });

            var todoCellCheckboxEl = markup.create({
                tag: 'td',
                parent: todoEl,
                attrs: [
                    { width: '30' }
                ]
            });

            var todoCellTextEl = markup.create({
                tag: 'td',
                parent: todoEl,
                content: todo.text,
                className: todo.checked ? 'checked' : ''
            });

            var todoCellActionsEl = markup.create({
                tag: 'td',
                parent: todoEl,
                attrs: [
                    { width: '30' }
                ]
            });

            var todoCheckboxEl = markup.create({
                tag: 'span',
                className: 'glyphicon glyphicon-' + (todo.checked ? 'check' : 'unchecked'),
                parent: todoCellCheckboxEl
            });

            var todoActionDeleteEl = markup.create({
                tag: 'button',
                attrs: [
                    { type: 'button' }
                ],
                className: 'btn btn-danger btn-xs',
                content: '<span class="glyphicon glyphicon-remove"></span>',
                parent: todoCellActionsEl
            });

            var todoActionEditEl = markup.create({
                tag: 'button',
                attrs: [
                    { type: 'button',
                      name: 'edit'
                    }
                ],
                className: 'btn btn-info btn-xs',
                content: '<span class="glyphicon glyphicon-pencil"></span>',
                parent: todoCellActionsEl
            });

            events.on(todoCellCheckboxEl, 'click', function(event) {
                event.preventDefault();
                self.doCheck(todoEl, todoCheckboxEl, todoCellTextEl, todos, todo, index);
            });

            events.on(todoCellTextEl, 'click', function(event) {
                event.preventDefault();
                self.doCheck(todoEl, todoCheckboxEl, todoCellTextEl, todos, todo, index);
            });

            events.on(todoActionDeleteEl, 'click', function(event) {
                self.delete(index, todos);
            });

            events.on(todoActionEditEl, 'click', function(event) {
                // console.log(todoActionEditEl.name);
                // if (todoActionEditEl.name === 'edit'){
                //     todoActionEditEl.name = 'save';
                //     todoActionEditEl.innerHTML = '<span class="glyphicon glyphicon-ok"></span>';
                //     let tdElem = todoActionEditEl.parentNode.previousSibling;
                //     tdElem.innerHTML = '<input type="text">';
                //     tdElem.text = todo.text;
                // } else {
                //     todoActionEditEl.name = 'edit';
                //     todoActionEditEl.innerHTML = '<span class="glyphicon glyphicon-pencil"></span>';
                // }
                // var elements = document.getElementsByClassName('form-control');
                // elements[0].value = todo.text;
                // elements[0].focus();
                // var newTodoItem = prompt('');
                // console.log(newTodoItem, todo);
                // todo.text = newTodoItem;
                // todos[index] = todo;
                // data.update('todos', JSON.stringify(todos));
                // events.send('get-todos-list');
            });
        });
    }

    doCheck(
        todoEl,
            todoCheckboxEl,
            todoCellTextEl,
            todos,
            todo,
            index
    ){
        var isChecked = todoCheckboxEl.className === 'glyphicon glyphicon-check'

        if (isChecked) {
            todoEl.className = '';
            todoCheckboxEl.className = 'glyphicon glyphicon-unchecked';
            todoCellTextEl.className = '';
            todo.checked = false;
        } else {
            todoEl.className = 'success';
            todoCheckboxEl.className = 'glyphicon glyphicon-check';
            todoCellTextEl.className = 'checked';
            todo.checked = true;
        }

        todos[index] = todo;
        data.update('todos', JSON.stringify(todos));
    }

    delete(index, todos){
        todos.splice(index, 1);
        data.update('todos', JSON.stringify(todos));
        events.send('get-todos-list');
    }
}

var listTodos = new ListTodos();
