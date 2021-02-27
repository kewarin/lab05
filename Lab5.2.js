const input = document.querySelector('#myInput');
input.addEventListener('keyup',Addtodo());

var list = document.querySelector('div');

function Addtodo(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        var input = document.getElementsById('myInput').value;
        var icon = document.createElement('icon');
        icon.className = "fa fa-trash";
        var li = document.createElement('div');

        li.appendChild(document.createTextNode(input+' '));
        li.appendChild(icon);
        list.appendChild(li);

        document.body.appendChild(li).classList.add('complete');
        document.getElementsById('myInput').value='';

        icon.addEventListener('click', function() {
            icon.parentElement.remove();
            list.classList.remove('complete');
        });

        li.addEventListener('click',function() {
             li.classList.add('done');
        });
    }

}





