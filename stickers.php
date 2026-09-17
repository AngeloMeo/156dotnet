<?php

@extract($_POST);
$navn = stripslashes($navn);
$epost = stripslashes($epost);
$subject = "New stickers order";
$adresse = stripslashes($adresse);
$postnummer = stripslashes($postnummer);
$poststed = stripslashes($poststed);
$antall = stripslashes($antall);
$betalingsform = stripslashes($betalingsform);
$kommentar = stripslashes($kommentar);

$innhold = "New order below:\n\n$navn\n$adresse\n$adresse2\n$poststed\t$postnummer\n$county\n$country\n\n$epost\n\nComment: $kommentar\n\nOrder details:\n\n$antall1 $style1 $farge1 $cut1\n$antall2 $style2 $farge2 $cut2\n$antall3 $style3 $farge3 $cut3\n$antall4 $style4 $farge4 $cut4\n\nEND.";

mail('stickers@alfa156.net',$subject,$innhold);
header("location:stickersconf.html");
?>
