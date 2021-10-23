window.onload = start;
var respuesta;
function start() {
    /*
    //sessionStorage.setItem('logged', 'value') //creacion de bandera que indica que esta loggeado
    fetch('http://santiagoalvarez:8080/clientes')
        .then(response => response.json())
        .then(function (response){
            console.log(response)
            var res= response;
        })
        .then(data => console.log(data));

    fetch('http://santiagoalvarez:8080/clientes')
        .then(function (response){
            if (response.ok){
                console.log("Consulta correcta");
            }
            else{
                console.log("Consulta incorrecta");
            }
        })
        .then(function (data){
            console.log(data);
            respuesta = data;
        });
*/
    if(sessionStorage.getItem('logged')!= null ){
        console.log("hola")
        var myobj = document.getElementById("log");
        myobj.remove();
        var tempDiv = document.createElement('div');
        var d1 = document.getElementById('reg');
        d1.insertAdjacentHTML('afterend', '<a class="btn btn-primary bg-white text-dark" href="index_MiCuenta.html">Mi cuenta</a>');
    }
}