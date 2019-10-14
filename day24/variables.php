
<?php
function  headline($text, $level = 1) {
    return "<h{$level}>{$text}</h{$level}>";
}
echo headline('main');
echo headline('secondary', 2);