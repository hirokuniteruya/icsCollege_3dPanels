$(function () {
  $('.panel').animate({ top: 0, left: 0 }, 3000, "easeInOutQuint");

  /********* 以下、画面左上のコントロールパネルに関するの記述 *********/
  const rotManager = document.getElementById('rotManager');
  const rotRangeX = document.getElementById('rotRange-x');
  const rotRangeY = document.getElementById('rotRange-y');
  const $indicatorX = $('#indicator-X');
  const $indicatorY = $('#indicator-Y');
  const $wrapper = $('.wrapper');

  // フェーダー操作により、div.wrapperのtransformプロパティを更新する
  rotManager.addEventListener('input', function () {
    $wrapper.css({ transform: `rotateX(${rotRangeX.value}deg) rotateY(${rotRangeY.value}deg)` });
    $indicatorX.text(rotRangeX.value);
    $indicatorY.text(rotRangeY.value);
  })

  // アニメーションを再発火させる為のbutton#replayのクリックイベント
  $('#replay').click(() => {
    $('.panel').stop().css({ top: "", left: "" });
    $('.panel').animate({ top: 0, left: 0 }, 3000, "easeInOutQuint");
  });
  /**************** コントロールパネルの記述ここまで ****************/
});
