function start() {
    if(sessionStorage.getItem('logged')!= null ){
        console.log("hola")
        var myobj = document.getElementById("log");
        myobj.remove();
        var tempDiv = document.createElement('div');
        var d1 = document.getElementById('reg');
        d1.insertAdjacentHTML('afterend', '<a class="btn btn-primary bg-white text-dark" href="index_MiCuenta.html">Mi cuenta</a>');
    }
}