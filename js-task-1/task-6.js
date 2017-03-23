
function A(){
    return B();
}

function B(){
    return 'Success!';
}

console.info(A());