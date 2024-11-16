
function loguear()
{
    let user=document.getElementById("usuario").value;
    let pass=document.getElementById("clave").value;

    if(user=="inpec" && pass=="1234")
    {
        window.location.href="inicio.html";
    }
    else
    {
        alert("Datos incorrectos");

    }

}
    