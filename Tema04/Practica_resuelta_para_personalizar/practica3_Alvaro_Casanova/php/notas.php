<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi nota media</title>
</head>
<body>
    <!-- Muestro el nombre del autor de la práctica. -->
    <h1>Práctica 4 de Álvaro Casanova</h1>
    <h2>Mi nota media</h2>
    <?php
        // Guardo el módulo y las tres notas inventadas.
        $modulo = "Aplicaciones Web";
        $nota1 = 7;
        $nota2 = 6;
        $nota3 = 8;
        // Sumo primero las tres notas y después divido entre tres.
        $media = ($nota1 + $nota2 + $nota3) / 3;
        // Muestro el módulo, las notas y la media calculada.
        echo "<p>" . $modulo . ": mis notas son " . $nota1 . ", " . $nota2 . " y " . $nota3 . ". Mi media es " . $media . ".</p>";
        // Según la media, muestro si está aprobado o suspenso.
        if ($media >= 5) {
            echo "<p>Aprobado</p>";
        } else {
            echo "<p>Suspenso</p>";
        }
    ?>
</body>
</html>
