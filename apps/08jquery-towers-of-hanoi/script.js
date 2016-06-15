'use strict';

var $block = 0 ;

function checkForWin(){
  if($('[data-stack = "2"]').children().length===4 || $('[data-stack ="3"]').children().length===4 ){
    return true;
  }
}

$(document).ready(function() {  // Put app logic here

  $('[data-stack]').click(function(){
    if ($block === 0){
      $block = $(this).children().last().detach();

    }else{

      if(parseInt($(this).children().last().attr('data-block')) > parseInt($block.attr('data-block')) || $(this).children().length===0){
        $(this).append($block);
        $block = 0;
      }
     }


     if(checkForWin()){
       $("#announce-game-won").text("You won!");
     }



  });
});
