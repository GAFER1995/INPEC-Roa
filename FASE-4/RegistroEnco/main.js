var menu = document.querySelectorAll('.option');

menu.forEach(function(item){
    item.addEventListener('click', function(i){

        var elemento = i.target.parentNode;
        console.log(elemento.children);
        elemento.children[1].classList.toggle('activo');

    })
})

function bloqueo(){

    if(document.getElementById('estado').value=='Recibido'){

    document.getElementById('fechaE').disabled=true;
    document.getElementById('fechaD').disabled=true;

} else{
    document.getElementById('fechaE').disabled=false;
    document.getElementById('fechaD').disabled=false;

    if(document.getElementById('estado').value=='Devuelto'){

    document.getElementById('fecha').disabled=true;
    document.getElementById('fechaE').disabled=true;

} else{
    document.getElementById('fecha').disabled=false;
    document.getElementById('fechaE').disabled=false;
    if(document.getElementById('estado').value=='Entregado'){

    document.getElementById('fecha').disabled=true;
    document.getElementById('fechaD').disabled=true;

} else{
    document.getElementById('fecha').disabled=false;
    document.getElementById('fechaD').disabled=false;
    if(document.getElementById('estado').value=='Novedad'){

    document.getElementById('fecha').disabled=true;
    document.getElementById('fechaE').disabled=true;
    document.getElementById('fechaD').disabled=true;

} else{
    document.getElementById('fecha').disabled=false;
    document.getElementById('fechaE').disabled=false;
    document.getElementById('fechaD').disabled=false;
}
}
}
}
    



    
}
