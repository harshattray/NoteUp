angular.module("NoteUp").factory("Category",function( $resource)
{
  return $resource("/categories/:id");
});

// In programming,instances are lowercased while the main class is capitalized
//Angular ngResource creates instances
//notes is an instance of Note
