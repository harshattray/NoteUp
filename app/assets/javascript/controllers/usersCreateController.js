angular.module("NoteUp").controller("UsersCreateController",function(User,$scope,$location){
  $scope.user = new User();
  $scope.submitVal = false;
  $scope.saveUser = function(user){
    $scope.submitVal= true;
    user.$save().then(function(){
      $location.path("/users/")

    })

    .finally(function(){
      $scope.submitVal = false;
      $location.path("/users/")

    });
  }

});
