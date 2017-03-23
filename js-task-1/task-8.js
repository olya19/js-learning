
function A(){
    return 'Success!';
}

function B(){
    this.a = A();
}

var a = new B();
console.info(a.a);