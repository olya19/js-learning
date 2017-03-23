
function A(){
    this.a = 'Success!';
}

function B(){
    this.a = 'Not Success!';
}

function C(){
    console.info(this.a);
}

var a = new A();
var b = new B();

C.call(a);


// a = { a : 'Success!'}
// b = { a : 'Not Success!'}