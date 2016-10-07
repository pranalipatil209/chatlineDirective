angular.module('chatLineApp',[]).controller('chatCtrl',['$scope',function($scope){
    $scope.lineArr =[];
    $scope.lineUser1=[];
    $scope.lineUser2 = [
        {
            line : 'oyeeee',
            sent : 'Fri Oct 07 2016 15:25:32 GMT+0530 (IST)',
            user : 'B'
        },
        {
            line : 'whtsapp??',
            sent : 'Fri Oct 07 2016 15:25:00 GMT+0530 (IST)',
            user : 'B'
        },
        {
            line : 'sh vhdfh gfdigtbj fh',
            sent : 'Fri Oct 07 2016 15:25:47 GMT+0530 (IST)',
            user : 'B'
        },
        {
            line : 'hello!!!!!',
            sent : 'Fri Oct 07 2016 15:25:56 GMT+0530 (IST)',
            user : 'B'
        }
    ];
    $scope.send = function(){
        console.log($scope.lineMe);
        var ch_line = {
            line : $scope.lineMe,
            sent : new Date(),
            user : 'A'
        };
        $scope.lineUser1.push(ch_line);
        $scope.lineArr=$scope.lineUser1.concat($scope.lineUser2);
        console.log($scope.lineArr);
        $scope.lineMe = '';
  }
}]);