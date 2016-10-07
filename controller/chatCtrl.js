angular.module('chatLineApp',[]).controller('chatCtrl',['$scope',function($scope){
    $scope.lineArr =[];
    $scope.send = function(){
        console.log($scope.lineMe);
        $scope.lineArr.push($scope.lineMe);
        console.log($scope.lineArr);
        $scope.lineMe = '';
  }
}]);