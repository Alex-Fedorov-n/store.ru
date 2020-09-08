<?php
if (!function_exists('getResizedImageById')) {
    function getResizedImageById(string $imgId, array $arSize = ['width' => '200', 'height' => '150'])
    {
        if (!isset($arSize['width']) || !isset($arSize['height'])) {
            return false;
        }

        $result = [];

        if (!empty($imgId)) {
            $result = CFile::ResizeImageGet(
                $imgId,
                $arSize,
                BX_RESIZE_IMAGE_PROPORTIONAL,
                true
            );
        }
    }
}