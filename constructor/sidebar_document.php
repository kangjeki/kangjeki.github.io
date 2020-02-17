<?php  
	if (! defined('CNTPATH') ) {
		define('CNTPATH', "jc_include/documents/content");
	}
	if (! defined('CPNPATH') ) {
		define('CPNPATH', "jc_include/documents/component");
	}
?>
<div class="nav">
	<a class="nav-link spa-model" active-page="documentation" load="" inner-id="#content" mode="sync"><i class="fas fa-rss-square"></i> Introduction</a>
	<a class="nav-link spa-model" active-page="documentation" load="<?=CNTPATH;?>/layout.jc" inner-id="#content" mode="async"><i class="fas fa-rss-square"></i> Layout</a>
	<a class="nav-link spa-model expand" expand-target="#data-content"><i class="fas fa-rss-square"></i> Content</a>
	<div class="expand-group" id="data-content">
		<a class="nav-link spa-model" active-page="documentation" load="<?=CNTPATH;?>/comment-form.jc" inner-id="#content" mode="async">Comment Form</a>
		<a class="nav-link spa-model" active-page="documentation" load="<?=CNTPATH;?>/form.jc" inner-id="#content" mode="async">Form</a>
		<a class="nav-link spa-model" active-page="documentation" load="<?=CNTPATH;?>/grid-columns.jc" inner-id="#content" mode="async">Grid Columns</a>
		<a class="nav-link spa-model" active-page="documentation" load="<?=CNTPATH;?>/hirarki-struktur.jc" inner-id="#content" mode="async">Hirarki Struktur</a>
		<a class="nav-link spa-model" active-page="documentation" load="<?=CNTPATH;?>/spa-model.jc" inner-id="#content" mode="async">SPA Model</a>
		<a class="nav-link spa-model" active-page="documentation" load="<?=CNTPATH;?>/sidebar.jc" inner-id="#content" mode="async">Sidebar</a>
		<a class="nav-link spa-model" active-page="documentation" load="<?=CNTPATH;?>/table.jc" inner-id="#content" mode="async">Table</a>
		<a class="nav-link spa-model" active-page="documentation" load="<?=CNTPATH;?>/text-editor.jc" inner-id="#content" mode="async">Text Editor</a>
	</div>
	<a class="nav-link spa-model expand" expand-target="#data-component"><i class="fas fa-rss-square"></i> Component</a>
	<div class="expand-group" id="data-component">
		<a class="nav-link spa-model" active-page="documentation" load="<?=CPNPATH;?>/alert.jc" inner-id="#content" mode="async">Alert</a>
		<a class="nav-link spa-model" active-page="documentation" load="<?=CPNPATH;?>/badge.jc" inner-id="#content" mode="async">Badge</a>
		<a class="nav-link spa-model" active-page="documentation" load="<?=CPNPATH;?>/breadcrumb.jc" inner-id="#content" mode="async">Breadcrumb</a>
		<a class="nav-link spa-model" active-page="documentation" load="<?=CPNPATH;?>/button.jc" inner-id="#content" mode="async">Button</a>
		<a class="nav-link spa-model" active-page="documentation" load="<?=CPNPATH;?>/box-content.jc" inner-id="#content" mode="async">Box Content</a>
		<a class="nav-link spa-model" active-page="documentation" load="<?=CPNPATH;?>/box-dialog.jc" inner-id="#content" mode="async">Box Dialog</a>
		<a class="nav-link spa-model" active-page="documentation" load="<?=CPNPATH;?>/card.jc" inner-id="#content" mode="async">Card</a>
		<a class="nav-link spa-model" active-page="documentation" load="<?=CPNPATH;?>/dropdown.jc" inner-id="#content" mode="async">Dropdown</a>
		<a class="nav-link spa-model" active-page="documentation" load="<?=CPNPATH;?>/expander.jc" inner-id="#content" mode="async">Expander</a>
		<a class="nav-link spa-model" active-page="documentation" load="<?=CPNPATH;?>/input.jc" inner-id="#content" mode="async">Input</a>
		<a class="nav-link spa-model" active-page="documentation" load="<?=CPNPATH;?>/input-toggle.jc" inner-id="#content" mode="async">Input Toggle</a>
		<a class="nav-link spa-model" active-page="documentation" load="<?=CPNPATH;?>/loader.jc" inner-id="#content" mode="async">Loader</a>
		<a class="nav-link spa-model" active-page="documentation" load="<?=CPNPATH;?>/modal.jc" inner-id="#content" mode="async">Modal</a>
		<a class="nav-link spa-model" active-page="documentation" load="<?=CPNPATH;?>/note.jc" inner-id="#content" mode="async">Note</a>
		<a class="nav-link spa-model" active-page="documentation" load="<?=CPNPATH;?>/navigasi.jc" inner-id="#content" mode="async">Navigasi</a>
		<a class="nav-link spa-model" active-page="documentation" load="<?=CPNPATH;?>/pagination.jc" inner-id="#content" mode="async">Pagination</a>
		<a class="nav-link spa-model" active-page="documentation" load="<?=CPNPATH;?>/progresbar.jc" inner-id="#content" mode="async">Progresbar</a>
		<a class="nav-link spa-model" active-page="documentation" load="<?=CPNPATH;?>/scroll-switch.jc" inner-id="#content" mode="async">scroll switch</a>
		<a class="nav-link spa-model" active-page="documentation" load="<?=CPNPATH;?>/slide.jc" inner-id="#content" mode="async">slide</a>
		<a class="nav-link spa-model" active-page="documentation" load="<?=CPNPATH;?>/tooltips.jc" inner-id="#content" mode="async">Tooltips</a>
	</div>
	<a class="nav-link spa-model" active-page="documentation" load="<?=CNTPATH;?>/color-reference.jc" inner-id="#content" mode="async"><i class="fas fa-rss-square"></i> Color Reference</a>
	<a class="nav-link" href="jc_include/icon/index.php" target="_blank"><i class="fas fa-rss-square"></i> Font Icon Reference</a>
</div>

