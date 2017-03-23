
function A(){
    this.a = 'Success!';
}

function B(){
    this.a = new A();
}

var a = new B();
console.info(a.a.a);