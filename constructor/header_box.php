<?php  
if (! defined('INCPATH') ) {
	define( "INCPATH", "jc_include/" );
}
?>

<div class="header" mode="fixed">
	<nav class="row navbar navbar-dark">
		<div class="col-2 navbar-brand">
			<div class="navbar-itme navbar-toggle">
				<button class="btn btn-sidebar" expand-target="#sidebar-left">
					<i class="fas fa-bars"></i>	
				</button>
			</div>
			<div class="navbar-item">
				<div class="brand">
					<img src="<?= INCPATH ?>img/img_atb/logo.png">	
				</div>
			</div>
			<div class="navbar-itme navbar-toggle">
				<button class="btn btn-navbar" expand-target=".header">
					<i class="fas fa-ellipsis-v"></i>
				</button>
			</div>
		</div>
		<div class="col-6 navbar-left">
			<div class="navbar-item">
				<a href="index" class="navbar-link">Home</a>
			</div>
			<div class="navbar-item">
				<a href="documentation" class="navbar-link">Documentation</a>
			</div>
			<div class="navbar-item hover-down">
				<a class="navbar-link">Sources</a>
				<ul class="hover-menu">
					<li>
						<a href="css-library" class="hover-link">CSS Library</a>
					</li>
					<li>
						<a href="javascript-library" class="hover-link">Javascript Library</a>
					</li>
					<li>
						<a href="php-library" class="hover-link">PHP Library</a>
					</li>
				</ul>
			</div>
			<div class="navbar-item">
				<a href="applications" class="navbar-link">Applications</a>
			</div>
			<div class="navbar-item">
				<a href="builder" class="navbar-link">Builder</a>
			</div>
		</div>
		<div class="col-4 navbar-right">
			<div class="navbar-item navbar-item-group">
				<a class="navbar-link" onclick="backPage()"><i class="fas fa-long-arrow-alt-left" gray></i></a>
				<a class="navbar-link" onclick="forwardPage()"><i class="fas fa-long-arrow-alt-right" gray></i></a>
			
				<a class="navbar-link" onclick="refreshPage()"><i class="fas fa-sync-alt" gray></i></a>
				
				<a class="navbar-link" id="btn-full-sc"><i class="fas fa-expand" gray></i></a>
				<a class="navbar-link hide-btn-full-sc" id="btn-exit-full-sc"><i class="fas fa-compress"></i></a>
			</div>
		</div>
	</nav>
</div>