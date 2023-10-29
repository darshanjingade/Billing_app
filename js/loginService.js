export default function loginService(){
    $http.get('http://localhost:3000/api/data', {params: param})
        .then(function(response) {
            // Handle the response data here
            $scope.data = response.data;
        })
        .catch(function(error) {
            // Handle errors here
            console.error('Error:', error);
        });
}

//EmployeeService.$inject = ['dependencies-if-needed'];