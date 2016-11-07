 window.onload = function() {
 	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 0
    });	// body...
 };
 var app = angular.module('indexApp',['globelApp']);
 // 无controller时脚页加载不了。。。
 app.controller('indexCtr',function(){

 });
