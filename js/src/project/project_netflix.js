// project_netflix.js
(function($) {
  var video01 = $('#video01');
  var playerPlay = $('.player_play');
  var playerPause = $('.player_pause');
  var playerBack = $('.player_back');
  var playerForward = $('.player_forward');
  var playerQuestion = $('.player_question');
  var playerBubble = $('.player_bubble');
  var playerScreen = $('.player_screen');

  playerPause.on('click', function(e){
    e.preventDefault();
    video01.pause();
    playerPause.hide();
    playerPlay.show();
  });

  playerPlay.on('click', function(e){
    e.preventDefault();
    video01.play();
    playerPlay.hide();
    playerPause.show();
  });



})(this.jQuery);