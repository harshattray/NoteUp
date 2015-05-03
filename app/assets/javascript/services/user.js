angular.module("NoteUp").factory("User",function( $resource)
{
  return $resource("/users/",{id : "@id"},{
    update:{
      method: "PUT"
    }
  });
});

// In programming,instances are lowercased while the main class is capitalized
//Angular ngResource creates instances
//notes is an instance of Note
