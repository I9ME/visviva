<?php
	function load_pilar(){
		if(is_home()){
			echo "#polos";
		}
		else{
			echo get_home_url()."/pilar";
		}
	};
	function load_vis(){
		if(is_home()){
			echo "#segmentos";
		}
		else{
			echo get_home_url()."/servicos";
		}
	};
	function load_fale(){
		if(is_home()){
			echo "#fale";
		}
		else{
			echo get_home_url()."/servicos";
		}
	};
?>
<section class="Section--newfooter u-displayFlex u-flexDirectionColumn u-paddingHorizontal u-paddingTop">
	<div class="Section-content u-onlyMobile u-paddingVertical u-displayFlex u-flexJustifyContentCenter">
		<a class="Button Button--border is-animating u-borderRadius5 Button--smallSize hover u-alignCenter u-displayFlex u-flexJustifyContentCenter u-size20of24" href="<?php echo get_home_url( $blog_id = null, $path = '/cadastro/fabricante/', $scheme = null ) ?>">Seja um <strong class="u-paddingLeft--inter--half"> fornecedor</strong></a>
	</div>
	<header class="Section-content u-paddingTop u-displayFlex u-flexAlignItemsCenter u-flexJustifyContentCenter">
		<a class="u-marginTop" href="<?php echo get_home_url()?>">
			<figure class="Section-content-figure">
				<img src="<?php echo get_template_directory_uri() ?>/assets/images/vis-viva.png">
			</figure>
		</a>
	</header>
	<div class="Section-content u-displayFlex u-flexDirectionColumn u-flexJustifyContentCenter u-flexAlignItemsCenter u-sizeFull u-paddingTop--inter u-paddingVertical">
		<ul class="Section-items Navigation Navigation--footer u-displayFlex u-flexFlowWrap u-alignItemsCenter u-flexJustifyContentFlexStart u-sizeFull">
			<li class="Section-items-item level-1 u-marginHorizontal--inter--half">
				<ul class="Section-items u-paddingTop--inter--half">
					<li class="Section-items-item">
						<a class="Section-items-item-resume" href="<?php echo get_home_url();?>">Início</a>
					</li>
					<li class="Section-items-item">
						<a class="Section-items-item-resume" href="<?php load_pilar();?>">Pilares</a>
					</li>
					<li class="Section-items-item">
						<a class="Section-items-item-resume" href="<?php load_vis();?>">O Vis Viva</a>
					</li>
					<li class="Section-items-item">
						<a class="Section-items-item-resume" href="https://www.visvivaclub.com.br/blog-vida-saudavel/" target="_blank">Blog</a>
					</li>
					<li class="Section-items-item">
						<a class="Section-items-item-resume" href="<?php load_fale(); ?>">Fale Conosco</a>
					</li>
				</ul>
			</li>
			<li class="Section-items-item level-1 u-marginHorizontal--inter--half">
				<ul class="Section-items u-paddingTop--inter--half">
					<li class="Section-items-item">
						<a class="Section-items-item-resume" href="<?php echo get_home_url(); ?>">Entrar</a>
					</li>
					<li class="Section-items-item">
						<a class="Section-items-item-resume" href="<?php echo get_home_url(); ?>">Registrar-se</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</section>