import loginController from '../js/loginController';
import loginService from '../js/loginService';

angular.module('employeesApp',[])
.controller('loginController', loginController)
.factory('loginService', loginService);