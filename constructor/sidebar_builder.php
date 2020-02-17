<?php  
	if (! defined('TMPATH') ) {
		define('TMPATH', "jc_include/builder");
	}
?>

<div class="nav">
	<a class="nav-link spa-model" active-page="builder" load="" inner-id="#content" mode="sync"><i class="fas fa-rss-square"></i> Started</a>
	<a class="nav-link spa-model" active-page="builder" load="<?= TMPATH ?>/admin-panel.php" inner-id="#content" mode="async"><i class="fas fa-rss-square"></i> Admin Panel</a>
	<a class="nav-link spa-model" active-page="builder" load="<?= TMPATH ?>/landing-page.php" inner-id="#content" mode="async"><i class="fas fa-rss-square"></i> Landing Page</a>
	<a class="nav-link spa-model" active-page="builder" load="<?= TMPATH ?>/content-trimer.php" inner-id="#content" mode="async"><i class="fas fa-rss-square"></i> Content Trimer</a>
</div>

