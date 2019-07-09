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

  // item에 hover시 확대
  projectItem.on('mouseenter', function(e){
    e.preventDefault();
    $(this).addClass('item_hover');
  });

  // item에 hover시 같은 줄 item들 이동
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
    item01.on('mouseleave', function(e){
    e.preventDefault();
  });




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