<?php
$recepient = "zlodei2991@gmail.com";
$sitename = "portfolio";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nТелефон: $phone \nПочта: $email\nСообщение: $text";

$pagetitle = "Заявка с портфолио\"$sitename\"";
mail($recepient, $pagetitle, $messeges, "Content-type: text/plain; charset=\"utf-8\"\n From:recepient");
?>