function func_switch_jq_ani(id){
    var $ele = $(id);
    if($ele.length == 0) return;
    $ele.animate( { opacity: 'toggle',}, { duration: 1000, easing: 'linear', } )
    setTimeout(function(elemId){
        func_switch_jq_ani(elemId);
    }, 500, id);
}

$(function(){
    func_switch_jq_ani("#message");
});



var jump_class;
var scroll_event = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';

function jump(){
  $(document).on(scroll_event,function(e){e.preventDefault();});
  $(document).on('touchmove.noScroll', function(e) {e.preventDefault();});
  $('#body').fadeOut(1000);
  setTimeout(function() {
    window.location.href = jump_class;
  }, 1000);
  $('#body').fadeIn(1000);
  setTimeout(function (){
    $(document).off(scroll_event);
    $(document).off('.noScroll');
  }, 2000);
}

$(".jump_self-analysis").on('click', function() {
  jump_class ="#self-analysis";
  jump();
});

$(".jump_profile").on('click', function() {
  jump_class ="#profile";
  jump();
});

$(".jump_skil_achievement").on('click', function() {
  jump_class ="#skil_achievement";
  jump();
});

$(".jump_comment").on('click', function() {
  jump_class ="#comment";
  jump();
});


$(function () {
    $("#catch_title").animate({
        left: "35%"
    }, 2250).animate({
        left: "100%"
    }, 1800)
});



$(function() {
    $(document).on(scroll_event,function(e){e.preventDefault();});
    $(document).on('touchmove.noScroll', function(e) {e.preventDefault();});
  setTimeout(function() {
    $('#catch_img').fadeOut(1000);
  }, 3000 );
  setTimeout(function (){
    $(document).off(scroll_event);
    $(document).off('.noScroll');
  }, 3750);
});
