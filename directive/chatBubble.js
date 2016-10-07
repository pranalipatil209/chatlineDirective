angular.module('chatLineApp').directive('chatBubble',function(){

    return{
        restrict : 'E',
        scope : {
            line : '='
        },
        template : '<div id="chat"><text ng-bind="line"></text></div>',
        link : function($scope,elem,attrib){
            console.log('dir - ',$scope.line);
            console.log('inside directive');

        }
    }
});