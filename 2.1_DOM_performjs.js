function add(){
    var add = document.getElementById('dom_opt');
            var adding = document.createTextNode(" adding text ");
            add.appendChild(adding);
}
function remove() {
    var list = document.getElementById('dom_opt');
    var lastItem = list.lastChild;
    if (lastItem) {
        list.removeChild(lastItem);
    }
}
function change(){
    document.getElementById('dom_opt').style.color = 'yellow';
    document.getElementById('dom_opt').style.backgroundColor = 'black';
    document.getElementById('dom_opt').style.width = '300px';
}