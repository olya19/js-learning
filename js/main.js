function Data() {
    var logs = new Logs();
    this.createData = function (key, data) {
        key = key || prompt('Input key');
        data = data || prompt('Input data:');


        if (typeof key === 'undefined'){
            logs.e('Create data failed: no key');
            return false;
        } else if (typeof data === 'undefined'){
            logs.e('Create data failed: no data');
            return false;
        }

        localStorage.setItem(key, data);
    };

    this.readData = function (key) {
        if (typeof key === 'undefined'){
            logs.e('Read data failed: no key');
            return false;
        }

        return localStorage.getItem(key);
    };

    this.updateData = function (key, newData) {
        localStorage.setItem(key, newData);
    };

    this.deleteData = function (key) {
        localStorage.removeItem(key);
    };

}

function Markup() {
    var logs = new Logs();

    this.deleteMarkupByTagName = function (tag, position) {

        if (typeof tag !== 'undefined' && typeof position !== 'undefined') {
            var elements = document.getElementsByTagName(tag);
            if (elements.length !== 0 && position > 0 && position <= elements.length){
                elements.item(position - 1).remove();
                logs.i('Success: deleted \'' + tag + '\' from position ' + position.toString());
            } else {
                logs.e('Deleting failed: tag \'' + tag + '\' does not exist or no elements on the page with this tag ' +
                'or invalid position');
            }

        } else {
            logs.e('deleting failed: tag name or position does not specify.');
        }
    };

    this.deleteMarkupByIdName = function (id) {
        if (typeof id !== 'undefined'){

            if ( !!document.getElementById(id) ){
                document.getElementById(id).remove();
                logs.i('Success: deleted  markup with id \'' + id + '\'');
            } else{
                logs.e('Deleting failed: id \'' + id + '\' does not exist on the page.');
            }

        }

    };

    this.updateMarkup = function () {

    };

}

Markup.prototype.createMarkup = function(options){
    //tag
    //content
    //parent
    //styleClass
    //id
    //callback

    var optionsDefault = {
        tag: 'div',
        content: '',
        parent: 'body',
        styleClass: '',
        id: '',
        callback: null
    };
    options = options || {};

    for (var i in optionsDefault){
        if (options.hasOwnProperty(i)) {
            optionsDefault[i] = options[i];
        }
    }

    var element  = document.createElement(optionsDefault.tag);
    element.innerHTML = optionsDefault.content;
    element.className = optionsDefault.className;
    element.id = optionsDefault.id;
    element.parent = optionsDefault.parent;
    console.info('add');
};

function Events(){

}

Events.prototype.createEvent = function(){

};

Events.prototype.updateEvent = function(){

};

Events.prototype.deleteEvent = function(){

};




var data = new Data();
var markup = new Markup();
var events = new Events();

markup.createMarkup({
    tag: 'form',
    parent: 'body',
    id: '#todo_add'
});

markup.createMarkup({
    tag: 'input',
    parent: '#form',
    id: 'todo_text'
});

markup.createMarkup({
    tag: 'button',
    parent: '#form',
    id: 'todo_submit',
    content: 'Add todo'
});

document.getElementById('todo_submit').addEventListener('click', function(event){

    var todoText = todoText = document.getElementById('todo_text').value;
    var id = getId();
    markup.createMarkup({
        tag: 'div',
        parent: '#todo_items',
        id: id,
        content: todoText
    });

    markup.createMarkup({
        tag: 'input#checkbox',
        parent: id
    });

    markup.createMarkup({
        tag: 'span',
        parent: id
    });

});