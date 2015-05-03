angular.module("NoteUp").controller("UsersShowController",function(User, $scope,$routeParams)
{
$scope.user = User.get({id: $routeParams.id});

});
