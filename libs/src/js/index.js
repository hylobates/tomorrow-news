 window.onload = function() {
 	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 0
    });	// body...
 }

var app = angular.module('connect', []);
app.controller('newsconnect', ['$scope','$http' ,function($scope,$http){
	$scope.obj = [];
	$http({
		url:'http://apis.baidu.com/showapi_open_bus/channel_news/search_news',
		param:{'_':Math.random()},
		headers:{'apikey':'51f12c20e568ed12f876326143a2f412'}
	}).success(function(response){
		console.log(response);
		if(response){
			$scope.obj = response.showapi_res_body.pagebean.contentlist;
			console.log($scope.obj);
		}
	})
}])