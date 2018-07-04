$.backstretch("../images/bg.jpg");

var setActiveLink = $("#topNav").on("click","a",function(){
    $("#topNav .active").toggleClass("active");
    $this = $(this);
    $this.toggleClass("active");

});

var popUpImg = $("popup").on("click","a",function(){
    $("#topNav .active").toggleClass("show");
    $this = $(this);
    $this.toggleClass("show");
});
//Angular
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider
        .when('/', {templateUrl: 'partials/home.html',controller:"homeCtrl"})
        .when('/groups', {templateUrl: 'partials/groups.html',controller:"groupsCtrl"})
        .when('/stadiums', {templateUrl: 'partials/stadiums.html',controller:"stadiumsCtrl"})
});

myApp.controller('myAppCtrl',function(){

});
myApp.controller('homeCtrl',function(){

});
myApp.controller('groupsCtrl',function(){

});
myApp.controller('stadiumsCtrl',function(){

});





