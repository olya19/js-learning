/**
 * Created by titar on 02.05.2017.
 */


class Markup{
    create(options){
        // tag
        // content
        // parent
        // className
        // id
        // callback
        let optionsDefault = {
            tag: 'div',
            content: '',
            parent: 'body',
            className: '',
            id: '',
            callback: undefined,
            attrs: []
        };

        options = options || {};

        for(var i in optionsDefault) {
            if (!options.hasOwnProperty(i)) {
                options[i] = optionsDefault[i];
            }
        }

        var element;

        if (options.tag === 'input#checkbox') {
            element = document.createElement('input');
            element.type = 'checkbox';
            element.value = 1;
        } else {
            element = document.createElement(options.tag);
        }

        element.innerHTML = options.content;

        if (options.className) {
            element.className += options.className;
        }

        if (options.id) {
            element.id = options.id;
        }

        if (options.tag === 'form') {
            element.action = 'javascript:void(0)';
            element.method = 'post';
        }

        if (options.attrs.length) {
            options.attrs.forEach(function(attr) {
                for (var name in attr) {
                    switch (name) {
                        default:
                            element[name] = attr[name];
                            break;
                    }
                }
            });
        }

        if (options.parent) {
            var prnt = typeof options.parent === 'string'
                ? document.querySelector(options.parent)
                : options.parent;

            if (!prnt) {
                console.error('No element found');
                return false;
            }
            prnt.appendChild(element);
        } else {
            document.body.appendChild(element);
        }
        return element;
    }


    update(query, content){
        let elements = this.find(query);
        elements[0].innerHTML = content;
    }

    delete(query){
        let elements = this.find(query);
        elements[0].remove();
    }

    find(query){
        let elements = document.querySelectorAll(query);
        return elements;
    }
}

var markup = new Markup();