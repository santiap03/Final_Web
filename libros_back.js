window.onload = start;
var respuesta;
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
function search(){
    const list1= ["inicio", "mision", "publico"]
    const list2= ["comienzo", "beneficio", "beneficios", "razones", "consejos"]
    const list3= ["libros", "datos", "lista"]
    const list4= ["sugerencia", "queja", "quejas", "reclamo", "reclamos"]
    const list5= ["registro", "inscripcion"]
    const list6= ["personal", "cuenta"]
    var obje = (document.getElementById("sbar")).value;
    console.log(obje);
    if(list1.indexOf(obje) > -1){
        console.log("lo encontro en 1")
        window.location.href = "index_main.html";
    }
    else if(list2.indexOf(obje) > -1){
        console.log("lo encontro en 2")
        window.location.href = "index_Motivacion.html";
    }
    else if(list3.indexOf(obje) > -1){
        console.log("lo encontro en 3")
        window.location.href = "index_libros.html";
    }
    else if(list4.indexOf(obje) > -1){
        console.log("lo encontro en 4")
        window.location.href = "index_sugerencias.html";
    }
    else if(list5.indexOf(obje) > -1){
        console.log("lo encontro en 5")
        window.location.href = "index_registro.html";
    }
    else if(list6.indexOf(obje) > -1){
        console.log("lo encontro en 6")
        window.location.href = "index_libros.html";
    };

   };  

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('sbooks');
    filter = input.value.toUpperCase();
    ul = document.getElementById("list-books");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }