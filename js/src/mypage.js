// main.js
// 슬라이드 기능(배너)
// 트리거 관련 값을 만들고 좌, 우 버튼영역 관련된것 삭제, html, css의 좌,우 버튼도 삭제     수정 필요
(function($) {
  // 변수 지정
  var container = $('#container');
  // 이미지 영역
  var slideUl = container.find('.slide_wrap');
  var slideLi = slideUl.children('li');
  // 인디케이트 영역
  var indi = container.find('.indicator_wrap');
  var indiLi = indi.find('li');
  // 배너 및 인디케이트 첫요소 복제 후 마지막 요소로 이동
  var slideClone = slideLi.first().clone(true);
      slideLi.last().after(slideClone);
  var indiClone = indiLi.first().clone(true);
      indiLi.last().after(indiClone);

  // 변수 내용 재설정
      slideUl = container.find('.slide_wrap');
      slideLi = slideUl.children('li');
      indi = container.find('.indicator_wrap');
      indiLi = indi.find('li');
  // 인디케이트 영역
  var playBtn    = indi.find('button');
  // 좌,우 버튼영역
  var btn        = container.find('.btn');
  var lbtn       = btn.find('.lbtn');
  var rbtn       = btn.find('.rbtn');
  // 자동 슬라이드에 대한 변수 지정
  var myAutoSlide, startSlide, stopSlide;
  var timed = 3000;
  // 가로형 슬라이드 ul, li값 처리
  var slideLiLength = slideLi.length;
  slideUl.css({width:slideLiLength*100+'%'});
  var slideW = slideUl.innerWidth();
  slideLi.css({width:slideW/slideLiLength});

  var myIndex = 0;
  var slideI = function(i) {

    if(i < 0){
      i = slideLi.length-1;
      slideUl.stop().css({left:-i*100+'%'});
      i--;
      slideUl.stop().animate({left:-i*100+'%'});
    }else if(i >= slideLi.length-1){
      i = 0;
      slideUl.stop().animate({left:-(slideLi.length-1)*100+'%'},function() {
        slideUl.stop().css({left:0+'%'});
      });
    }else{
      slideUl.stop().animate({left:-i*100+'%'});
    }
    // console.log(myIndex);

    myIndex = i;
    indiLi.removeClass('focus');
    var slideIndex = slideLi.eq(i);
    indiLi.eq(i).addClass('focus');
    return myIndex;
  };

  // 인디케이트
  // 첫 인디케이트, .focus
  indiLi.eq(0).addClass('focus');
  indiLi.eq(-1).hide();

  indiLi.on('click', ['a'], function(e) {
    e.preventDefault();
    myIndex = $(this).index();
    slideI(myIndex);
  });

  // 좌,우 버튼을 클릭시 배너의 내용이 나타나게 만들기
  btn.find('button').on('click',function(e) {
    e.stopPropagation();
    e.preventDefault();
    var _this = $(this);
    (_this[0] == lbtn[0]) ? myIndex-- : myIndex++;
    slideI(myIndex);
  });

  // 자동 슬라이드 배너 처리
  var startSlide = function() { myAutoSlide = setInterval(function() { rbtn.trigger('click');}, timed); };
  var stopSlide = function() { clearInterval(myAutoSlide); };
  startSlide();

  // playBtn 상태를 확인하고, 재생버튼에 대한 내용 처리
  var btnStatus = function(has){
  var _thisI = playBtn.find('i');
  // var nowPause = _thisI.hasClass('fa-pause-circle');
  var nowPause = has | false;
  console.log(nowPause);
  if(nowPause){
    _thisI.removeClass('fa-pause-circle');
    _thisI.addClass('fa-play-circle');
    stopSlide();
  }else{
    _thisI.addClass('fa-pause-circle');
    _thisI.removeClass('fa-play-circle');
    startSlide();
  }
  };

  // 플레이 버튼활용하기
  playBtn.on('click',['button'], function(e) {
    e.preventDefault();
    var nowPause = playBtn.find('i').hasClass('fa-pause-circle');
    btnStatus(nowPause);
  });


  // 글자 hover 효과
/*  var listWrapLi = $('.list_wrap').childeren('ul').children('li');
  var listWrapLi1 = listWrapLi.eq(0);
  var textWrap = listWrapLi.children('dl').children('dt').children('div');
  var textAfter = $('.text_after');
  var textBefore = $('.text_before');

  listWrapLi1.on('mouseenter', function(e) {
    e.preventDefault();
  });*/

// 이력서 보기 버튼을 메인페이지에서 output페이지로 옮김.
// 우측 상단 resume버튼 클릭시 이력서 나오고 x버튼, 이력서 클릭시 없어짐.
/*
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
resumeModal.on('click', function(e){
  e.preventDefault();
  resumeModal.slideUp();
});
*/



})(this.jQuery);