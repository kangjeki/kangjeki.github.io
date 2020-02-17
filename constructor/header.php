<?php  
if (! defined('INCPATH') ) {
	$pathREQ 	= "jc_include/";

	$ReqPATH 	= $_SERVER["PHP_SELF"];
	$ReqPATH 	= explode("/", $ReqPATH);
	array_pop($ReqPATH);
	$ReqPATH 	= end( $ReqPATH );
	if ( $ReqPATH === "jc_admin" ) {
		$pathREQ 	= "../jc_include/";
	}

	define( "INCPATH", $pathREQ );
}

if (! defined('CSSPATH') ) {
	define( "CSSPATH", INCPATH . "css/" );
}

if ( is_null($title) ) {
	$title = "JC Boster";
}
echo '<!DOCTYPE html>
<html>
<head>';
echo "<title>" . $title . "</title>";
echo '<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="shortcut icon" type="image/png" href="'. INCPATH .'img/img_atb/favicon.png">';

$cssPath = glob(CSSPATH . "*.css");
foreach ( $cssPath as $path ) {
	echo '
	<link rel="stylesheet" type="text/css" href="'. $path .'">';
}

echo '
<script type="text/javascript" src="'. INCPATH .'js/jc_booster.js"></script>';

echo '
</head>
<body>';
