
/**
 * Created by Olga on 17.03.2017.
 */

window.onload = function () {
    var title = document.getElementById('page').querySelector('h1');
    var isBlue = false;
    setInterval( function () {
        console.info('title change');
        if(isBlue){
            title.style.backgroundColor = 'red';
            isBlue = false;
        } else{
            title.style.backgroundColor = 'blue';
            isBlue = true;
        }

        }, 1000);
};

