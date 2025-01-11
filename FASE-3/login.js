

let control=0;


function loguear()
{
    let user=document.getElementById('usuario').value;
    let pass=document.getElementById('clave').value;

    if(user=='inpec' && pass=='1234')
    {

        alert("Datos correctos, ingreso exitoso");
        window.location.href="/FASE-4/Inicio/inicio.html";
       
    }else 
    {
        alert("Las credenciales son incorrectas o se encuentran vacias, Intetnte de nuevo");
       
        control++;
        if(control>=3){
            alert("Intentos agotados, acceso bloqueado contactar con soporte tecnico");
        }
       

    }

}
    