<<<<<<< HEAD
<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);

if (empty($arResult))
	return;
?>
<nav class="d-block">
	<ul class="nav flex-column">
		<?foreach($arResult as $itemIdex => $arItem):?>
			<?if ($arItem["DEPTH_LEVEL"] == "1"):?>
				<li class="nav-item">
					<a href="<?=htmlspecialcharsbx($arItem["LINK"])?>" class="text-white nav-link"><?=htmlspecialcharsbx($arItem["TEXT"])?></a>
				</li>
			<?endif?>
		<?endforeach;?>
	</ul>
=======
<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);

if (empty($arResult))
	return;
?>
<nav class="d-block">
	<ul class="nav flex-column">
		<?foreach($arResult as $itemIdex => $arItem):?>
			<?if ($arItem["DEPTH_LEVEL"] == "1"):?>
				<li class="nav-item">
					<a href="<?=htmlspecialcharsbx($arItem["LINK"])?>" class="text-white nav-link"><?=htmlspecialcharsbx($arItem["TEXT"])?></a>
				</li>
			<?endif?>
		<?endforeach;?>
	</ul>
>>>>>>> 6c681af9349b7a64bd83230efb3e86525f8fc49e
</nav>