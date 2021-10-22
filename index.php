<!DOCTYPE html>
<html>
<head>
	<title>Ejemplo sesion PHP</title>
	<meta charset="utf-8">
</head>
<body>
	<h1>Iniciar sesion</h1>
	<form action="control_sesion.php" method="POST">
		<?php
		if(isset($_GET['error']) && $_GET['error']==true){
			print("<h4>Error: Nombre de usuario o contraseña invalidos</h4>");
		} 
		?>
		<label>Ususario:</label>
			<input type="text" name="usuario"><br><br>
		<label>Contraseña:</label>
			<input type="password" name="contrasena"><br><br>

		<input type="submit" name="enviar" value="Login	">
	</form>
</body>
</html>