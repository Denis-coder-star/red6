$(document).ready(function(event){
	$('.service-list').click(function(event){
		$('.service-down').toggleClass('service-down-active');
	});
	$('.service-one').click(function(event){
		$('.service-list p').text('Facebook Livestream Views[hourly]');
	});
	$('.service-two').click(function(event){
		$('.service-list p').text('VK Livestream Views[hourly]');
	});
	$('.service-three').click(function(event){
		$('.service-list p').text('Instagram Livestream Views[hourly]');
	});
	$('.service-footh').click(function(event){
		$('.service-list p').text('Twitter Livestream Views[hourly]');
	});
	$('.service-five').click(function(event){
		$('.service-list p').text('YouTube Livestream Views[hourly]');
	});
});

document.body.onload = function() {

    setTimeout(function() {
    var preloader = document.getElementById('preloader');
    if(!preloader.classList.contains('done') ) {
    preloader.classList.add('done');
    }
    }, 1500);
 }