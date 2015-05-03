angular.module("NoteUp").controller("NotesIndexController",function(Note,$scope)
{
$scope.notes=Note.query();
$scope.search= {};
window.sc = $scope;
});
