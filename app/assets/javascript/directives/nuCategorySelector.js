angular.module("NoteUp").directive("nuCategorySelector",function(Category)
{
  return{
    restrict: "E",
    replace : true,
    require : "?ngModel",
    templateUrl : "/assets/templates/directives/nuCategorySelector.html",
    link : function(scope,element,attrs,ngModelCtrl)
    {
       var activeCategory ={};
      scope.categories = Category.query();
      scope.isActive=function(category)
      {
        return activeCategory&&activeCategory.id === category.id;
      }
      scope.toggleCategory = function(category)
      {
        if(category === activeCategory)
        {
          activeCategory={};
        } else{
        activeCategory = category;

      }
      ngModelCtrl.$setViewValue(activeCategory);
      }
    ngModelCtrl.$render = function(){
      activeCategory = ngModelCtrl.$viewValue;
    }
    }
  };

});
