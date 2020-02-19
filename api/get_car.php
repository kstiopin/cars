<?php
require_once '../config/config_public.php';

$car = ['spares' => [], 'repairs' => []];
$r = $mysqli->query("
    SELECT `spares`.`id` AS spareId, `spares`.`name` AS spareName, mileage, additional
    FROM `spares`
    LEFT JOIN `car_spares` ON `spares`.`id` = `car_spares`.`spare_id` AND `car_id` = ".$_GET['carId']);
while ($f = $r->fetch_assoc()) {
    $car['spares'][] = $f;
}
$r = $mysqli->query("SELECT `spare_id`, `date`, `mileage`, `details` FROM `repairs` WHERE `car_id` = ".$_GET['carId']);
while ($f = $r->fetch_assoc()) {
    $car['repairs'][] = $f;
}

die(json_encode($car));