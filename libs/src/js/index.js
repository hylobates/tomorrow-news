 window.onload = function() {
 	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 0
    });	// body...
<<<<<<< HEAD
 };
 var app = angular.module('indexApp',['globelApp']);
 // 无controller时脚页加载不了。。。
 app.controller('indexCtr',function(){

 });
=======

 }
var app = angular.module('connect', ['ui.router','chieffancypants.loadingBar']);
var key = '';
app.controller('changecolor', ['$scope', function($scope){
	$scope.show = function(index,evt){
		key = evt.target.innerText;
		angular.forEach(evt.target.parentNode.offsetParent.children,function(val){
			val.children[0].className = '';
		})
		evt.target.className = 'active';
	}
}])

app.controller('search', ['$scope','$http', function($scope,$http){
	$scope.obj = [];
	$scope.imgUrl = [];
	$scope.title = '';
	$scope.page = 1;
	key = '';
	$scope.search = function(){
		setJson($scope,$http,$scope.page,key,$scope.title);
	}
	$scope.load = function(){
		setJson($scope,$http,$scope.page,key,$scope.title);
	}
}])

app.controller('recommend', ['$scope','$http',function($scope,$http){
$scope.obj = [];
$scope.imgUrl = [];
$scope.page = 1;
key = '';
$scope.load = function(){
	setJson($scope,$http,$scope.page,key);
}
}])

app.controller('home', ['$scope','$http' ,function($scope,$http){
$scope.obj = [];
$scope.imgUrl = [];
$scope.page = 1;
key = '国内';
$scope.load = function(){
	setJson($scope,$http,$scope.page,key);
}
}])
app.controller('distraction', ['$scope','$http' ,function($scope,$http){
$scope.obj = [];
$scope.imgUrl = [];
$scope.page = 1;
key = "娱乐";
$scope.load = function(){
	setJson($scope,$http,$scope.page,key);
}
}])
app.controller('military', ['$scope','$http' ,function($scope,$http){
$scope.obj = [];
$scope.imgUrl = [];
$scope.page = 1;
key = "军事";
$scope.load = function(){
	setJson($scope,$http,$scope.page,key);
}
}])

app.controller('sports', ['$scope','$http' ,function($scope,$http){
$scope.obj = [];
$scope.imgUrl = [];
$scope.page = 1;
key = "体育";
$scope.load = function(){
	setJson($scope,$http,$scope.page,key);
}
}])
app.controller('social', ['$scope','$http' ,function($scope,$http){
$scope.obj = [];
$scope.imgUrl = [];
$scope.page = 1;
key = "社会";
$scope.load = function(){
	setJson($scope,$http,$scope.page,key);
}
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
		.state('search',{
			url:'/search',
			templateUrl:"recommend.html?_"+Math.random(),
			controller:'search'
	})
})
//调用同一增加数据功能
function setJson($scope,$http,page,key,title){
	console.log(title);
	getNews($scope,$http,$scope.page,key,title);
$scope.more = function(){
	$scope.page += 1;
	getNews($scope,$http,$scope.page,key,title);
	}	
}
//分开传输信息
function getNews($scope,$http,page,key,title){
	console.log(title);
	var Url = '';
	if(title){
		 Url = "http://apis.baidu.com/showapi_open_bus/channel_news/search_news?title=" + title + "&page=" + page +""
	}else{
		 Url = 'http://apis.baidu.com/showapi_open_bus/channel_news/search_news?channelName=' + key +'&page=' + page +''
	}
	$http({
		url:Url,
		headers:{'apikey':'51f12c20e568ed12f876326143a2f412'}
	}).success(function(response){
		// console.log(response);
		if(response){
			$scope.obj = $scope.obj.concat(response.showapi_res_body.pagebean.contentlist);
		}
	}).error(function(response) {
			console.log(1);
		/* Act on the event */
	});
}
>>>>>>> 27504504492d43372ad1672cb7f04e182603cf1e
