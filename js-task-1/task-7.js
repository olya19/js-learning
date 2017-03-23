
function A(){
    this.a = 'Success!';
}

function B(){
    var a = new A();
    console.info(a.a);
}

B();