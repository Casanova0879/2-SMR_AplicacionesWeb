<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Inscripción recibida</title>
</head>
<body>
    
    <h1>Práctica 4 de Álvaro Casanova</h1>
    <h2>Inscripción recibida</h2>
    <?php
        // Recojo los tres datos enviados por el formulario.
        $nombre = $_POST["nombre"];
        $edad = intval($_POST["edad"]);
        $ciclo = $_POST["ciclo"];
        // Muestro el nombre y el ciclo de la inscripción.
        echo "<p>Hola, " . $nombre . ". Te has inscrito en " . $ciclo . ".</p>";
        // Compruebo si la edad es de 18 años o más.
        if ($edad >= 18) {
            echo "<p>Eres mayor de edad (" . $edad . " años).</p>";
        } else {
            echo "<p>Eres menor de edad (" . $edad . " años).</p>";
        }
    ?>
    <!-- Permito volver a rellenar el formulario. -->
    <p><a href="formulario.html">Volver al formulario</a></p>
</body>
</html>
