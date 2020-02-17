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

if (! defined('JSPATH') ) {
	define( "JSPATH", INCPATH . "js/" );
}

$jsPath = glob(JSPATH . "*.js");
foreach ( $jsPath as $path ) {
	$filModulJS = explode("/", $path);
	if ( end($filModulJS) !== "jc_booster.js" ) {
		echo '
		<script type="text/javascript" src="'. $path .'"></script>';	
	}
}

echo '
</body>
</html>';
