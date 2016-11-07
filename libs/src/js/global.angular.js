// 我的关注
var globelApp = angular.module('globelApp', []);
// 脚页的directive
// directive需放在factory的前面，不然会莫名其妙的报错。。。。。
globelApp.directive('loadFooter',[function(){
    return{
        restrict:'E',
        templateUrl:'footer.html',
        replace:false
    }
 }]);
globelApp.directive('loading',function(){
    return{
        restrict:'E',
        templateUrl:'loading.html',
        replace:false
    }
});
globelApp.factory('getData', ["$http", function($http) {
    var obj = {};
    // 请求数据并执行回调函数
    obj.reqestHttp = function(channelName,pagenum,callBack) {
        $http({
                method: 'get',
                url: 'http://apis.baidu.com/showapi_open_bus/channel_news/search_news',
                headers: { 'apikey': '51f12c20e568ed12f876326143a2f412' },
                params: { "channelName": channelName,page:pagenum}
                // params:{channelId:"5572a108b3cdc86cf39001cd",title:"人大常委会审议香港基本法第104条解释草案",}
            })
            .success(function(data) {
                callBack(data);
                console.log(data);
            });;
    };
    // 点击关注
    obj.RClick = function(className, currentName,o) {
        switch (className) {
            case 'attention':
            case 'attention attentioned':
            	o.attentioned = !o.attentioned
                var pArr = JSON.parse(window.localStorage.getItem('preference')) || [];
                var obj = {};
                for (var i = 0; i < pArr.length; i++) {
                    if (pArr[i].channelName == currentName) {
                    	pArr.splice(i,1);
                    	window.localStorage.setItem('preference', JSON.stringify(pArr));
                        return false;
                    }
                }
                obj.channelName = currentName;
                switch(obj.channelName){
                    case '焦点':
                        obj.url = "libs/images/focus.jpg";
                        break;
                    case '国内':
                        obj.url = "libs/images/china.jpg";
                        break;
                    case '娱乐':
                        obj.url = "libs/images/yule.jpg";
                        break;
                    case '军事':
                        obj.url = "libs/images/junshi.jpg";
                        break;
                    case '体育':
                        obj.url = "libs/images/tiyu.jpg";
                        break;
                    case '社会':
                        obj.url = "libs/images/shehui.jpg";
                        break;
                    case '国际':
                        obj.url = "libs/images/nation.jpg";
                        break;
                };
                pArr.push(obj);
                window.localStorage.setItem('preference', JSON.stringify(pArr));
                break;
        };
    }
    return obj;
}]);


