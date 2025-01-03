var menu = document.querySelectorAll('.option');

menu.forEach(function(item){
    item.addEventListener('click', function(i){

        var elemento = i.target.parentNode;
        console.log(elemento.children);
        elemento.children[1].classList.toggle('activo');

    })
})