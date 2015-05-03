angular.module("NoteUp").controller("NotesShowController",function(Note, $scope,$routeParams,$location)
{
$scope.note = Note.get({id: $routeParams.id});
$scope.deleteNote =function(note)
{
  note.$remove().then(function(){
    $location.path("/notes")
  });//Can use Delete() but IE doesnt support it . Hence remove() which covers all
};

});
