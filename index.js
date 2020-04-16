'use strict';


const image_src = new Array(`my-icon.png`, `csharp-go.PNG`);
let num = 0;

function slideAtTime() {
    if (num == image_src.length - 1) {
        num = 0;
    }
    else {
        num++;
    }
    $(".main-visual").css({
        backgroundImage: 'url(img/' + image_src[num] + ')'
    });

    setTimeout("slideAtTime()", 5000)
}

slideAtTime();



$(function () {
    // #で始まるアンカーをクリックした場合に処理
    $('a[href^=#]').click(function () {
        // スクロールの速度
        var speed = 400; // ミリ秒
        // アンカーの値取得
        var href = $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top;
        // スムーススクロール
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
});