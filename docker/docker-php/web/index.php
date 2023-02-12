<html>
    <head>
        <title>Rappers</title>
    </head>
    <body>
        <h1>Rappers names:</h1>
        <ul>
            <?php
                $json = file_get_contents('http://rappers-service');
                $obj = json_decode($json);

                $rappers = $obj->Names;

                foreach ($rappers as $name){
                    echo "<li>$name</li>";
                }
            ?>
        </ul>
    </body>
</html>