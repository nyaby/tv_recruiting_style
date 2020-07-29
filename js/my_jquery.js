// もっと見るボタン

$(function () {
  $('.button').prevAll().hide();
  $('.button').click(function () {
      if ($(this).prevAll().is(':hidden')) {
          $(this).prevAll().slideDown();
          $(this).text('閉じる').addClass('close');
      } else {
          $(this).prevAll().slideUp();
          $(this).text('もっと見る').removeClass('close');
      }
  });
});

// クリックしたときの動作
$(function(){
    $('.tab').on('click', function(event){
        event.preventDefault();
        $(this).toggleClass('active');
        $('.tab').removeClass('active');
        $(this).addClass('active');
    });
});

//ドロップダウンメニュー
//初回表示
$(function(){
    
  if(window.matchMedia('(max-width: 960px)').matches) {
    $('#drop_menu_hidden').hide();  // Window スマホサイズの時
  }
  else {
    $('#drop_menu_hidden').show();  // Window PCサイズの時
  }
  $('#spnavi li').click(function(){
    if($('#drop_menu_hidden').is(':hidden')){
      $('#drop_menu_hidden:not(:animated)').slideDown('fast');
    }
    else {
      $('#drop_menu_hidden:not(:animated)').slideUp('fast');
    }
  });

  });

  $(function(){
    $(".dayAdd").html ("<span>8/10</span>");
  });