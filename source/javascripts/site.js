/*=============================================================================
  CSS補助としてのJavaScript達
  gar-den.jp等を参考に
=============================================================================*/

/*-----------------------------------------------------------------------------
  機能: 画面スクロール時、active クラス付与
  用途: 固定フッターでの電話番号欄表示など
-----------------------------------------------------------------------------*/
function fixed_footer() {
  $(window).scroll(function() {
    const $fixed_footer = $('#fixed_footer');
    const trigger_position = 150;
    let   current_position = $(this).scrollTop();

    if (current_position > trigger_position) {
      $fixed_footer.addClass('active');
    } else {
      $fixed_footer.removeClass('active');
    }
  });
}

/*-----------------------------------------------------------------------------
  jQuery 即時関数
-----------------------------------------------------------------------------*/
(function($) {
  $(function() {

    // 固定フッター
    fixed_footer();

    // 先頭へ戻るボタン 初期状態では非表示
    const $pagetop = $(".pagetop");
    $pagetop.hide();

    // 100pxスクロールしたら表示
    $(window).scroll(function() {
      $(this).scrollTop() > 100 ? $pagetop.fadeIn() : $pagetop.fadeOut()
    });
    // クリックされたら、先頭へ
    $pagetop.on('click', function() {
      $("body,html").animate({
        scrollTop: 0
      }, 500);
    });
  });
})(jQuery);
