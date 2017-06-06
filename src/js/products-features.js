$('.features-section.our-brands').click(function(){
  $('.features-section.our-brands').addClass('active')
  $('.features-section.maquila').removeClass('active')
  $('.features-section.industrial').removeClass('active')
  $('.our-brands').removeClass('hidden');
  $('.maquila').addClass('hidden');
  $('.industrial').addClass('hidden');
});

$('.features-section.maquila').click(function(){
    $('.features-section.our-brands').removeClass('active')
  $('.features-section.maquila').addClass('active')
  $('.features-section.industrial').removeClass('active')
  $('.our-brands').addClass('hidden');
  $('.maquila').removeClass('hidden');
  $('.industrial').addClass('hidden');
});

$('.features-section.industrial').click(function(){
    $('.features-section.our-brands').removeClass('active')
  $('.features-section.maquila').removeClass('active')
  $('.features-section.industrial').addClass('active')
  $('.our-brands').addClass('hidden');
  $('.maquila').addClass('hidden');
  $('.industrial').removeClass('hidden');
});