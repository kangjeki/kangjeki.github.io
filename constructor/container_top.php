<?php
	if ( ! defined('CTR') ) {
		define("CTR", dirname(__FILE__) . "/../constructor/" );
	}
	if ( ! defined('SIDEBAR') ) {
		define('SIDEBAR', $sidebar_opsi);
	}

echo '<div class="app">';
?>	
<?php require (CTR . "header_box.php"); 

echo '<div class="container">
		<div class="row content-wrapper">
			<div class="col-2 sidebar" id="sidebar-left" mode="fixed">';
				require (CTR . SIDEBAR .".php");
			echo '</div>
			<div class="col-8">
				<div id="content">';
?>