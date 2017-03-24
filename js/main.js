function Data() {

    this.createData = function (key, data) {
        data = data || prompt('Input data:');
        localStorage.setItem(key, data);
    };

    this.readData = function (key) {
        return localStorage.getItem(key);
    };

    this.updateData = function (key, newData) {
        localStorage.setItem(key, newData);
    };

    this.deleteData = function (key) {
        localStorage.removeItem(key);
    };

}

function Murkup() {
    var logs = new Logs();
    this.createMarkup = function (tag, content) {
        if (tag !== undefined) {
            var element = document.createElement(tag);
            element.innerHTML = content;
            document.body.appendChild(element);

            logs.i('Success: added new tag \'' + tag + '\'.');

        } else {

            logs.e('Tag addition failed: tag name does not specify.');

        }
    };

    this.deleteMarkupByTagName = function (tag, position) {

        if (tag !== undefined && position !== undefined) {
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
        if (id !== undefined){

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


function Logs() {

    this.l = function (message) {
        console.log(message);
    };

    this.i = function (message) {
        console.info(message);
    };

    this.w = function (message) {
        console.warn(message);
    };

    this.e = function (message) {
        console.error(message);
    };

    this.ts = function (timerName) {
        console.time(timerName);
    };

    this.te = function (timerName) {
        console.time(timerName);
    };
}

var data = new Data();
var markup = new Murkup();

data.createData('a', 'value');

var a = data.readData('a');

console.info(a);

data.updateData('a', 'new value');
markup.createMarkup('h1', a);
markup.deleteMarkupByTagName('div', 1);
markup.deleteMarkupByIdName('pasge');