<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$msg = $_POST['msg'];
$token = "1853624459:AAEZgYSlGeC1Z-CMA89czqoyfTccCQjEpy0";
$chat_id = "-565561791";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Сообщение:' => $msg
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");


?>