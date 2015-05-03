angular.module("NoteUp").config(function($routeProvider)

{
  $routeProvider
  .when('/',{
    redirectTo:"/notes/"
  })
  .when('/notes',{

    templateUrl:"assets/templates/notes/index.html",
    controller:"NotesIndexController"

  })


  .when('/notes/new',{

    templateUrl:"assets/templates/notes/new.html",
    controller:"NotesCreateController"

  })
  /*Usually when angular reads notes/:id, 'id' could be anything
  and when notes/new is called it fills in 'id' with new and calls the
  show route instead of the new route. This can be changed  by specifying
  new route above the id route on order of preference*/

  .when('/notes/:id',{

templateUrl:"assets/templates/notes/show.html",
    controller:"NotesShowController"

  })

  .when('/notes/:id/edit',{

    templateUrl:"assets/templates/notes/edit.html",
    controller:"NotesEditController"

  })

  .when('/users',{

    templateUrl:"assets/templates/users/index.html",
    controller:"UsersIndexController"

  })

  .when('/users/new',{
    templateUrl :"assets/templates/users/new.html",
    controller:"UsersCreateController"
  })

  .when('/users/:id',{

    templateUrl:"assets/templates/users/show.html",
    controller:"UsersShowController"

  })



});
