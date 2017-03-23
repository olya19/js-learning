function Data() {
    this.createData = function(key, data){
        data = data || prompt('Input data:');
        localStorage.setItem(key, data);
    };

    this.readData = function(key){
        return localStorage.getItem(key);
    };

    this.updateData = function(key, newData){

    };

    this.deleteData = function (key) {

    };

}

function Murkup() {

    this.createMarkup = function(tag, content){
        var element = document.createElement(tag);
        element.innerHTML = content;
        document.body.appendChild(element);
    }

}

var data = new Data();
var markup = new Murkup();

data.createData('a');

var a = data.readData('a');

console.info(a);

markup.createMarkup('h1', a);