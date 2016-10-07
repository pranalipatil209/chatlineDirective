angular.module('chatLineApp').directive('chatBubble',function(){

    return{
        restrict : 'E',
        scope : {
            line : '='
        },
        templateUrl : 'template/chatIO.html' ,
        link : function($scope,elem,attrib){
            console.log('dir - ',$scope.line);
            console.log('inside directive');

        }
    }
});