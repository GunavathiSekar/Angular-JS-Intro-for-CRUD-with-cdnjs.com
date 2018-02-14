app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";

    //contacts array to hold list of all contacts
    $scope.contacts = [{
        id: 0,
        'name': 'Viral',
            'email': 'hello@gmail.com',
            'phone': '123-2343-44'
    },
    {
        id: 1,
        'name': 'baranee',
            'email': 'hello@gmail.com',
            'phone': '123-2343-44'
    }];


});

