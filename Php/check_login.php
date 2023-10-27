
<?php

session_start();

if (isset($_SESSION["Id"])) {
    echo "true";
} else {
    echo "false";
}

