angular.module("NoteUp").directive("nuPageNav",function(){
  return{
    replace : true,
    restrict : "E",
    templateUrl :"/assets/templates/directives/nuPageNav.html",
     controller: function($scope,$location)
     {
       $scope.isPage = function(name)
       {
        // regEx /\/notes($|\/)/ $ -end of line /
        return new RegExp("/" + name +"($|/)").test($location.path());
       };
     }
   };



});
