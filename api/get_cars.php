<?php
require_once '../config/config_public.php';

$cars = [];
$r = $mysqli->query("SELECT * FROM `cars`");
while ($f = $r->fetch_assoc()) {
    $cars[] = $f;
}

die(json_encode($cars));