/**
 * Created by Olga on 17.03.2017.
 */

window.onload = function () {
    var title = document.getElementById('page').querySelector('h1');
    console.info(title.innerHTML);
    title.innerHTML = 'Hello';
    console.info(title.innerHTML);
    setInterval( function () {
        console.info('title change');
        if(title.style.backgroundColor == 'blue'){
            title.style.backgroundColor = 'red';
        } else{
            title.style.backgroundColor = 'blue';
        }

        }, 1000);
};