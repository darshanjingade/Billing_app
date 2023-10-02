// function getLoginCridentiels(param){
//     debugger;
//     return $http.get("Billing_app/python/login_crdentiels_check/loginData");
// }

// // var app = angular.module('BillingApp',[])
// // app.controller('loginService', function($http) {
// getLoginCridentiels = function(param) {
//         debugger;
//         return $http.get('./python/login_crdentiels_check/loginData',{params:{input: param}});
//     }
// // })
// // getLinesToApplyDecision: function(params) {
// //     return $http.get("AppealEpisode/Controller/getLinesToApplyDecision", params);
// // }

var app = angular.module('BillingApp',[]);

// app.service('loginService', function($http) {
//     this.
    getLoginCridentiels = function(param) {
        return $http.get('./python/login_crdentiels_check/loginData',{params:{input: param}});
    }
// });
