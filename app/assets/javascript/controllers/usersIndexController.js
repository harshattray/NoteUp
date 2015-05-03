angular.module("NoteUp").controller("UsersIndexController",function(User,$scope)
{
$scope.users=User.query();

});
