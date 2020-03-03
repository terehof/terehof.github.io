<?php

$frm_name  = 'terehov.space'; // from name
$frm_mail = "terehovsergej@terehof.github.io";
$recepient = 'terehovsergej@gmail.com';
$sitename  = 'terehof.github.io';
$subject   = 'Ахтунг!!! Сообщение с сайта!';


$name = trim($_POST["name"]);
$phone = trim($_POST["email"]);
$message = trim($_POST["message"]);

$send_message = "<div style='font-size: 16px;'>
<br>
<b>Name:</b> $name <br><br>
<b>Email/Phone:</b> $name <br><br>
<b>Message:</b> $message
<br>
</div>";

mail($recepient, $subject, $send_message, "From: $frm_name <". $frm_mail.">" . "\r\n" . "Reply-To: terehovsergej@gmail.com" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
echo 'Ok!';