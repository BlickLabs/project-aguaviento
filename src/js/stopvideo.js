function stopVideo(e){
  var video = $("#aguaviento-video");
  var src = video.attr('src')
  video.attr('src', '');
}

function runVideo(e){
  var video = $("#aguaviento-video");
  var src = 'https://www.youtube.com/embed/8eqGyMWYwHA?controls=0&autoplay=1'
  video.attr('src', src);
}

$(document).on('closed', '.remodal', function (e) {
  var video = $("#aguaviento-video");
  var src = video.attr('src')
  video.attr('src', '');
});