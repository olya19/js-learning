/**
 * Created by titar on 02.05.2017.
 */
function getId() {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let id = '';
    for (let i = 0; i < 6; i++ ) {
        id += letters[Math.floor(Math.random() * 26)];
    }
    return id;
}