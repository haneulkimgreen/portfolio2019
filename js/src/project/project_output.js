// project_output.js
(function($) {
  // 아이템 변수 지정
  var projectItem = $('.project_item');
  var item01 = $('.item_01');
  var item02 = $('.item_02');
  var item03 = $('.item_03');
  var item04 = $('.item_04');
  var item05 = $('.item_05');
  var item06 = $('.item_06');
  var item07 = $('.item_07');
  var item08 = $('.item_08');
  var item09 = $('.item_09');
  var item10 = $('.item_10');
  var item11 = $('.item_11');
  var item12 = $('.item_12');
  var itemInfo = $('.item_info');

  // item에 hover시 확대
  projectItem.on('mouseenter', function(e){
    e.preventDefault();
    $(this).addClass('item_hover');
  });

  // item에 hover시 같은 줄 item들 이동
  // 1,6 양 끝은 같은 줄 이동과 해당아이템의 확대,이동 동시 실행. 위의 'item에 hover시 확대'기능을 죽이고 'item_eff01'추가됨. >>>시간 날때 줄일것.
  item01.on('mouseenter', function(e){
    e.preventDefault();
    $(this).addClass('item_eff01');
    $(this).siblings().addClass('item_move02');
    // item에 주는 기능은 늘리기와 이동 두가지이다.
    // 두 기능 모두 css에서 따로 설정한 클래스를 적용하던지 js의 코드 css로 적용하던지 통일시켜야한다. 통일시키지 않으면 하나의 기능은 적용되지 않는 오류 발생.
    // 01과 06은 기준점도 잡아야 하므로 늘리기,이동을 동시에 해야함. 별도의 클래스를 새로 만들지 않고 기존 클래서와 겹쳐 사용하면 오류 발생. 
    // $(this).siblings().css({transform: 'translate3d(250px, 0, 0)'});
  });

  item06.on('mouseenter', function(e){
    e.preventDefault();
    $(this).addClass('item_eff02');
    $(this).siblings().addClass('item_move04');
  });

  item02.on('mouseenter', function(e){
    e.preventDefault();
    item01.addClass('item_move03');
    item03.addClass('item_move01');
    item04.addClass('item_move01');
    item05.addClass('item_move01');
    item06.addClass('item_move01');
  });
  item03.on('mouseenter', function(e){
    e.preventDefault();
    item01.addClass('item_move03');
    item02.addClass('item_move03');
    item04.addClass('item_move01');
    item05.addClass('item_move01');
    item06.addClass('item_move01');
  });
  item04.on('mouseenter', function(e){
    e.preventDefault();
    item01.addClass('item_move03');
    item02.addClass('item_move03');
    item03.addClass('item_move03');
    item05.addClass('item_move01');
    item06.addClass('item_move01');
  });
  item05.on('mouseenter', function(e){
    e.preventDefault();
    item01.addClass('item_move03');
    item02.addClass('item_move03');
    item03.addClass('item_move03');
    item04.addClass('item_move03');
    item06.addClass('item_move01');
  });
  
  // item에 hover 나갈시 원래크기, 같은줄 위치 원상복귀
  projectItem.on('mouseleave', function(e){
    e.preventDefault();
    $(this).removeClass('item_hover');
    $(this).removeClass('item_eff01');
    $(this).removeClass('item_eff02');
    $(this).siblings().removeClass('item_move01');
    $(this).siblings().removeClass('item_move02');
    $(this).siblings().removeClass('item_move03');
    $(this).siblings().removeClass('item_move04');
    // js에서 .css transform를 siblings에 사용시 css와 mouseenter,mouseleave이 계속 겹쳐 오류가 남.
    // $(this).siblings('div').css({transform: 'translate3d(0, 0, 0)'});
  });

  // item에 hover시 정보 나옴, 사라짐
  projectItem.on('mouseenter', function(e){
    e.preventDefault();
    $(this).find(itemInfo).stop().fadeIn();
  });
  projectItem.on('mouseleave', function(e){
    e.preventDefault();
    itemInfo.stop().fadeOut();
  });


  // >>>두번째 줄. 함수로 만들어 콜백함수 처리하면서 줄일것.
  item07.on('mouseenter', function(e){
    e.preventDefault();
    $(this).addClass('item_eff01');
    $(this).siblings().addClass('item_move02');
  });
  item12.on('mouseenter', function(e){
    e.preventDefault();
    $(this).addClass('item_eff02');
    $(this).siblings().addClass('item_move04');
  });
    item08.on('mouseenter', function(e){
    e.preventDefault();
    item07.addClass('item_move03');
    item09.addClass('item_move01');
    item10.addClass('item_move01');
    item11.addClass('item_move01');
    item12.addClass('item_move01');
  });
  item09.on('mouseenter', function(e){
    e.preventDefault();
    item07.addClass('item_move03');
    item08.addClass('item_move03');
    item10.addClass('item_move01');
    item11.addClass('item_move01');
    item12.addClass('item_move01');
  });
  item10.on('mouseenter', function(e){
    e.preventDefault();
    item07.addClass('item_move03');
    item08.addClass('item_move03');
    item09.addClass('item_move03');
    item11.addClass('item_move01');
    item12.addClass('item_move01');
  });
  item11.on('mouseenter', function(e){
    e.preventDefault();
    item07.addClass('item_move03');
    item08.addClass('item_move03');
    item09.addClass('item_move03');
    item10.addClass('item_move03');
    item12.addClass('item_move01');
  });


  // 이력서 기능
  /* 이력서 일단 없앰
  var resume = $('.resume');
  var resumeModal = $('.reume_modal');
  var closeBtn = $('.close_btn');
  resume.on('click', function(e){
    e.preventDefault();
    resumeModal.slideDown();
  });
  closeBtn.on('click', function(e){
    e.preventDefault();
    resumeModal.slideUp();
  });
  */


    // $(this).siblings('div').css({transform: 'translate3d(250px, 0, 0)'});
    // $(this).siblings('div').css({transform: 'translate3d(0, 0, 0)'});
/*  if(item01.is('item_hover') === true){
    item03.css({backgroundColor: '#000'});
    console.log('true');
  }else{
    item03.css({backgroundColor: '#fff'});
    console.log('false');
  }*/


})(this.jQuery);