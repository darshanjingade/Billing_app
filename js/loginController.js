export default function loginController($scope, loginService){
    $scope.username = '';
    $scope.password = '';
    $scope.data = {'dadadadad':"adad"};
    $scope.loginData = function(param){
        loginService.getLoginCridentiels(param)
        .then(function(response){
            $scope.data = response.data;
        })
    }

    $scope.onSubmit = function () {
        $scope.loginData(ls.username)
        if ($scope.username === 'your_username' && $scope.password === 'your_password') {
            alert('Login successful!');
            // Redirect to the dashboard or another page as needed.
        } else {
            alert('Login failed. Please check your credentials.');
        }
    };
   }
   
login_Controller.$inject = ['$scope', 'loginService'];
