 window.onload = function() {
 	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 0
    });	// body...
 }

app.controller('recommend', ['$scope','$http' ,function($scope,$http){
$scope.obj = [];
$scope.imgUrl = [];
	$http({
		url:'http://apis.baidu.com/showapi_open_bus/channel_news/search_news',
		headers:{'apikey':'51f12c20e568ed12f876326143a2f412'}
	}).success(function(response){
		if(response){
			$scope.obj = response.showapi_res_body.pagebean.contentlist;
		}
	}).error(function(response) {
			console.log(1);
		/* Act on the event */
	});
}])

app.controller('home', ['$scope','$http' ,function($scope,$http){
$scope.obj = [];
$scope.imgUrl = [];
	$http({
		url:'http://apis.baidu.com/showapi_open_bus/channel_news/search_news?channelName=国内最新',
		urlParam:{'_':Math.random()},
		headers:{'apikey':'51f12c20e568ed12f876326143a2f412'}
	}).success(function(response){
		if(response){
			$scope.obj = response.showapi_res_body.pagebean.contentlist;
		}
	})
}])

app.controller('distraction', ['$scope','$http' ,function($scope,$http){
$scope.obj = [];
$scope.imgUrl = [];
	$http({
		url:'http://apis.baidu.com/showapi_open_bus/channel_news/search_news?channelName=娱乐最新',
		urlParam:{'_':Math.random()},
		headers:{'apikey':'51f12c20e568ed12f876326143a2f412'}
	}).success(function(response){
		if(response){
			$scope.obj = response.showapi_res_body.pagebean.contentlist;
		}
	})
}])
app.controller('military', ['$scope','$http' ,function($scope,$http){
$scope.obj = [];
$scope.imgUrl = [];
	$http({
		url:'http://apis.baidu.com/showapi_open_bus/channel_news/search_news?channelName=军事最新',
		urlParam:{'_':Math.random()},
		headers:{'apikey':'51f12c20e568ed12f876326143a2f412'}
	}).success(function(response){
		if(response){
			$scope.obj = response.showapi_res_body.pagebean.contentlist;
		}
	})
}])

app.controller('sports', ['$scope','$http' ,function($scope,$http){
$scope.obj = [];
$scope.imgUrl = [];
	$http({
		url:'http://apis.baidu.com/showapi_open_bus/channel_news/search_news?channelName=体育最新',
		urlParam:{'_':Math.random()},
		headers:{'apikey':'51f12c20e568ed12f876326143a2f412'}
	}).success(function(response){
		if(response){
			$scope.obj = response.showapi_res_body.pagebean.contentlist;
		}
	})
}])
app.controller('social', ['$scope','$http' ,function($scope,$http){
$scope.obj = [];
$scope.imgUrl = [];
	$http({
		url:'http://apis.baidu.com/showapi_open_bus/channel_news/search_news?channelName=社会最新',
		urlParam:{'_':Math.random()},
		headers:{'apikey':'51f12c20e568ed12f876326143a2f412'}
	}).success(function(response){
		if(response){
			$scope.obj = response.showapi_res_body.pagebean.contentlist;
		}
	}).error(function(response) {

		/* Act on the event */
	});
}])
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.when('','/recommend');
			$stateProvider
		.state('recommend',{
			url:'/recommend',
			templateUrl:"recommend.html?_"+Math.random(),
			controller:'recommend'
	})
		.state('home',{
			url:'/home',
			templateUrl:"recommend.html?_"+Math.random(),
			controller:'home'
	})
		.state('distraction',{
			url:'/distraction',
			templateUrl:"recommend.html?_"+Math.random(),
			controller:'distraction'
	})
		.state('military',{
			url:'/military',
			templateUrl:"recommend.html?_"+Math.random(),
			controller:'military'
	})
		.state('sports',{
			url:'/sports',
			templateUrl:"recommend.html?_"+Math.random(),
			controller:'sports'
	})
		.state('social',{
			url:'/social',
			templateUrl:"recommend.html?_"+Math.random(),
			controller:'social'
	})
})