(function()
{
  angular.module("NoteUp",["ngRoute","ngResource","ngGravatar"]).config(function(GravatarProvider){
    GravatarProvider.setSize(100);
  });

})();
